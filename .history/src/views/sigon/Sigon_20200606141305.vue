<template>
  <div class="a">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <router-view>
        
      </router-view>
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
import Sidebar from "../../components/sigon/Sidebar";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Nav,
    Tail,
    Sidebar
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.a{
  width: 100%;
  background: rgb(225, 225, 225);
}
</style>