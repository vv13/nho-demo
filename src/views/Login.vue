<template>
  <div class="login">
    <div class="login__form">
      <el-form label-position="left" label-width="80px" :model="form">
        <div class="login__header">
          <img class="login__logo" src="../assets/tw-logo-black.png" alt="" />
          <div class="login__logotxt">学院</div>
        </div>
        <el-form-item label="账号">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin" class="login__btn"
          >登陆</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: 'main' });
    },
  },
};
</script>

<style lang="less">
.login {
  height: 100%;
  background: url('../assets/bg.png') no-repeat;
  background-size: cover;
  .login__form {
    height: 300px;
    width: 400px;
    position: absolute;
    background: white;
    right: 200px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 30px;
  }
  .login__header {
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(153, 153, 153, 0.25);
    margin-bottom: 20px;
  }
  .login__logo {
    height: 30px;
  }
  .login__logotxt {
    font-size: 30px;
    color: #000;
    font-weight: bold;
    padding-left: 15px;
  }
  .login__btn {
    float: right;
  }
}
</style>
