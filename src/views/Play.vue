<template>
  <div class="edit">
    <h1 class="title is-1">Entrar</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box">
          <p class="subt title is-5">Nome</p>
          <input class="input" type="text" v-model="name" />
          <button class="button" @click="join({ name })">Entrar</button>
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
import io from "../components/socket";

export default {
  created() {
    this.socket = io;
    if (localStorage.getItem("connected") == "true") {
      this.$router.replace("/lobby");
    }

    this.socket.on("join ok", () => {
      localStorage.setItem("connected", "true");
      this.$router.replace("/lobby");
    });
  },
  data() {
    return {
      name: "",
      socket: undefined,
      error: undefined,
    };
  },
  methods: {
    join() {
      this.error = undefined;
      this.socket.emit("join lobby", this.name);
      this.socket.on("error", (data) => {
        this.error = data;
      });
    },
  },
};
</script>

<style scoped>
.edit {
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
  box-shadow: 0px 0px 10px var(--text);
}

.input {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}

.input:hover, .input:focus {
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

.button:hover, .button:focus {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}
</style>