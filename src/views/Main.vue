<template>
  <div>
    <div class="teacher-initial">
      <h2>欢迎！{{ username }}老师</h2>
      <p>开始创建第一个题目吧 ~</p>
      <el-button icon="el-icon-plus" type="primary" @click="handleCreate"
        >创建</el-button
      >
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { TOKEN_USERNAME } from '../config';

export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    ...mapActions(['changeLoading']),
    handleCreate() {
      this.$router.push({
        name: 'question',
      });
    },
  },
  created() {
    this.username = localStorage.getItem(TOKEN_USERNAME);
  },
  mounted() {
    setTimeout(() => {
      this.changeLoading(false);
    }, 500);
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
