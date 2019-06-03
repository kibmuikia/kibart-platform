<template>
  <!-- <v-layout row wrap align-center justify-space-around class="text-xs-center">
    <v-flex xs12 md5 class="grey lighten-3 pa-3">
      <h1 class="title">
        Welcome To Home
        <small>
          view
        </small>
      </h1>
    </v-flex>
    <v-flex xs12 class="orange lighten-4 pa-2">
      <p>To:</p>
      <router-link to="/about">
        ABOUT view
      </router-link>
    </v-flex>
  </v-layout> -->
  <div id="home-view-wrapper">
    <Landing />
  </div>
</template>

<script>
export default {
  name: "home-view",
  title: "Kibart Gallery Platform | Home",
  layout: "simple-layout", // main-layout - dashboard-layout - simple-layout
  components: {
    Landing: () => import("@/components/Landing/V1/")
  },
  methods: {
    // .
  }
};
</script>
