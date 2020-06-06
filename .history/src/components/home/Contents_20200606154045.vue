<template>
 <div>
  <div class="d-f">
  <div class="">
    <div class="d-f">
    <div class="d-f">
    <div class="contents-item">全部</div>
    <div class="contents-item">精华</div>
    <div class="contents-item">分享</div>
    <div class="contents-item">问答</div>
    <div class="contents-item">招聘</div>
    <div class="contents-item">客户端测试</div>
    </div>

    </div>
  </div> 
  <div class="contents1">

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
         getdata() {
      axios
        .get(`/api/v1/topics`)
        .then(res => {
          this.azz = res.data;
          console.log(this.azz);
        })
        .catch(err => {
          console.log(err);
        });
    }
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
.b{
    margin-top: 10px;
    margin-left: 10px;
}
.contents1{
    width: 290px;
    height: 115px;
    background: white;
}
.contents-item{
  color: #80bd01;
}
</style>