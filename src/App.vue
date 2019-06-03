<template>
  <!-- <v-app>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app> -->
  <component :is="sitelayout" />
</template>

<script>
export default {
  name: "App",
  components: {
    "main-layout": () => import("./layouts/MainLayout/V1"),
    "dashboard-layout": () => import("./layouts/DashboardLayout/V1"),
    "simple-layout": () => import("./layouts/SimpleLayout/V1")
  },
  data() {
    return {
      //
    };
  },
  computed: {
    sitelayout: function() {
      return this.$store.getters.sitelayout;
    }
  }
};
</script>
