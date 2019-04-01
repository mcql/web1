<template>
  <div>
    <v-header></v-header>
    <div class='banner'>
      <img src='../assets/images/banner_bg.png' alt>
    </div>
    <div>
      <ul class='choose'>
        <li @click="change1">
          <router-link :class="index == 1?'active':''" to='/'>基础信息</router-link>
        </li>
        <li @click="change2">
          <router-link :class="index == 2?'active':''" to='/index_findpwd'>修改密码</router-link>
        </li>
        <li @click="change3">
          <router-link :class="index == 3?'active':''" to='/index_bangding'>绑定协议</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import vHeader from '@/components/index/Header'
export default {
  components: {
    vHeader
  },
  data () {
    return {
      index: 1
    }
  },
  methods: {
    change1 () {
      this.index = 1
    },
    change2 () {
      this.index = 2
    },
    change3 () {
      this.index = 3
    }
  }
}
</script>

<style scoped>
.choose {
  width: 1050px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: flex-start;
}
.choose li a {
  height: 20px;
  line-height: 20px;
  color: #b2b2b2;
  font-size: 16px;
  margin-right: 50px;
  float: left;
  overflow: hidden;
}
.banner {
  height: 135px;
  overflow: hidden;
}
.active {
  color: #0297d9!important;
}
</style>
