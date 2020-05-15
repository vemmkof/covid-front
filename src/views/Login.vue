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
                  label="curp"
                  name="curp"
                  prepend-icon="mdi-lock"
                  :type="showPassword ? 'password' : 'text'"
                  :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
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
                @click.stop="login()"
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
import { login } from '@/scripts/api/oauth-api.js'
export default {
  data () {
    return {
      showPassword: false,
      username: '',
      password: '',
      regex
    }
  },
  methods: {
    login () {
      const validate = this.$refs.loginForm.validate()
      console.log(validate)
      if (validate) {
        login({
          grant_type: 'password',
          username: this.username,
          password: this.password
        })
      }
    }
  },
}
</script>

<style lang="sass" scoped>
</style>