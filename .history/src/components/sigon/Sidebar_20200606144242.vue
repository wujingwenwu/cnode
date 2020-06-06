<template>
  <div>
    <div>
      <div class="sidebar1">
        <img
          src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"
          alt
          width="270px"
          height="65px"
          class="m-l-10 m-t-10"
        />
        <img
          src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq"
          alt
          width="270px"
          height="65px"
          class="m-l-10 m-t-10"
        />
        <img
          src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"
          alt
          width="270px"
          height="65px"
          class="m-l-10 m-t-10"
        />
      </div>
      <div class="sidebar2">
        <div class="f-s-14 sidebar-item">
          <div class="sidebar-item1">无人回复的话题</div>
        </div>
        <div>
          <div class="f-c-hu f-s-14 m-t-5 m-l-10">我招了个程序员：他什么都好，就是不太会...</div>
          <div class="f-c-hu f-s-14 m-t-5 m-l-10">CabloyJS V3.2.0支持Socket IO</div>
          <div class="f-c-hu f-s-14 m-t-5 m-l-10">从零到部署：用 Vue 和 Express 实现迷你...</div>
          <div class="f-c-hu f-s-14 m-t-5 m-l-10">Linux 主机在线文件管理工具</div>
          <div class="f-c-hu f-s-14 m-t-5 m-l-10">nodejs 的反序列化存在漏洞么</div>
        </div>
      </div>
      <div class="sidebar3">
      
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
.sidebar1 {
  width: 290px;
  height: 245px;
  background: white;
  margin-top: 10px;
}
.sidebar2 {
  width: 290px;
  height: 178px;
  background: white;
  margin-top: 10px;
}
.sidebar-item {
  width: 100%;
  height: 20px;
  background: rgb(246, 246, 246);
}
.sidebar-item {
  padding: 10px 10px;
}
.sidebar3{
   width: 290px;
   height: 350px;
   background: white;
  margin-top: 10px;
}
</style>