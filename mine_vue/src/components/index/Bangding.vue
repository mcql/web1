<template>
  <div>
    <p>请输入储存协议中的有效证件号码</p>
    <input type="text">
    <div class="btn">下一步</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
p {
  height: 60px;
  line-height: 60px;
  color: #0297d9;
  font-size: 21px;
  overflow: hidden;
}
input {
  width: 298px;
  height: 38px;
  padding: 0 10px;
  border: 1px solid #ebebeb;
  background: #f4f4f4;
  overflow: hidden;
  border-radius: 4px;
}
.btn{
  width: 320px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #0297d9;
  color: #fff;
  margin-top: 20px;
  text-align: center;
}
</style>
