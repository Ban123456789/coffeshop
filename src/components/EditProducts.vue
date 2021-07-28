<template>
  <loading v-if="isLoading"></loading>
  <button type="button" class="btn btn-primary mb-3" @click="openModel('add')">
    新增商品
  </button>
  <productModel ref="addProduct" :innerproduct="temProduct" @inner-addproduct="updateProduct"></productModel>
  <delProductModel ref="delProduct" :innerDelProduct="temProduct" @inner-delproduct="delProduct"></delProductModel>

  <table class="table table-light table-striped">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th width="200">產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否上架</th>
        <th width="100">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in products" :key="data.id">
        <td>{{ data.category }}</td>
        <th>{{ data.title }}</th>
        <td>{{ data.origin_price }}</td>
        <td>{{ data.price }}</td>
        <td>
          <div class="text-success" v-if="data.is_enabled === 1">上架</div>
          <div class="text-danger" v-else>未上架</div>
        </td>
        <td>
          <button class="btn btn-outline-success" @click="openModel('edit', data)">編輯</button>
          <button class="btn btn-outline-danger" @click="openModel('del', data)">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination :pagination="pageNav" @current-page="getProducts"></pagination>
</template>

<script>
import productModel from '../components/ProductsModel.vue'
import delProductModel from '../components/delProductModel.vue'
import loading from '../components/Loading.vue'
import pagination from '../components/Pagination.vue'

export default {
  data() {
    return {
      products: [],
      page: {},
      temProduct: {},
      isNew: '',
      isLoading: false,
      pageNav: {},
    }
  },
  inject: ['mitter'],
  components: {
    productModel,
    delProductModel,
    loading,
    pagination,
  },
  methods: {
    getProducts(page = 1) {
      const getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(getProductsApi).then((res) => {
        this.products = res.data.products
        this.isLoading = false
        this.pageNav = res.data.pagination
        // console.log(res.data)
      })
    },
    openModel(isNew, item) {
      if (isNew === 'add') {
        // 新增商品
        this.temProduct = {}
        this.$refs.addProduct.showModel()
        this.isNew = isNew
      } else if (isNew === 'edit') {
        // 編輯商品
        this.temProduct = item
        this.$refs.addProduct.showModel()
        this.isNew = isNew
      } else if (isNew === 'del') {
        // 刪除商品
        this.temProduct = item
        this.$refs.delProduct.showModel()
        this.isNew = isNew
      }
    },
    updateProduct(item) {
      // 新增商品
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let apiMethod = 'post'
      // 編輯商品
      if (this.isNew === 'edit') {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        apiMethod = 'put'
      }

      this.temProduct = item
      this.temProduct.origin_price = parseInt(this.temProduct.origin_price)
      this.temProduct.price = parseInt(this.temProduct.price)
      this.$http[apiMethod](api, { data: this.temProduct }).then((res) => {
        this.$refs.addProduct.hideModel()
        this.getProducts()
        if (res.data.success) {
          this.mitter.emit('msg', {
            title: res.data.message,
            style: true,
          })
        } else {
          this.mitter.emit('msg', {
            title: '更新失敗',
            style: false,
            content: res.data.message.join('、'),
          })
        }
      })
    },
    delProduct(item) {
      const delProductApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(delProductApi).then((res) => {
        console.log(res)
        this.getProducts()
        this.$refs.delProduct.hideModel()
        if (res.data.success) {
          this.mitter.emit('msg', {
            title: res.data.message,
            style: true,
          })
        } else {
          this.mitter.emit('msg', {
            title: '刪除失敗',
            style: false,
            content: res.data.message,
          })
        }
      })
    },
  },
  created() {
    this.getProducts()
  },
}
</script>
