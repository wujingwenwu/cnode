<template>
  <div>
    <div>
      <Nav></Nav>
    </div>
    <div class="d-f">
      <router-view></router-view>
      <sidebar></sidebar>
    </div>

    <div>
      <tail></tail>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/sigon/Nav";
import Tail from "../../components/sigon/Tail";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Nav,
    Tail
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>