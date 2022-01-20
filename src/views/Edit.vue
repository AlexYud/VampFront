<template>
  <div class="edit">
    <h1 class="title is-1">Edição de usuário</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="error != undefined">
          <div class="notification is-danger is-light">
            <p>{{ error }}</p>
          </div>
        </div>
        <div class="box">
          <p class="subt title is-5">Nome</p>
          <input
            class="input"
            type="text"
            placeholder="Nome do usuário"
            v-model="name"
          />
          <p class="subt title is-5">E-mail</p>
          <input
            class="input"
            type="email"
            placeholder="email@email.com"
            v-model="email"
          />
          <button class="button" @click="update">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    var req = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("http://localhost:8686/user/" + this.$route.params.id, req)
      .then((res) => {
        this.name = res.data.name;
        this.email = res.data.email;
        this.id = res.data.id;
      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({ name: "Users" });
      });
  },
  data() {
    return {
      name: "",
      email: "",
      id: -1,
      error: undefined,
    };
  },
  methods: {
    update() {
      var req = {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .put(
          "http://localhost:8686/user",
          {
            name: this.name,
            email: this.email,
            id: this.id,
          },
          req
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Users" });
        })
        .catch((err) => {
          var msgErr = err.response.data.err;
          this.error = msgErr;
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

.box {
  background: var(--sidebar-bg-color);
  border: var(--text) solid 0.01em;
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

