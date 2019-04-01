<template>
  <div class="info">
    <div>
      <span>旧密码</span>
      <input type="password" placeholder="请输入原始密码">
    </div>
    <div>
      <span>新密码</span>
      <input type="password" placeholder="长度8~16位，数字、字母、字符至少包含两种">
    </div>
    <div>
      <span>再次输入</span>
      <input type="password" placeholder="请重新输入新密码">
    </div>
    <div class="btn">保存</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info {
  width: 1048px;
  margin: 0 auto;
}
.info > div {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
.info > div > span {
  display: inline-block;
  width: 160px;
  padding-right: 40px;
  text-align: right;
  line-height: 40px;
  color: #747474;
  font-size: 14px;
}
.info > div > input{
  width: 340px;
  height: 40px;
  color: #582912;
  font-size: 14px;
  border: 0;
  background-color: #f4f4f4;
  overflow: hidden;
  outline: none;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 4px;
}
.info  div.btn {
  width: 1050px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  margin: 30px auto;
  border-radius: 4px;
  display: block;
  color: #fff;
  background-color: #0297d9;
}
</style>
