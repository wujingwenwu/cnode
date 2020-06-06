<template>
 <div>
   <div>
    <div class="sidebar1">
     <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="" width="270px" height="65px" class="m-l-10 m-t-10">
       <img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="" width="270px" height="65px" class="m-l-10 m-t-10">
      <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" width="270px" height="65px" class="m-l-10 m-t-10">
    </div>
    <div class="sidebar2">
    <div class="f-s-14 sidebar-item"><div class="m-t-5 m-l-5">无人回复的话题</div></div>
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
    height: 170px;
    background: white;
    margin-top: 10px;
}
.sidebar-item{
    width: 100%;
    height: 30px;
    background: rgb(246, 246, 246);
}
</style>