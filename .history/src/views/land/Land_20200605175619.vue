<template>
 <div>
 <div class="land">
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="uesrname">
    <el-input v-model="ruleForm.uesrname"></el-input>
  </el-form-item>
     <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login('ruleForm')">登录</el-button>
    
  </el-form-item>
</el-form>
</div>
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
             },
             {
               min:2,max:10,message:'用户名在2-10位之间',trigger:'blur'
             }
           ],
           password:[
             {
               required:true, message:'密码不能为空',trigger:'blur'
             },
             {
               min:6,max:15,message:'密码在2-10位之间',trigger:'blur'
             }
           ],
         }

   }
   },
   components: {

   },
   methods: {
         login(formName) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
.land{
  width: 300px;
  height: 25px;
}
</style>