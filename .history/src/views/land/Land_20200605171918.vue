<template>
 <div>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="uesrname">
    <el-input v-model="ruleForm.uesrname"></el-input>
  </el-form-item>
     <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name:'',
   props:{

    },
   data () {
     return {
         ruleForm:{
             uesrname:'',
             password:''
         },
         rules:{
           uesrname:[
             {
               required:true, message:'用户名不能为空',trigger:'blur'
             }
           ]
         }

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

</style>