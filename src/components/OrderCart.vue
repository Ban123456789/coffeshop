<template>
  <div class="row mt-4">
    <div class="col-7">
      <table class="table bg-light">
        <thead>
          <tr style="background-color: rgb(236, 219, 202)">
            <th colspan="5" class="title text-border">購物車 ({{ carts.length }}) 件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-border">商品資訊</th>
            <td class="text-border">單件價格</td>
            <td class="text-border">數量</td>
            <td class="text-border">小計</td>
            <td class="text-border">刪除</td>
          </tr>
          <tr v-for="data in carts" :key="data.id">
            <th style="text-align: center">
              <img :style="{ backgroundImage: 'url(' + data.product.imageUrl + ')' }" class="order-img" alt="" />
              <p class="text-border">{{ data.product.title }}</p>
            </th>
            <td>NT ${{ data.product.price }}</td>
            <td>
              <button class="count text-border" @click="countBtn('reduce', data.qty, data.id)">-</button>
              <input type="number" class="mb-5 count-content text-dark" :value="data.qty" disabled />
              <button class="count text-border" @click="countBtn('add', data.qty, data.id)">+</button>
            </td>
            <td>NT ${{ data.total }}</td>
            <td><a href="" @click.prevent="delCart(data.id)" class="btn btn-outline-danger">刪除</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-5">
      <table class="table bg-light">
        <thead>
          <tr style="background-color: rgb(236, 219, 202)">
            <th colspan="2" class="title text-border">訂單資訊</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>小計:</th>
            <td>NT ${{ cartsMsg.total }}</td>
          </tr>
          <tr>
            <th>運費:</th>
            <td>NT $60</td>
          </tr>
          <tr>
            <th>合計:</th>
            <td>NT ${{ cartsMsg.final_total + 60 }}</td>
          </tr>
          <tr>
            <th>
              <a href="#/products" class="btn btn-outline-info" style="width:100%">繼續購物</a>
            </th>
            <td><a href="#/order/personal" class="btn btn-info" style="width:100%">前往結帳</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      cartsMsg: {},
      count: 1,
      isLoading: false,
    }
  },
  methods: {
    updateCarts() {
      const getCartsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(getCartsApi).then((res) => {
        this.carts = res.data.data.carts
        this.cartsMsg = {
          total: res.data.data.total,
          final_total: res.data.data.final_total,
        }
      })
    },
    delCart(id) {
      const delCartApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
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
      })
    },
    countBtn(method, count, id) {
      console.log(method, count, id)
      const updateQtyApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      if (method === 'add' && count < 10) {
        this.count = count + 1
      } else if (method === 'reduce' && count > 1) {
        this.count = count - 1
      }
      this.$http.put(updateQtyApi, { data: { product_id: id, qty: this.count } }).then((res) => {
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
