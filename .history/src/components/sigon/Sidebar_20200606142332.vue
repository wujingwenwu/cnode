<template>
 <div>
   <div>
   <div class="sidebar2">
   <div class=" m-l-10">CNode：Node.js专业中文社区</div>
   <div class="m-t-20 f-s-14 m-l-10">您可以 登录 或 注册 , 也可以</div>
    <el-button type="primary" @click="logins('ruleForm')">通过GitHub登录</el-button>
   </div>
    <div class="sidebar1">
     <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="" width="270px" height="65px" class="m-l-10 m-t-10">
       <img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="" width="270px" height="65px" class="m-l-10 m-t-10">
      <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" width="270px" height="65px" class="m-l-10 m-t-10">
    </div>
   </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.sidebar1{
    width: 290px;
    height: 245px;
    background: white;
    margin-top: 10px;
}
.sidebar2{
    width: 290px;
    height: 115px;
    background: white;
}
</style>