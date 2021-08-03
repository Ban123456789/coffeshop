<template>
  <label for="cartBtn" class="cart-container">
    <div class="cart">
      <ul>
        <li class="title text-border text-light">購物車</li>
        <li class="d-flex" v-for="data in carts" :key="data.product_id">
          <a href="" :style="{ backgroundImage: 'url(' + data.product.imageUrl + ')' }" class="cart-img"></a>
          <div class="px-3">
            <a href="" class="title text-border text-light" @click.prevent="">{{ data.product.title }}</a>
            <p class="text-light">NT ${{ data.final_total }}</p>
            <p class="text-light">
              數量: <span>{{ data.qty }}盒/NT ${{ data.product.price }}</span>
            </p>
          </div>
          <div class="del-btn">
            <a class="btn btn-danger" @click.prevent="delCart(data.product_id)">刪除</a>
          </div>
        </li>
        <a href="#/order" class="btn btn-outline-info mt-5 mx-3 d-block w100">前往結帳</a>
        <a href="" class="btn btn-outline-danger mt-3 mx-3 d-block w100" @click.prevent="delCarts">刪除全部購物車</a>
      </ul>
    </div>
  </label>
</template>

<script>
export default {
  props: ['carts', 'updateCarts'],
  methods: {
    delCart(id) {
      const delCartApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(delCartApi).then((res) => {
        console.log(res.data)
        this.updateCarts()
      })
    },
    delCarts() {
      const delCartsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(delCartsApi).then((res) => {
        console.log(res.data)
        this.updateCarts()
      })
    },
  },
  created() {
    this.updateCarts()
  },
}
</script>
