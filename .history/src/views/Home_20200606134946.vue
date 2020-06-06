<template>
 <div class="top">
   <content></content>
 </div>
</template>

<script> 
  import Content from '../components/home/Content'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
       Content
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
.top{
  width: 100%;
  background: rgb(225, 225, 225); 
}

</style>
