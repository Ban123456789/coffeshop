<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    新增商品
  </button>
  <productModel></productModel>

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
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import productModel from '../components/ProductsModel.vue'

export default {
  data() {
    return {
      products: [],
      page: {},
    }
  },
  components: {
    productModel,
  },
  methods: {
    getProducts() {
      const getProductsApi = `${process.env.VUE_APP_PATH}/api/vue-project/admin/products`
      this.$http.get(getProductsApi).then((res) => {
        console.log(res)
      })
    },
  },
  created() {
    this.getProducts()
  },
}
</script>
