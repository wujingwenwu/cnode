<template>
  <div>
    <div class="nav d-f a-i-c j-c-s-a">
    <div class="nav1 d-f">
      <div class="d-f">
        <div class="title">
          <img src="./YLAN27~L}0AN1NHKPUD2{)W.png" alt width="120px" height="28px" />
        </div>
        <input type="text" class="item1" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="d-f">
        <div class="f-c-b f-s-14 item">首页</div>
        <div class="f-c-b f-s-14 item">新手入门</div>
        <div class="f-c-b f-s-14 item">API</div>
        <div class="f-c-b f-s-14 item">关于</div>
        <div class="f-c-b f-s-14 item">注册</div>
        <div class="f-c-b f-s-14 item">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100%;
  height: 50px;
  background: rgb(68, 68, 68);
}
.item {
  padding: 0 10px;
}
.item1 {
  width: 233px;
  height: 26px;
  border-radius: 20px;
}
.icon-sousuo {
  margin-left: -20px;
}
.title {
  margin-right: 50px;
}
.nav1{
  width: 800px;
}
</style>