<template>
 <div>
   <Nav></Nav>
   <div>
   <router-view></router-view>
   </div>
   <tail></tail>
 </div>
</template>

<script>
import Nav from '../../components/sigon/Nav'
import Tail from '../../components/sigon/Tail'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
         Nav,
         Tail
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

</style>