<template>
  <div class="home">
    <el-form class="LoginForm">
      <el-form-item label="账号">
        <el-input type="count" v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>注册</el-button>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {}
};
</script>

<style scoped>
.LoginForm {
  width: 350px;
  border: 1px solid #DCDFE6;
  padding: 18px 18px 18px 18px;
  float: center;
  margin: 180px auto;
  box-shadow: 0 0 25px #909399;
}
</style>

