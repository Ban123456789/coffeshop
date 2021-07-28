<template>
  <div class="row" style="margin: 0">
    <div class="col-2">
      <div class="db-sidebar">
        <h1 class="text-center pt-3 pb-5"><i class="fas fa-chart-line"></i>Controller</h1>
        <a href="#/dashboard/editproducts" class="list-group-item sidebar-choose"
          ><i class="fas fa-clipboard-list"></i>訂單</a
        >
        <a href="#/dashboard/coupon" class="list-group-item"><i class="fas fa-receipt"></i>優惠券</a>
        <a href="#" class="list-group-item"><i class="fas fa-box-open"></i> 產品</a>
        <a href="#" class="list-group-item"><i class="fas fa-file-image"></i>貼文</a>
        <a href="#/about" class="list-group-item"><i class="fas fa-sign-out-alt"></i>登出</a>
      </div>
    </div>
    <div class="col-10 db-content mt-3">
      <div>
        <h3 class="mb-5">Dashboard</h3>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mitter from '@/methods/mitter.js'

export default {
  data() {
    return {
      choose: false,
    }
  },
  provide: {
    mitter,
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
}
</script>
