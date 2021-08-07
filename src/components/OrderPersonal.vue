<template>
  <navbar></navbar>
  <div class="row">
    <div class="col-7">
      <div class="personal-title title text-border table-radius">
        顧客資料
      </div>
      <form class="bg-light table-radius p-3">
        <div class="mb-3">
          <label for="name" class="form-label">顧客名稱*</label>
          <input type="text" class="form-control" id="name" v-model="personal.name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">電子信箱*</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="personal.email" />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">手機號碼*</label>
          <input type="tel" class="form-control" id="phone" minlength="10" maxlength="10" v-model="personal.phone" />
        </div>
        <div class="mb-3">
          <label for="remark" class="form-label" style="display: block">訂單備註*</label>
          <textarea
            id="remark"
            rows="2"
            placeholder="有甚麼想告訴店家的嗎?"
            style="width:100%"
            v-model="personal.remark"
          ></textarea>
        </div>
      </form>
      <div class="personal-title title text-border table-radius mt-4">
        送貨資料
      </div>
      <form class="bg-light table-radius p-3">
        <div class="mb-3">
          <label for="check" class="form-label">若收件人姓名與手機號碼與上方資料相同，請打勾</label>
          <input type="checkbox" id="check" class="mx-2" v-model="check" />
        </div>
        <div class="mb-3">
          <label for="person" class="form-label">收件人姓名*</label>
          <input type="text" class="form-control" id="person" v-model="shipment.person" />
        </div>
        <div class="mb-3">
          <label for="cellphone" class="form-label">收件人手機號碼*</label>
          <input
            type="tel"
            class="form-control"
            id="cellphone"
            minlength="10"
            maxlength="10"
            v-model="shipment.cellphone"
          />
        </div>
        <div class="mb-3 row">
          <label for="">收件人地址*</label>
          <div class="col-6">
            <select
              name="city"
              id="city"
              style="width:100%; padding:5px 10px; border-radius:5px"
              @click="getCity"
              v-model="address.city"
            >
              <option value="" disabled>請選擇縣市</option>
              <option :value="i" v-for="(city, i) in city" :key="i">{{ i }}</option>
            </select>
          </div>
          <div class="col-6">
            <select
              name="country"
              id="country"
              style="width:100%; padding:5px 10px; border-radius:5px"
              v-model="address.country"
            >
              <option value="" disabled>請選擇鄉鎮</option>
              <option :value="country" v-for="country in country" :key="country">{{ country }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" v-model="shipment.address" />
        </div>
      </form>
    </div>
    <div class="col-5">
      <!-- 購物車內容 -->
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
              購物車 ({{ carts.length }})件
            </button>
          </h2>
          <div id="orders" class="accordion-collapse collapse show" ref="orders">
            <div class="accordion-body">
              <ul style="padding: 0">
                <li class="my-2" v-for="data in carts" :key="data.id">
                  <img :style="{ backgroundImage: ' url(' + data.product.imageUrl + ')' }" class="order-img" alt="" />
                  <div class="d-inline-block mx-3">
                    <p class="title text-border text-brown">{{ data.product.title }}</p>
                    <p>數量: {{ data.qty }}</p>
                  </div>
                  <p class="d-inline-block">小計: NT ${{ data.total }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 訂單資訊 -->
      <table class="table bg-light mt-3">
        <thead>
          <tr style="background-color: rgb(236, 219, 202)">
            <th colspan="5" class="title text-border">訂單資訊</th>
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
            <th>輸入優惠碼:</th>
            <td><input type="text" /><button class="btn btn-success mx-3">套用</button></td>
          </tr>
          <tr>
            <th>合計:</th>
            <td>NT ${{ cartsMsg.final_total }}</td>
          </tr>
          <tr>
            <th>
              <a href="#/order/cart" class="btn btn-outline-info" style="width:100%">返回購物車</a>
            </th>
            <td>
              <a href="#/order/check" @click="submitOrder" class="btn btn-info" style="width:100%">提交訂單</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import mitt from '../methods/mitter'
import cityData from '../json/data.json'

export default {
  components: {
    navbar,
  },
  data() {
    return {
      carts: [],
      cartsMsg: {},
      personal: {},
      shipment: {},
      city: {},
      country: [],
      address: {
        city: '',
        country: '',
      },
      check: false,
      orderDetail: {},
    }
  },
  watch: {
    check() {
      if (this.check) {
        this.shipment.person = this.personal.name
        this.shipment.cellphone = this.personal.phone
      }
    },
  },
  methods: {
    showOrder() {
      const collapseEl = this.$refs.orders
      const collapse = new Collapse(collapseEl, {
        toggle: true,
      })
    },
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
    getCity() {
      const id = document.getElementById('city')
      for (const [key, value] of Object.entries(this.city)) {
        if (id.value === key) {
          this.country = value
        }
      }
    },
    submitOrder() {
      const getOrderApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const user = {
        name: this.shipment.person,
        email: this.personal.email,
        tel: this.shipment.cellphone,
        address: `${this.address.city}${this.address.country}${this.shipment.address}`,
      }
      this.$http.post(getOrderApi, { data: { user, message: this.personal.remark } }).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          this.orderDetail = {
            createTime: res.data.create_at,
            id: res.data.orderId,
          }
          console.log(this.orderDetail)
          mitt.emit('orderDetail', this.orderDetail)
          // setTimeout(() => this.$router.push({ path: '/order/check' }), 2000)
        }
      })
    },
  },
  created() {
    this.updateCarts()
    this.city = cityData
  },
}
</script>
