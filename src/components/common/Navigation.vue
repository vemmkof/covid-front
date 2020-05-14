<template>
  <v-navigation-drawer
    app
    fixed
    clipped
    :expand-on-hover="true"
  >
    <v-list dense>
      <v-list-item
        link
        v-for="route in routes"
        v-bind:key="route.name"
        @click.stop="goto(route.name)"
      >
        <v-list-item-action>
          <v-icon color="primary">
            {{ route.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ route.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '@/scripts/routes'
export default {
  name: 'Navigation',
  data () {
    return {
      routes: []
    }
  },
  mounted () {
    const logged = this.$cookies.get('logged')
    const admin = this.$cookies.get('admin')
    if (logged) {
      this.routes = routes.filter(e => e.logged)
    }
    else {
      if (admin) {
        this.routes = routes.filter(e => !e.logged && e.admin)
      } else {
        this.routes = routes.filter(e => !e.logged && !e.admin)
      }
    }
    this.routes = routes
  },
  methods: {
    goto (name) {
      const same = window.location.href.includes(name.toLowerCase())
      console.log(same)
      if (same) return
      if (name === 'Login') {
        window.location.href = '/'
      } else {
        this.$router.push({
          name
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>