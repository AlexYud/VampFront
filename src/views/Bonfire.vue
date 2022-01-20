<template>
  <div class="bonfire">
    <div class="columns is-centered">
      <div class="column is-half">
        <section class="section">
          <div class="title is-spaced fade-in-text">VOTAÇÃO</div>
          <hr />
          <div class="content">
            <span class="icon-text">
              <div class="icon">
                <i class="fas fa-stopwatch fa-3x"></i>
              </div>
              <span id="stopwatch" v-if="countdown >= 10"
                >00:{{ countdown }}</span
              >
              <span id="stopwatch" v-else>00:0{{ countdown }}</span>
            </span>
          </div>
          <div class="subtitle">Escolha quem deverá ir para a fogueira:</div>
          <hr />
          <div v-if="data.isAlive == true">
            <div class="columns buttons are-large">
              <div
                class="column"
                v-for="player in data.aliveList"
                :key="player.id"
              >
                <button class="button" @click="select(player.id)">
                  {{ player.username }}
                </button>
              </div>
            </div>
            <hr />
            <button class="button is-medium" @click="skipSelected()">
              <span class="icon">
                <i class="fas fa-forward"></i>
              </span>
              <span>Pular</span>
            </button>
          </div>
          <div v-else>
            <p class="title">Você está morto</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import io from "../components/socket";

export default {
  created() {
    this.socket = io;

    this.socket.emit("load bonfire");

    this.socket.on("data bonfire", (data) => {
      this.data = data;
    });

    this.socket.emit("start countdown bf");

    this.socket.on("countdown update", (data) => {
      this.countdown = data;
      if (data == 0 && this.finished == false) {
        this.finished = true;
        this.socket.emit("end bonfire", {
          id: this.data.id,
          username: this.data.username,
          skip: this.skip,
          selected: this.selected,
          isAlive: this.data.isAlive,
        });
      }
    });

    this.socket.on("wait", () => {
      this.$router.replace("/wait");
    });
  },
  data() {
    return {
      socket: undefined,
      data: {},
      countdown: -1,
      selected: undefined,
      skip: true,
      finished: false,
    };
  },
  methods: {
    select(id) {
      this.selected = id;
      this.skip = false;
    },
    skipSelected() {
      this.skip = true;
    },
  },
};
</script>

<style scoped>
.bonfire {
  padding: 1em;
  background: var(--sidebar-item-active);
}

.title {
  padding-top: 3em;
  font-size: 3em;
  color: var(--text);
}

.subtitle {
  color: var(--text);
}

hr {
  background-color: var(--text);
}

#stopwatch {
  margin-left: 0.5em;
  font-size: 2em;
}

.content {
  color: var(--text);
}

.button {
  background: var(--sidebar-bg-color);
  color: var(--text);
  border: solid 0.01em;
  padding: 2em;
}

.button:hover,
.button:focus {
  background: var(--sidebar-item-hover);
  color: var(--text);
  border: solid 0.01em;
}
</style>