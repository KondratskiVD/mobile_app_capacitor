<template>
  <div class="auth">
    <div class="auth-logo">
      <span>LOGO</span>
    </div>
    <pre>
      {{ form.email }}
      <br>
      {{ form.password }}
    </pre>
    <form class="auth-form" @submit.prevent="submit">
      <div class="auth-form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" placeholder="E-mail профиля" v-model="form.email.value">
      </div>
      <div class="auth-form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" placeholder="Введите пароль" v-model="form.password.value">
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useForm } from './use/form'

const required = (val) => !!val;
const minLength = (num) => (val) => val.length > num;

export default defineComponent({
  name: "AuthEmail",
  setup() {
    const form = useForm({
      email: {
        value: 'string@qwe.qwe',
        validators: {
          required,
        }
      },
      password: {
        value: '1233',
        validators: {
          required,
          minLength: minLength(6)
        }
      }
    })

    function submit() {
      return false
    }

    return { form, submit }
  }
})
</script>

<style lang="scss" scoped>
.auth {
  background: #E9EDF0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-logo {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 120px;
      height: 120px;
      border-radius: 20px;
      box-shadow: -13px -13px 17px rgba(255, 255, 255, 0.8),
      13px 13px 17px rgba(212, 219, 230, 1);
      color: #40C1AC;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
    }
  }
  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      width: 100%;
      label {
        color: #2D373E;
      }
      input {
        box-shadow: inset 0px -3px 4px #FFFFFF, inset 0px 3px 4px #D3DBE6;
        background: #E9EDF0;
        color: #616E7D;
        border-radius: 15px;
        border: transparent;
        height: 30px;
        padding-left: 15px;
        margin-left: 15px;
      }
    }
    button {
      border-radius: 20px;
      box-shadow: -13px -13px 17px rgba(255, 255, 255, 0.8),
      13px 13px 17px rgba(212, 219, 230, 1);
      color: #616E7D;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      background: #E9EDF0;
      width: 160px;
      height: 40px;
      text-align: center;
      position: relative;
      font-size: 16px;
      outline: none;
      margin-top: 40px;
      &:hover {
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(212, 219, 230, 1);
      }

      &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
        inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #40C1AC;
      }
    }
  }
}
</style>
