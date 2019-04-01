<template>
  <div>
    <p class="tit">登录您的账号</p>
    <div class="login_input">
      <input type="text" placeholder="手机号">
      <input type="password" placeholder="密码">
      <div @click="login" class="login_btn">登录</div>
      <p class="login_to_other">
        <span><router-link to='/login_register'>注册用户</router-link></span>
        <span><router-link to='/login_forget'>忘记密码</router-link></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      sessionStorage.setItem('userinfo', '123123123')
      this.$router.push('/')
    }
  }
}
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
.login_input{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tit{
    line-height: 35px;
    color: rgb(2, 99, 145);
    font-size: 16px;
    padding-top: 85px;
    overflow: hidden;
}
.login_btn{
  width: 320px;
  height: 40px;
  background-color: #0297D9;
  color: #fff;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 40px;
}
.login_to_other{
  line-height: 70px;
  font-size: 14px;
}
.login_to_other span{
  display: inline-block;
}
.login_to_other span:first-child{
  margin-right: 40px;
}
</style>
