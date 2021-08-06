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
            <a class="btn btn-danger" @click.prevent="delCart(false, data.id)">刪除</a>
          </div>
        </li>
        <a href="#/order/cart" class="btn btn-outline-info mt-5 mx-3 d-block w100" :class="{ 'mouse-not': isLoading }"
          >前往結帳</a
        >
        <a href="" class="btn btn-outline-danger mt-3 mx-3 d-block w100" @click.prevent="delCart(true)"
          ><div
            class="spinner-border spinner-border-sm text-light"
            :class="{ 'mouse-not': isLoading }"
            v-if="isLoading"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          刪除全部購物車</a
        >
      </ul>
    </div>
  </label>
</template>

<script>
import swal from 'sweetalert'

export default {
  props: ['carts', 'updateCarts'],
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    delCart(carts, id) {
      let delCartApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      if (carts) {
        delCartApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      }
      this.isLoading = true
      this.$http.delete(delCartApi).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          swal({
            title: '成功刪除購物車',
            icon: 'warning',
            timer: 2000,
            button: false,
            className: 'red-bg',
          })
        }
        this.updateCarts()
        this.isLoading = false
      })
    },
  },
  created() {
    this.updateCarts()
  },
}
</script>
