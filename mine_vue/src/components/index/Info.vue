<template>
  <div class="info">
    <div>
      <span>昵称</span>
      <input type="text">
    </div>
    <div>
      <span>性别</span>
      <select name id>
        <option value="0">男</option>
        <option value="1">女</option>
      </select>
    </div>
    <div>
      <span>文化程度</span>
      <select name id>
        <option value="0">高中以下</option>
        <option value="1">本科</option>
        <option value="2">硕士</option>
        <option value="3">博士</option>
      </select>
    </div>
    <div>
      <span>家庭年收入</span>
      <select name id>
        <option value="0">十万元及以下</option>
        <option value="1">十万元及以上</option>
      </select>
    </div>
    <div>
      <span>子女情况</span>
      <select name id>
        <option value="0">1个</option>
        <option value="1">多个</option>
      </select>
    </div>
    <div class="btn">保存</div>
  </div>
</template>

<script>
export default {}
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
  width: 320px;
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
.info > div > select{
   width: 320px;
  height: 40px;
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
  display: block;
  margin: 30px auto;
  border-radius: 4px;
  color: #fff;
  background-color: #0297d9;
}
</style>
