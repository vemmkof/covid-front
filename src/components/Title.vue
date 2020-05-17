<template>
  <v-app-bar
    dark
    color="primary"
  >
    <v-spacer></v-spacer>
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
  },
}
</script>

<style lang="scss" scoped>
</style>