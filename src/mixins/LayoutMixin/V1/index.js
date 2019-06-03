function getLayout(vm) {
  const { layout } = vm.$options;
  if (layout) {
    return typeof layout === "function" ? layout.call(vm) : layout;
  }
}

export default {
  created() {
    const layout = getLayout(this);
    if (layout) {
      this.$store.dispatch("setSiteLayout", layout);
    }
  }
};
