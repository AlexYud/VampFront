<template>
  <div class="end">
    <div class="columns is-centered">
      <div class="column is-half ">
        <section class="section fade-in-text">
          <div class="title">{{ winner }} GANHOU.</div>
          <div class="subtitle">{{ vamp }} era o Vampiro.</div>
          <div class="subtitle" v-for="play in plays" :key="play">
            {{ play }}
          </div>
        </section>
        <section class="section">
          <button class="button" @click="leave()">Sair</button>
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

    this.socket.on("data end", (data) => {
      this.winner = data.winner;
      this.vamp = data.vamp;
      this.plays = data.log;
    });
  },
  data() {
    return {
      socket: undefined,
      winner: undefined,
      vamp: undefined,
      plays: [],
    };
  },
  methods: {
    leave() {
      localStorage.setItem("connected", "false");
      this.$router.replace('/lobby')
    }
  }
};
</script>

<style scoped>
.end {
  padding: 1em;
  background: var(--sidebar-item-active);
}

.title {
  padding-top: 3em;
  padding-bottom: 1em;
  font-size: 3em;
  color: var(--text);
}

.subtitle {
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

.fade-in-text {
  display: inline-block;
  animation: fadeIn linear 7s;
  -webkit-animation: fadeIn linear 7s;
  -moz-animation: fadeIn linear 7s;
  -o-animation: fadeIn linear 7s;
  -ms-animation: fadeIn linear 7s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>