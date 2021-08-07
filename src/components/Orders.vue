<template>
  <loading v-if="isLoading"></loading>`
  <div>
    <button class="btn btn-danger mb-3" @click="delOrders">刪除全部訂單</button>
    <table class="table table-striped bg-light">
      <thead>
        <tr>
          <th scope="col" class="text-border">下單日期</th>
          <th scope="col" class="text-border">是否付款</th>
          <th scope="col" class="text-border">顧客名稱</th>
          <th scope="col" class="text-border">顧客電話</th>
          <th scope="col" class="text-border">顧客郵件</th>
          <th scope="col" class="text-border">顧客地址</th>
          <th scope="col" class="text-border">購買資訊</th>
          <th scope="col" class="text-border">訂單編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in orders" :key="data.id">
          <th>{{ $filter.date(data.create_at) }}</th>
          <td>
            <p v-if="data.is_paid" class="text-success">已付款</p>
            <p v-else class="text-danger">未付款</p>
          </td>
          <td>{{ data.user.name }}</td>
          <td>{{ data.user.tel }}</td>
          <td>{{ data.user.email }}</td>
          <td>{{ data.user.address }}</td>
          <td>
            <button class="btn btn-success" @click="openProducts(data.products, data.total)" type="button">
              查看
            </button>
            <orderProducts ref="orederProducts" :products="products" :total="total"></orderProducts>
          </td>
          <td>
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                訂單選項
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import orderProducts from '../components/OrderProducts.vue'
import loading from '../components/Loading.vue'

export default {
  components: {
    orderProducts,
    loading,
  },
  data() {
    return {
      orders: [],
      products: {},
      total: '',
      isLoading: false,
    }
  },
  inject: ['callbackMsg'],
  created() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      const getOrdersApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders`
      this.isLoading = true
      this.$http.get(getOrdersApi).then((res) => {
        this.orders = res.data.orders
        this.isLoading = false
        console.log(this.orders)
      })
    },
    delOrders() {
      const delOrdersApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http.delete(delOrdersApi).then((res) => {
        this.callbackMsg(res)
        this.getOrders()
      })
    },
    openProducts(data, total) {
      this.products = data
      this.total = total
      this.$refs.orederProducts.showModal()
    },
  },
}
</script>
