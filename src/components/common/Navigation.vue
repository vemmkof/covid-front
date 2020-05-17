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
      <v-list-item
        v-if="showLogout"
        @click.stop="logout"
      >
        <v-list-item-action>
          <v-icon color="primary">
            mdi-account
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Logout
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '@/scripts/routes'
import { removeData } from '@/scripts/helper/cookie-helper.js'
export default {
  name: 'Navigation',
  data () {
    return {
      routes: [],
      showLogout: false
    }
  },
  mounted () {
    this.updateNavigationDrawer()
  },
  methods: {
    goto (name) {
      const same = window.location.href.includes(name.toLowerCase())
      if (same) return
      if (name === 'Login') {
        this.logout()
      } else {
        this.$router.push({
          name
        })
      }
    },
    logout () {
      removeData()
      window.location.href = '/'
    },
    updateNavigationDrawer () {
      const logged = this.$cookies.get('access_token')
      const admin = this.$cookies.get('authorities') === 'ADMIN'
      if (logged) {
        this.showLogout = true
        if (admin) {
          this.routes = routes.filter(e => e.logged && e.admin)
        } else {
          this.routes = routes.filter(e => e.logged && !e.admin)
        }
      }
      else {
        this.routes = routes.filter(e => !e.logged)
        this.showLogout = false
      }
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      deep: true,
      handler () {
        this.updateNavigationDrawer()
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>