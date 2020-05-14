<template>
  <v-app id="app">
    <navigation-vue />
    <app-bar-vue />
    <router-view />
    <footer-vue />
  </v-app>
</template>
<script>
import NavigationVue from './components/common/Navigation.vue'
import AppBarVue from './components/common/AppBar.vue'
import FooterVue from './components/common/Footer.vue'
export default {
  components: {
    NavigationVue,
    AppBarVue,
    FooterVue

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
