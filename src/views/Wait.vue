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

    this.socket.emit("wait");

    this.socket.on("countdown update", (data) => {
      this.countdown = data;
    });

    this.socket.on("bonfireResult", () => {
      this.$router.replace("/bonfireResult");
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