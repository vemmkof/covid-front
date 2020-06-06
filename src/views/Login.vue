<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="loginForm">
                <v-text-field
                  id="boleta"
                  label="Boleta"
                  name="boleta"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="username"
                  required
                  :rules="regex.usernameRule"
                ></v-text-field>

                <v-text-field
                  id="curp"
                  label="CURP"
                  name="curp"
                  prepend-icon="mdi-lock"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye-off' :'mdi-eye' "
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                  required
                  :rules="regex.passwordRule"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click.stop="login"
                :disabled="loader"
                :loading="loader"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import regex from '@/scripts/regex'
import { login, checkToken } from '@/scripts/api/oauth-api.js'
import { setToken, setData } from '@/scripts/helper/cookie-helper.js'
export default {
  data () {
    return {
      showPassword: false,
      username: '2014041111',
      password: 'PEPP980613HDFLCR04',
      loader: false,
      regex
    }
  },
  methods: {
    login () {
      const validate = this.$refs.loginForm.validate()
      if (validate) {
        this.loader = true
        login({
          username: this.username,
          password: this.password
        })
          .then((result) => {
            setToken(result.data)
            return checkToken()
          })
          .then(result => {
            const role = setData(result.data)
            if (role === 'ADMIN') {
              this.$router.push({
                name: 'Home'
              })
            } else {
              this.$router.push({
                name: 'Quiz'
              })
            }
          })
          .catch(() => {
          })
          .finally(() => {
            this.loader = false
          })
      }
    }
  },
}
</script>

<style lang="sass" scoped>
</style>