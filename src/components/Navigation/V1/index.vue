<template>
  <div class="navigation-wrapper">
    <v-toolbar app class="animated fadeInDown">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Kibart Gallery Platform</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link, index) in basiclinks"
          :key="index"
          :to="link.path"
          style="height:70%;"
          flat
          class="mx-1"
        >
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- . -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile
          v-for="(link, index) in basiclinks"
          :key="index"
          @click="goto(link.path)"
        >
          <v-list-tile-action>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ link.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navigation-component-v1",
  components: {},
  props: {},
  data() {
    return {
      drawer: false,
      basiclinks: this.$store.getters.basiclinks
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
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
