<template>
  <div class="main">
    <Header></Header>
    <el-container>
      <el-main>
        <el-row>
          <el-col span="18" offset="3">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from '../components/Header';

export default {
  components: {
    Header,
  },
  methods: {
    handleCreate() {
      this.$router.push({
        name: 'question',
      });
    },
  },
};
</script>
