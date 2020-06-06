<template>
  <div>
    <div class="nav d-f a-i-c j-c-s-b">
      <div class="d-f">
        <div class="title">
          <img src="./YLAN27~L}0AN1NHKPUD2{)W.png" alt width="120px" height="28px" />
        </div>
        <input type="text" class="item1" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="d-f title1">
        <div class="f-s-14 item">首页</div>
        <div class="f-s-14 item">新手入门</div>
        <div class="f-c-b f-s-14 item">API</div>
        <div class="f-s-14 item">关于</div>
        <div class=" f-s-14 item">注册</div>
        <div class="f-s-14 item">登录</div>
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
  padding: 0 15px;
  color: rgb(195, 163, 116);
}
.item1 {
  width: 233px;
  height: 26px;
  border-radius: 20px;
}
.icon-sousuo {
  margin-left: -220px;
  margin-top: 5px;
}
.title {
  margin-left: 77px;
}
.title1{
  margin-right: 86px;
}

</style>