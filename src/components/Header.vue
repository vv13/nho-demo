<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo" @click="handleClickLogo">
        <img src="@/assets/tw-logo-white.png" alt="" />
        <p>| 思沃校园</p>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            class="header__avatar"
            src="../assets/default_avatar.jpeg"
            alt=""
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import { TOKEN_USERNAME } from '../config';
import request from '../utils/request';

export default {
  methods: {
    async handleLogout() {
      await request.post('/api/logout', this.form);
      localStorage.removeItem(TOKEN_USERNAME);
      this.$router.replace({ name: 'login' });
    },
    handleClickLogo() {
      this.$router.push({ name: 'main' });
    },
  },
};
</script>

<style lang="less">
.header {
  background: #0d1a26;
  width: 100%;
  z-index: 1;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  height: 60px;
  top: 0;
  .header__content {
    height: 100%;
    max-width: 1200px;
    height: 100%;
    position: relative;
    margin: auto;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    & > img {
      height: 100%;
    }
    & > p {
      color: #fff;
      font-weight: bold;
    }
  }
  .header__avatar {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
  }
}
</style>
