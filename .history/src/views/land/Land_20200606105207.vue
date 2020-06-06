<template>
  <div>
 
    <div class="land">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="uesrname">
          <el-input v-model="ruleForm.uesrname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePwd">
          <el-input v-model="ruleForm.rePwd" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
          <el-button type="primary" @click="login('ruleForm')">通过GitHub登录</el-button>
          <div>忘记密码了吗？</div>
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
         let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
         }
     return {
         ruleForm:{
             uesrname:'',
             password:'',
             rePwd:''
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
          rePwd :[
             {
               validator:validatePass,trigger:'blur'
             },
           
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
            this.$message.sucess('登录成功')
          } else {
           this.$message.error('填写错误')
            return false;
          }
        });
      },
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