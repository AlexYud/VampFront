<template>
  <div class="login">
    <h1 class="title is-1">Login</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box">
          <p class="subt title is-5">E-mail</p>
          <input class="input" type="email" v-model="email" />
          <p class="subt title is-5">Senha</p>
          <input class="input" type="password" v-model="password" />
          <div class="columns">
            <div class="column">
              <router-link class="button" to="/register">Cadastrar</router-link>
            </div>
            <div class="column">
              <button class="button" @click="login">Logar</button>
            </div>
          </div>
        </div>
        <div v-if="error != undefined">
          <div class="notification">
            <p>{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: undefined,
    };
  },
  methods: {
    login() {
      if (localStorage.getItem("connected") != "true") {
        axios
          .post("http://localhost:8686/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            var msgErr = err.response.data.err;
            this.error = msgErr;
          });
      } else {
        this.error = "Você está em partida!";
      }
    },
  },
};
</script>

<style scoped>
.login {
  padding: 0em;
}

h1.title {
  padding-top: 3em;
  color: var(--text);
  margin-bottom: 2em;
}

.subt {
  margin-top: 1em;
  color: var(--text);
}

.notification {
  background: var(--sidebar-bg-color);
  color: var(--text);
  font-size: 1.5em;
}

.box {
  background-color: var(--sidebar-bg-color);
}

.input {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}

.input:hover,
.input:focus {
  color: var(--text);
  border: solid 0.2em;
}

.button {
  margin-top: 2em;
  margin-bottom: 1em;
  padding: 1.5em;
  background: var(--sidebar-item-active);
  color: var(--text);
  border: solid 0.01em;
}

.button:hover,
.button:focus {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}
</style>>