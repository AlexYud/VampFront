<template>
  <div class="night">
    <section class="section">
      <div class="tile is-parent is-ancestor">
        <div class="tile is-child box">
          <p class="title">{{ data.name }}</p>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <div class="card">
            <div class="card-content">
              <div class="card-image has-text-centered">
                <figure class="image is-256x256 is-inline-block">
                  <img :src="Image" :alt="data.imgAlt" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-parent is-vertical is-6">
          <article class="tile is-child box">
            <p class="subtitle has-text-centered has-text-weight-bold">
              {{ data.description }}
            </p>
          </article>
          <article class="tile is-child box">
            <div class="content">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-stopwatch fa-3x"></i>
                </span>
                <span id="stopwatch" v-if="countdown >= 10"
                  >00:{{ countdown }}</span
                >
                <span id="stopwatch" v-else>00:0{{ countdown }}</span>
              </span>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div v-if="data.isAlive == true" class="tile is-child box">
            <article v-if="isWitch == true">
              <p class="title">Escolha sua poção</p>
              <hr />
              <div class="columns buttons are-large">
                <div v-if="data.killPot == true" class="column">
                  <button class="button" @click="potionSelected('kill')">
                    <span class="icon">
                      <i class="fas fa-skull"></i>
                    </span>
                    <span>Matar</span>
                  </button>
                </div>
                <div v-if="data.savePot == true" class="column">
                  <button class="button" @click="potionSelected('save')">
                    <span class="icon">
                      <i class="fas fa-heart"></i>
                    </span>
                    <span>Salvar</span>
                  </button>
                </div>
                <div v-if="data.killPot == false && data.savePot == false" class="column">
                  <p class="title">Você não tem mais poções.</p>
                </div>
              </div>
              <hr />
              <button class="button is-medium" @click="skipSelected()">
                <span class="icon">
                  <i class="fas fa-forward"></i>
                </span>
                <span>Pular</span>
              </button>
            </article>
            <article v-else>
              <p class="title">Escolha seu alvo</p>
              <hr />
              <div class="columns buttons are-large">
                <div
                  class="column"
                  v-for="player in data.players"
                  :key="player.id"
                >
                  <button class="button" @click="selected(player.id)">
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
            </article>
          </div>
          <div v-else class="tile is-child box">
            <p class="title">Você está morto.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import io from "../components/socket";

export default {
  created() {
    this.socket = io;

    this.socket.emit("load night");

    this.socket.on("data night", (data) => {
      this.data = data;
      this.selected_id = data.preSelected;
      this.getImg(data.imgName);
      if (data.char_id == 2) {
        this.isWitch = true;
      }
    });

    this.socket.emit("start countdown ng");

    this.socket.on("countdown update", (data) => {
      this.countdown = data;
      if (data == 0 && this.finished == false) {
        this.finished = true;
        this.socket.emit("end night", {
          char_id: this.data.char_id,
          char: this.data.name,
          skip: this.skip,
          selected: this.selected_id,
          potion: this.potion,
          isAlive: this.data.isAlive
        });
      }
    });

    this.socket.on("loading", () => {
      this.$router.replace("/loading");
    });
  },
  data() {
    return {
      socket: undefined,
      data: {},
      Image: undefined,
      isWitch: false,
      potion: undefined,
      countdown: -1,
      selected_id: undefined,
      finished: false,
      skip: false,
    };
  },
  methods: {
    getImg(imgName) {
      this.Image = require("../assets/" + imgName + ".jpg");
    },
    selected(id) {
      this.selected_id = id;
      this.skip = false;
    },
    potionSelected(name) {
      this.potion = name;
      this.skip = false;
    },
    skipSelected() {
      this.skip = true;
    },
  },
};
</script>

<style scoped>
.night {
  padding: 0em;
  background: var(--sidebar-item-active);
}

.title,
.subtitle {
  color: var(--text);
}

.section {
  margin: 0em 2em 2em 2em;
}

.tile .is-child {
  color: var(--text);
  background-color: var(--sidebar-bg-color);
  border: solid 0.01em;
}

.card {
  background-color: var(--sidebar-bg-color);
  border: var(--text) solid 0.01em;
}

img {
  height: auto;
  width: auto;
  max-width: 256px;
  max-height: 256px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

hr {
  background-color: var(--text);
}

#stopwatch {
  margin-left: 2em;
  font-size: 2em;
}

.button {
  background: var(--sidebar-item-active);
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