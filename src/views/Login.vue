<template>
  <div class="home">
    <el-form label-position="left" label-width="80px" :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
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
};
</script>
