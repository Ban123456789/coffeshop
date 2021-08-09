<template>
  <coffeeLoading v-if="isLoading"></coffeeLoading>
  <navbar></navbar>
  <div class="container mt-6 pt-3 px-5">
    <div class="coffe-bean"></div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-3">
        <ul class="category">
          <li class="title">商品介紹</li>
          <li :class="{ active: activeOpt === '全部商品' }">
            <a href="" @click.prevent="getProducts('全部商品')"
              ><img src="/icons/stand.png" class="icon-size" alt="" />全部商品</a
            >
          </li>
          <li :class="{ active: activeOpt === '熱門咖啡' }">
            <a href="" @click.prevent="getProducts('熱門咖啡')"
              ><img src="/icons/latte.png" class="icon-size" alt="" />熱門咖啡</a
            >
          </li>
          <li :class="{ active: activeOpt === '大人系列' }">
            <a href="" @click.prevent="getProducts('大人系列')"
              ><img src="/icons/coffee-cup.png" class="icon-size" alt="" />大人系列</a
            >
          </li>
          <li :class="{ active: activeOpt === '嚴選豆單' }">
            <a href="" @click.prevent="getProducts('嚴選豆單')"
              ><img src="/icons/coffee-beans.png" class="icon-size" alt="" />精選豆單</a
            >
          </li>
          <li :class="{ active: activeOpt === '精美禮盒' }">
            <a href="" @click.prevent="getProducts('精美禮盒')"
              ><img src="/icons/gift.png" class="icon-size" alt="" />精美禮盒</a
            >
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div class="mb-4 row">
          <p class="col-8 category-title text-space title text-border text-light d-inline-block">{{ category }}</p>
          <section class="col-4 d-flex align-items-center justify-content-between">
            <select
              class="form-select form-select-sm mr-3"
              aria-label=".form-select-sm example"
              v-model="sort"
              @click="filterData"
            >
              <option value="" disabled>預設排序</option>
              <option value="1">最新上架</option>
              <option value="2">價格由高到低</option>
              <option value="3">價格由低到高</option>
            </select>
            <p class="title text-border text-light">共 {{ products.length }} 件商品</p>
          </section>
        </div>
        <div class="d-flex flex-wrap">
          <a :href="'#/detail/' + data.id" class="card mb-4" v-for="data in products" :key="data.id">
            <img src="/icons/sale.png" class="sale" alt="" v-if="data.price !== data.origin_price" />
            <img :style="{ backgroundImage: 'url(' + data.imageUrl + ')' }" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title text-center text-space title text-border text-light">{{ data.title }}</h5>
              <div class="text-center">
                <p class="title text-border text-light d-inline">NT ${{ $filter.currency(data.price) }}</p>
                <del class="text-border text-light" v-if="data.price !== data.origin_price"
                  >NT ${{ $filter.currency(data.origin_price) }}</del
                >
              </div>
            </div>
            <a href="#" class="btn btn-danger text-border" @click.prevent="addCart(data.id)"> 加入購物車</a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import coffeeLoading from '../components/cofeeLoding.vue'
import swal from 'sweetalert'

export default {
  components: {
    navbar,
    coffeeLoading,
  },
  data() {
    return {
      products: [],
      category: '全部商品',
      isLoading: false,
      sort: '',
      activeOpt: '全部商品',
    }
  },
  methods: {
    getProducts(category = '全部商品') {
      this.isLoading = true
      const getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(getProductsApi).then((res) => {
        this.products = []
        res.data.products.forEach((item) => {
          if (category === item.category) {
            this.sort = ''
            this.products.push(item)
            this.category = item.category
            this.activeOpt = category
            this.isLoading = false
          }
        })
        if (category === '全部商品') {
          this.sort = ''
          this.products = res.data.products
          this.category = '全部商品'
          this.activeOpt = '全部商品'
          this.isLoading = false
        }
      })
    },
    addCart(id) {
      const addCartApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      let data = {
        product_id: id,
        qty: 1,
      }
      this.isLoading = true
      this.$http.post(addCartApi, { data: data }).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          swal({
            title: '成功加入購物車',
            icon: 'success',
            timer: 2000,
            button: false,
          })
        }
        this.isLoading = false
      })
    },
    filterData() {
      if (this.sort === '2') {
        this.products.sort((a, b) => {
          return b.price - a.price
        })
      } else if (this.sort === '3') {
        this.products.sort((a, b) => {
          return a.price - b.price
        })
      } else {
        this.products.sort((a, b) => {
          return a.num - b.num
        })
      }
    },
  },
  created() {
    this.getProducts()
  },
}
</script>
