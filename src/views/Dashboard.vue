<template>
  <div class="row" style="margin: 0">
    <div class="col-2">
      <div class="db-sidebar">
        <h1 class="text-center pt-3 pb-5"><i class="fas fa-chart-line"></i>Controller</h1>
        <a
          href="#/dashboard/editproducts"
          class="list-group-item"
          :class="{ 'sidebar-choose': activeOpt === '商品列表' }"
          @click="changeClass('商品列表')"
          ><i class="fas fa-clipboard-list"></i>商品列表</a
        >
        <a
          href="#/dashboard/coupon"
          class="list-group-item"
          :class="{ 'sidebar-choose': activeOpt === '優惠券' }"
          @click="changeClass('優惠券')"
          ><i class="fas fa-receipt"></i>優惠券</a
        >
        <a
          href="#/dashboard/orders"
          class="list-group-item"
          :class="{ 'sidebar-choose': activeOpt === '訂單' }"
          @click="changeClass('訂單')"
          ><i class="fas fa-box-open"></i> 訂單</a
        >
        <a href="#" class="list-group-item"
          ><i
            class="fas fa-file-image"
            :class="{ 'sidebar-choose': activeOpt === '貼文' }"
            @click="changeClass('貼文')"
          ></i
          >貼文</a
        >
        <a href="#/" class="list-group-item"
          ><i
            class="fas fa-sign-out-alt"
            :class="{ 'sidebar-choose': activeOpt === '登出' }"
            @click="changeClass('登出')"
          ></i
          >登出</a
        >
      </div>
    </div>
    <div class="col-10 db-content mt-3">
      <div>
        <h3 class="mb-5">Dashboard</h3>
      </div>
      <toastMessages></toastMessages>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mitter from '@/methods/mitter.js'
import toastMessages from '../components/TostMessages.vue'
import callbackMsg from '../methods/getMessages'

export default {
  components: {
    toastMessages,
  },
  data() {
    return {
      choose: false,
      activeOpt: '商品列表',
    }
  },
  provide() {
    return {
      mitter,
      callbackMsg,
    }
  },
  created() {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = cookieValue
    console.log(cookieValue)
    const checkUserApi = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(checkUserApi).then((res) => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  },
  methods: {
    changeClass(message) {
      this.activeOpt = message
    },
  },
}
</script>
