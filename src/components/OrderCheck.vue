<template>
  <navbar></navbar>
  <div>
    <ul id="progressbar" class="mt-3">
      <li>購物車</li>
      <li>填寫資料</li>
      <li class="active">訂單確認</li>
    </ul>
  </div>
  <div class="container">
    <!-- 購物車資訊 -->
    <div class="accordion" id="orderCheck">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button title text-border"
            type="button"
            data-bs-toggle="orders"
            data-bs-target="#orders"
            aria-expanded="true"
            aria-controls="collapseOne"
            @click="showOrder"
          >
            <!-- 購物車 ({{ carts.length }})件 -->
            購物車
          </button>
        </h2>
        <div id="orders" class="accordion-collapse collapse show" ref="orders">
          <div class="accordion-body">
            <table class="table bg-light">
              <tbody>
                <tr>
                  <th class="text-border">商品資訊</th>
                  <td class="text-border">單件價格</td>
                  <td class="text-border">數量</td>
                  <td class="text-border">小計</td>
                </tr>
                <tr v-for="data in carts" :key="data.id">
                  <th>
                    <img :style="{ backgroundImage: 'url(' + data.product.imageUrl + ')' }" class="order-img" alt="" />
                    <p class="text-border d-inline-block mx-3">{{ data.product.title }}</p>
                  </th>
                  <td>NT ${{ data.product.price }}</td>
                  <td>{{ data.qty }}{{ data.product.unit }}</td>
                  <td>NT ${{ data.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- 訂單資訊 -->
    <table class="table bg-light mt-3">
      <thead>
        <tr style="background-color: rgb(236, 219, 202)">
          <th colspan="2" class="title text-border">訂單資訊</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>成立時間:</th>
          <td>{{ $filter.date(order.create_at) }}</td>
        </tr>
        <tr>
          <th>收件人姓名:</th>
          <td>{{ order.user.name }}</td>
        </tr>
        <tr>
          <th>收件人收機號碼:</th>
          <td>{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址:</th>
          <td>{{ order.user.address }}</td>
        </tr>
        <tr>
          <th>付款狀態:</th>
          <td class="text-danger" v-if="!order.is_paid">尚未付款</td>
        </tr>
        <tr>
          <th>
            <a href="#/products" class="btn btn-outline-info" style="width:100%">繼續購物</a>
          </th>
          <td><a href="#" @click.prevent="" class="btn btn-info" style="width:100%">前往付款</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import mitt from '../methods/mitter'

export default {
  components: {
    navbar,
  },
  data() {
    return {
      carts: {},
      orderId: '',
      order: {},
    }
  },
  methods: {
    showOrder() {
      const collapseEl = this.$refs.orders
      const collapse = new Collapse(collapseEl, {
        toggle: true,
      })
    },
    getOrder() {
      const getOrderApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(getOrderApi).then((res) => {
        this.order = res.data.order
        this.carts = res.data.order.products
        console.log(res.data)
      })
    },
  },
  created() {
    mitt.on('orderDetail', (res) => {
      this.orderId = res.id
      this.getOrder()
    })
  },
}
</script>
