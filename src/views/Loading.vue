<template>
  <div class="loading">
    <div class="columns is-centered">
      <div class="column is-half">
        <section class="section">
          <div class="title">Espere</div>
          <div class="title">{{ countdown }}</div>
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

    this.socket.emit("loading");

    this.socket.on("countdown update", (data) => {
      this.countdown = data;
    });

    this.socket.on("end", () => {
      this.$router.replace("/end");
    });

    this.socket.on("morning", () => {
      this.$router.replace("/morning");
    });
  },
  data() {
    return {
      socket: undefined,
      countdown: -1,
    };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #372721;
  --sidebar-item-hover: #564137;
  --sidebar-item-active: #241711;
  --text: #7e6f3d;
}
</style>

<style scoped>
.loading {
  padding: 1em;
  background: var(--sidebar-item-active);
}

.title {
  padding-top: 3em;
  font-size: 3em;
  color: var(--text);
}
</style>