<template>
  <div class="main">
    <Header></Header>
    <router-view></router-view>
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
