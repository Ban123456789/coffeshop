export function updateCarts(carts, cartsMsg) {
    const getCartsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(getCartsApi).then((res) => {
        carts = res.data.data.carts
        cartsMsg = {
          total: res.data.data.total,
          final_total: res.data.data.final_total,
        }
      })
} 