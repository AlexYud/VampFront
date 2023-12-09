<template>
  <div class="characters">
    <h1 class="title is-1">Personagens</h1>
    <section class="section">
      <div class="columns">
        <div class="column" v-for="char in characters" :key="char.imgAlt">
          <div class="card">
            <div class="card-header">
              <div class="card-header-title is-centered">{{ char.name }}</div>
            </div>
            <div class="card-content">
              <div class="card-image">
                <figure class="image is-256x256">
                  <img :src="Images[char.id]" :alt="char.imgAlt" />
                </figure>
              </div>
              <div class="content">
                <br />
                {{ char.description }}
                <br />
              </div>
            </div>
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

    this.socket.emit("load characters");
    this.socket.on("data characters", (data) => {
      this.characters = data;
      data.forEach((char) => {
        this.Images.push(this.getImg(char.imgName));
      });
    });
  },
  data() {
    return {
      socket: undefined,
      characters: [],
      Images: [],
    };
  },
  methods: {
    getImg(imgName) {
      return require("../assets/" + imgName + ".jpg");
    },
  },
};
</script>

<style scoped>
.characters {
  padding: 0em;
}

h1.title {
  padding-top: 3em;
  color: var(--text);
  margin-bottom: 1em;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--sidebar-item-active);
  color: var(--text);
  border: solid 0.01em;
  box-shadow: 0px 0px 10px var(--text);
}

.card-header-title {
  color: var(--text);
}

.box {
  background-color: whitesmoke;
}

.input {
  background: rgb(233, 233, 233);
}
</style>

