<template>
  <div class="morning">
    <div class="columns is-centered">
      <div class="column is-half">
        <section class="section fade-in-text">
          <div class="title">FOGUEIRA</div>
          <hr>
          <div class="block" v-if="dead == 0">
            <div class="subtitle">Ninguém foi para fogueira</div>
          </div>
          <div class="block" v-else>
            <div class="subtitle">Uma pessoa foi escolhida para fogueira.</div>
            <br>
            <div class="subtitle block">O escolhido foi: {{ deadList.username }}</div>
          </div>
          <hr>
          <div class="title is-3">{{ countdown }}</div>
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

    this.socket.emit("start countdown bfResult")
    
    this.socket.on("countdown update", (data) => {
      this.countdown = data;
    });

    this.socket.on("data bfResult", (data) => {
      this.dead = data.dead;
      this.deadList = data.deadList;
    });

    this.socket.on("night", () => {
      this.$router.replace('/night')
    })

  },
  data() {
    return {
      socket: undefined,
      countdown: -1,
      dead: -1,
      deadList: undefined,
    };
  },
};
</script>

<style scoped>
.morning {
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