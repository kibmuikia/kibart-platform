<template>
  <v-container fluid fill-height>
    <v-layout column align-center>
      <v-flex xs12>
        <h3>Landing V1</h3>
      </v-flex>
    </v-layout>
    <Navigation class="landingNav" />
  </v-container>
</template>

<script>
export default {
  name: "landing-component-v1",
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
.landingNav {
  position: relative !important;
  top: 50%;
  bottom: 0;
}
</style>
