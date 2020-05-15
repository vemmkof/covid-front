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
                @click.stop="login"
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
// import { login } from '@/scripts/api/oauth-api.js'
import axios from 'axios'
import queryString from 'query-string'
export default {
  data () {
    return {
      showPassword: false,
      username: '2014041111',
      password: 'PEPP980613HDFLCR04',
      regex
    }
  },
  methods: {
    login () {
      const validate = this.$refs.loginForm.validate()
      console.log(validate)
      if (validate) {
        // axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        //   .then(response => { console.log(response) })
        //   .catch(error => console.error(error))

        const requestBody = {
          grant_type: 'password',
          username: this.username,
          password: this.password
        }

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic dnVlU2VndWltaWVudG9Db3ZpZEFjdGl2aWRhZGVzOjNlYWIyNTY0MzM4OWFhMDMyYzc2ZDc0NGQ4ZDU3MWFl'
          }
        }

        axios.post('https://rocky-depths-49701.herokuapp.com/oauth/token', queryString.stringify(requestBody), config)
          .then((result) => {
            console.log({ result })
          })
          .catch((err) => {
            console.log({ err })
          })

      }
    }
  },
}
</script>

<style lang="sass" scoped>
</style>