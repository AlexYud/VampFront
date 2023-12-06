<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">

    <h1 class="title">
      <span v-if="collapsed">
        <div>V</div>
        <div>P</div>
      </span>
      <span v-else>
        <h1>Vampiro</h1>
        <h2 class="subtitle">alpha</h2>
      </span>
    </h1>

    <SidebarLink
      :style="{ padding: itemWidth, marginLeft: itemLeft }"
      to="/"
      icon="fas fa-home"
      replace>Home</SidebarLink
    >
    <SidebarLink
      :style="{ padding: itemWidth, marginLeft: itemLeft }"
      to="/play"
      icon="fas fa-cross"
      replace>Jogar</SidebarLink
    >
    <SidebarLink
      :style="{ padding: itemWidth, marginLeft: itemLeft }"
      to="/characters"
      icon="fas fa-bible"
      replace>Personagens</SidebarLink
    >
    <!--
    <SidebarLink
      :style="{ padding: itemWidth, marginLeft: itemLeft }"
      to="/login"
      icon="fas fa-user"
      replace>Login</SidebarLink
    >
    <SidebarLink
      :style="{ padding: itemWidth, marginLeft: itemLeft }"
      to="/admin/users"
      icon="fas fa-cog"
      replace>Admin</SidebarLink
    >
    -->
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth, itemWidth, itemLeft } from "./state";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, itemWidth, itemLeft };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 2em;
  color: var(--text);
}

.subtitle {
  margin-top: 0.5em;
  margin-bottom: 1em;
  color: var(--text);
}

.collapse-icon {
  position: absolute;
  bottom: 0.5em;
  padding: 0.75em;
  color: var(--text);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>