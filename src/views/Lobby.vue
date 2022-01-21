<template>
  <div class="lobby">
    <h1 class="title is-1">Lobby</h1>
    <section class="section">
      <table class="table is-fullwidth">
        <thead>
          <tr class="subtitle is-4">
            <th>Esperando</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
          </tr>
        </tbody>
        <tfoot v-if="countdown > 3">
          <tr>
            <div class="title is-4">Jogadores na sala: {{ players }}/5</div>
          </tr>
          <tr>
            <button class="button" @click="dis()">
              <span class="icon"><i class="fas fa-arrow-left"></i></span>
              <span>Sair</span>
            </button>
            <button v-if="players == 5" class="button" @click="start()">Começar</button>
          </tr>
        </tfoot>
        <tfoot v-else>
          <span class="title is-1">{{ countdown }}</span>
        </tfoot>
      </table>
    </section>
    <section class="section"></section>
  </div>
</template>

<script>
import io from "../components/socket";

export default {
  created() {
    this.socket = io;

    this.socket.emit("load lobby");

    this.socket.on("new user", (users) => {
      this.users = users;
      this.players = users.length;
    });

    this.socket.on("countdown update", (data) => {
      this.countdown = data;
    });

    this.socket.on("night", () => {
      this.$router.replace("/night");
    });
  },
  data() {
    return {
      socket: undefined,
      users: [],
      players: 0,
      countdown: 4,
    };
  },
  methods: {
    dis() {
      this.socket.emit("dis");
      localStorage.setItem("connected", "false");
      this.$router.replace("/play");
    },
    start() {
      this.socket.emit("start countdown lb");
    },
  },
};
</script>

<style scoped>
.lobby {
  padding: 0em;
  background: var(--sidebar-item-active);
}

h1.title {
  padding-top: 2em;
  color: var(--text);
}

span.title {
  display: block;
  padding: 1em;
  color: var(--text);
}

.section {
  margin: 2em;
}

.table {
  background-color: var(--sidebar-bg-color);
}

.table td,
.table th {
  padding: 1em;
  vertical-align: middle;
  color: var(--text);
  border: var(--text) solid 0.01em;
}

td {
  font-size: 1.5em;
  color: var(--text);
  background-color: var(--sidebar-item-hover);
}

tfoot {
  border: var(--text) solid 0.01em;
}

tfoot tr .title {
  display: block;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  color: var(--text);
}

.button {
  background: var(--sidebar-item-active);
  color: var(--text);
  padding: 1.8em;
  margin: 0em 5em 2em 5em;
  border: solid 0.01em;
}

.button:hover {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}
</style>