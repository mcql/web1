<template>
  <div>
    <p class="tit">注册您的账号</p>
    <div class="login_input">
      <input type="text" placeholder="手机号">
      <div class="code">
        <input type="text" placeholder="验证码">
        <div class="get_code">获取验证码</div>
      </div>
      <div class="login_btn">注册</div>
      <p class="login_to_other">
        <span>
          <router-link to="/login">用户登录</router-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
input {
  width: 320px;
  height: 40px;
  color: #582912;
  font-size: 14px;
  border: 0;
  background-color: #f4f4f4;
  float: left;
  overflow: hidden;
  outline: none;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
}
.code {
  margin-top: 20px;
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.code input {
  width: 170px;
  margin-top: 0;
}
.get_code {
  width: 140px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #b2b2b2;
  border-radius: 4px;
  cursor: pointer;
}
.login_input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tit {
  line-height: 35px;
  color: rgb(2, 99, 145);
  font-size: 16px;
  padding-top: 85px;
  overflow: hidden;
}
.login_btn {
  cursor: pointer;
  width: 320px;
  height: 40px;
  background-color: #0297d9;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 40px;
}
.login_to_other {
  line-height: 70px;
  font-size: 14px;
}
.login_to_other span {
  display: inline-block;
}
</style>
