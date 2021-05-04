import { reactive, ref, watch } from 'vue';

type Form = {
    email: {
        value: string,
        validators: {
            required: (val: string) => boolean,
        }
    },
    password: {
        value: string,
        validators: {
            required: (val: string) => boolean,
            minLength: (num: number) => (val: string) => boolean
        }
    }
}

export function useForm(init: Form) {
    const form = reactive({})

    for (const [key, field] of Object.entries(init)) {
        const valid = ref(true)
        const value = ref(field.value)
        const errors = reactive({})

        Object.keys(field.validators ?? {})
            .map(name => {
                const isValid = field.validators[name](field.value)
                errors[name] = !!isValid
            })

        watch(value, newValue => {
            Object.keys(field.validators ?? {})
                .map(name => {
                    const isValid = field.validators[name](newValue)
                    errors[name] = !!isValid
                    valid.value = !!isValid
                })
        })

        form[key] = {
            valid,
            value,
            errors
        }
    }
    return form
}
