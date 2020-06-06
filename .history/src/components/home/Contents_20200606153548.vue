<template>
 <div>
  <div class="d-f">
  <div class="">
    <div class="d-f">
    <div class="d-f">
    <div>全部</div>
    <div>精华</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
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
</style>