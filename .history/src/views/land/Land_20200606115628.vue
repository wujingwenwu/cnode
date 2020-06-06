<template>
  <div class="lands">
    <div class="land1 d-f a-i-c j-c-s-b">
      <div class="d-f">
        <div class="land-title">
          <img src="./YLAN27~L}0AN1NHKPUD2{)W.png" width="120px" height="28px" class="hover" />
        </div>
        <input type="text" class="land-item1" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="d-f land-title1">
        <div class="f-s-14 items">首页</div>
        <div class="f-s-14 items">新手入门</div>
        <div class="f-c-b f-s-14 item">API</div>
        <div class="f-s-14 items">关于</div>
        <div class="f-s-14 items">注册</div>
        <div class="f-s-14 items">登录</div>
      </div>
    </div>
    <div class="d-f">
      <div class="lands1">
        <div class="lands2 hover">主页/登录</div>
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
      <div class="sidebar">
       <div class="lands2 hover">关于</div>
       <div class="m-l-10">CNode：Node.js专业中文社区</div>
       <div class="m-l-10 m-t-10">在这里你可以：</div>
       <div class="d-f m-t-10">
       <div class="sidebar1 m-l-10 m-t-10"></div>
       <div class="m-l-10">向别人提出你遇到的问题</div>
       </div>
       <div class="d-f m-t-10">
       <div class="sidebar1 m-t-10 m-l-10"></div>
       <div class="m-l-10">帮助遇到问题的人</div>
       </div>
       <div class="d-f m-t-10">
       <div class="sidebar1 m-t-10 m-l-10"></div>
       <div class="m-l-10">分享自己的知识</div>
       </div>
       <div class="d-f m-t-10">
       <div class="sidebar1 m-t-10 m-l-10"></div>
       <div class="m-l-10">和其它人一起进步</div>
       </div>
      
      </div>
    </div>
    <div class="tails">
    
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        uesrname: "",
        password: "",
        rePwd: ""
      },
      rules: {
        uesrname: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在2-10位之间",
            trigger: "blur"
          }
        ],
        rePwd: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    login(formName) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message.sucess("登录成功");
        } else {
          this.$message.error("填写错误");
          return false;
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.lands {
  width: 100%;
  background: rgb(225, 225, 225);
}
.lands1 {
  width: 800px;
  height: 300px;
  background: white;
  margin-top: 30px;
  margin-left: 80px;
}
.land {
  width: 400px;
  height: 25px;
}
.land1 {
  width: 100%;
  height: 50px;
  background: rgb(68, 68, 68);
}
.items {
  padding: 0 15px;
  color: rgb(214, 209, 195);
}
.land-item1 {
  width: 233px;
  height: 26px;
  border-radius: 20px;
  background: #888888;
  margin-left: 20px;
  border: none;
  outline: none;
  text-indent: 30px;
}
.icon-sousuo {
  margin-left: -220px;
  margin-top: 5px;
}
.land-title {
  margin-left: 77px;
}
.land-title1 {
  margin-right: 86px;
}
.land-item1:hover {
  background: #ffffff;
}
.items:hover {
  cursor: pointer;
  color: #ffffff;
}
.lands2 {
  width: 100%;
  height: 30px;
  background: rgb(246, 246, 246);
}
.sidebar{
  width: 290px;
  height: 260px;
  background: white;
  margin-left: 242px;
  margin-top: 30px;
}
.sidebar1{
  width: 4px;
  height: 5px;
  background: rgb(68, 68, 68);
}
.tails{
  width: 100%;
  height: 200px;
  background: white;
  margin-top: 30px;
}
</style>