<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-container>
      <v-layout column align-center>
        <v-flex xs12>
          <h1>Dashboard Layout</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "dashboard-layout",
  components: {
    Navigation: () => import("@/components/Navigation/V1/")
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
