<template>
 <div>
   <Nav></Nav>
   <router-view></router-view>
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