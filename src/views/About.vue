<template>
  <v-layout row wrap align-center justify-space-around class="text-xs-center">
    <v-flex xs12 md5 class="green lighten-4 pa-3">
      <h1 class="title">
        Welcome To About
        <small>
          view
        </small>
      </h1>
    </v-flex>
    <v-flex xs12 class="orange lighten-4 pa-2">
      <p>Back to:</p>
      <router-link to="/">
        HOME view
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "about-view",
  title: "About Kibart Gallery Platform",
  layout: "main-layout", // main-layout - dashboard-layout - simple-layout
  methods: {
    // .
  }
};
</script>
