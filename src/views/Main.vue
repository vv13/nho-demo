<template>
  <div>
    <div class="teacher-initial">
      <h2>欢迎！x老师</h2>
      <p>开始创建第一个题目吧 ~</p>
      <el-button icon="el-icon-plus" type="primary" @click="handleCreate"
        >创建</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleCreate() {
      this.$router.push({
        name: 'question',
      });
    },
  },
};
</script>

<style lang="less">
.teacher-initial {
  padding-top: 300px;
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
