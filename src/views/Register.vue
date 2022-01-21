<template>
  <div class="register">
    <h1 class="title is-1">Registro de usuário</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box">
          <p class="subt title is-5">Nome</p>
          <input
            class="input"
            type="text"
            v-model="name"
          />
          <p class="subt title is-5">E-mail</p>
          <input
            class="input"
            type="email"
            v-model="email"
          />
          <p class="subt title is-5">Senha</p>
          <input
            class="input"
            type="password"
            v-model="password"
          />

          <button class="button" @click="register">Cadastrar</button>
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
      name: "",
      email: "",
      password: "",
      error: undefined,
    };
  },
  methods: {
    register() {
      if (localStorage.getItem("connected") != "true") {
        axios
          .post("http://localhost:8686/user", {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
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
.register {
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
  background: var(--sidebar-bg-color);
  border: var(--text) solid 0.01em;
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

