<template>
  <div class="morning">
    <div class="columns is-centered">
      <div class="column is-half">
        <section class="section fade-in-text">
          <div class="title">AMANHECE</div>
          <hr>

          <div class="block" v-if="dead == 0">
            <div class="subtitle">Ninguém morreu!</div>
          </div>

          <div class="block" v-else-if="dead == 1">
            <div class="subtitle">Um corpo foi encontrado!</div>
            <br>
            <div class="subtitle block">Morto: {{ deadList[0].username }}</div>
          </div>

          <div class="block" v-if="dead == 2">
            <div class="subtitle">Dois corpos foram encontrados!</div>
            <br>
            <div class="subtitle">
              Mortos: {{ deadList[0].username }} e {{ deadList[1].username }}
            </div>
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
    
    this.socket.on("countdown update", (data) => {
      this.countdown = data;
    });

    this.socket.on("data morning", (data) => {
      this.dead = data.dead;
      this.deadList = data.deadList;
    });

    this.socket.on("bonfire", () => {
      this.$router.replace('/bonfire');
    })

  },
  data() {
    return {
      socket: undefined,
      countdown: -1,
      dead: -1,
      deadList: [],
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