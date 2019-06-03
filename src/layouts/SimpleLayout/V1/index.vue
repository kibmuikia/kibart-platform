<template>
  <v-app>
    <!-- <Navigation /> -->
    <!-- <v-content> -->
    <!-- <v-container fluid class="grey lighten-3"> -->
    <router-view></router-view>
    <!-- </v-container> -->
    <!-- </v-content> -->
  </v-app>
</template>

<script>
export default {
  name: "simple-layout",
  components: {
    // Navigation: () => import("@/components/Navigation/V1/")
  },
  props: {},
  data() {
    return {
      //
    };
  },
  methods: {
    // .
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
/*.*/
</style>
