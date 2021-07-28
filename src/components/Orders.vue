<template>
  <div>
    訂單
  </div>
</template>

<script>
export default {
  created() {
    const getOrdersApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders`
    this.$http.get(getOrdersApi).then((res) => {
      console.log(res)
    })
  },
}
</script>
