<template>
  <header class="header">
    <div>
      <img src="../../assets/images/logo.png" alt>
      <div>
        <h1>汉洱康医学检验所</h1>
        <h1>HEALCARE</h1>
      </div>
    </div>
    <ul>
      <li>
        <a href>首页</a>
      </li>
      <li>
        <a href>公司简介</a>
      </li>
      <li>
        <a href>新闻动态</a>
      </li>
      <li>
        <a href>产品中心</a>
      </li>
      <li>
        <a href>NAV2</a>
      </li>
      <li>
        <a href>NAV3</a>
      </li>
    </ul>
    <div class="info">
      您好：<span>18796545337</span><span @click="loginout">退出</span>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    loginout () {
      sessionStorage.removeItem('userinfo')
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 72px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  box-sizing: border-box;
}

.header>div>img {
  width: 50px;
  margin-right: 10px;
}

.header>div {
  display: flex;
  justify-items: flex-start;
  align-items: center;
}

.header h1 {
  font-size: 18px;
  line-height: 1.2;
}

.header>ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header>ul li {
  padding: 0 20px;
  font-size: 14px;
}

.header>ul li a.active {
  color: #0297D9;
}

.header li:hover a {
  color: #0297D9;
  transition: all 1s ease;
}

.login {
  color: rgb(2, 99, 145);
  font-size: 14px;
}
.info span{
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
</style>
