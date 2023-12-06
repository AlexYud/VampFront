<template>
  <div :style="{ 'margin-left': sidebarWidth }">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #372721;
  --sidebar-item-hover: #59443A;
  --sidebar-item-active: #241711;
  --text: #59523a;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

body {
  background-color: var(--sidebar-item-active);
}

::-webkit-scrollbar {display:none;}
</style>