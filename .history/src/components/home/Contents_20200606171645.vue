<template>
  <div class="d-f">
    <div class="d-f content1">
      <div class="content2">
        <div class="d-f m-l-10 ">
          <div class="d-f">
            <div class="contents-item1 d-f j-c-c a-i-c">全部</div>
            <div class="contents-item">精华</div>
            <div class="contents-item">分享</div>
            <div class="contents-item">问答</div>
            <div class="contents-item">招聘</div>
            <div class="contents-item">客户端测试</div>
          </div>
        </div>
        <div class="content3">
          <div v-for="(item,index) in arr" :key="index">
            <div class="d-f content4 a-i-c">
              <img :src="item.author.avatar_url" alt width="25px" height="25px" />
              <div class="item3">{{item.reply_count}}/{{item.visit_count}}</div>
              <div v-if="index < 2">置顶</div>
              <div v-if="index > 2 && item.tab === 'share'">分享</div>
              <div v-if="item.tab === 'ask'">问答</div>
              <div class>{{item.title}}</div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    <div class="contents2">
    <div class="contents1">
      <div class="contents-item2 m-l-10">CNode：Node.js专业中文社区</div>
      <div class="f-s-14 m-l-10">您可以 登录 或 注册 , 也可以</div>
       <el-button type="primary" @click="logins('ruleForm')" class="contents-item3">通过GitHub登录</el-button>
    </div>
    <div class="contents3">
       
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`https://cnodejs.org/api/v1/topics`)
        .then(res => {
          this.arr = res.data.data;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.b {
  margin-top: 10px;
  margin-left: 10px;
}
.contents1 {
  width: 290px;
  height: 125px;
  background: white;
}
.contents2{
   left: 1135px;
  position: absolute;
  top: 80px;
}
.contents-item {
  color: #80bd01;
  padding: 0 10px;
}
.contents-item1 {
  width: 40px;
  height: 30px;
  background: #80bd01;
  color: white;
}
.content1 {
  margin-top: 30px;
  margin-left: 77px;
}
.content2{
    background: white;
}
.content4{
  width: 1000px;
  height: 50px;
  border: 0.5px solid rgb(245, 245, 245);
  border-left: none;
  border-right: none;
  
}
.contents-item2{
  padding: 10px 0;
}
.contents-item3{
  margin-top: 15px;
  margin-left: 10px;
}
.contents3{
  width: 290px;
  height: 350px;
  background: white;
  margin-top: 455px;
  
  
}
</style>