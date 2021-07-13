<template>
  <div class="mb-5">
    <img src="../assets/dbcover.jpg" style="height: 100px; width: 100%" alt="" />
  </div>
  <div class="row" style="margin: 0">
    <div class="col-2">
      <div class="list-group">
        <a
          href="#/dashboard/editproducts"
          class="list-group-item list-group-item-action list-group-item-warning text-center"
          >訂單</a
        >
        <a href="#" class="list-group-item list-group-item-action list-group-item-info text-center">優惠券</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-danger text-center">產品</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-success text-center">貼文</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-dark text-center">登出</a>
      </div>
    </div>
    <div class="col-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = cookieValue
    console.log(cookieValue)
    const checkUserApi = `${process.env.VUE_APP_PATH}/api/user/check`
    this.$http.post(checkUserApi).then((res) => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  },
}
</script>
