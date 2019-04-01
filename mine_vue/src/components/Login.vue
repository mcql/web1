<template>
  <div class="login">
    <div class="login_form">
      <div class="login_form_tit">
        <img src="../assets/images/logo.png" alt>
        <div>
          <p>汉洱康医学检验所</p>
          <p>HEALCARE</p>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import vLogin from '@/components/login/Login'
export default {
  components: {
    vLogin
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;
  box-sizing: border-box;
}
.login_form {
  width: 868px;
  height: 578px;
  border: 1px solid #ebebeb;
  background-color: #fff;
}
.login_form_tit {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
}
.login_form_tit img {
  height: 38px;
}
.login_form_tit p {
  text-align: left;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-indent: 15px;
}
</style>
