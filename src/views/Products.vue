<template>
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
          <li>
            <a href=""><img src="/icons/stand.png" class="icon-size" alt="" />全部商品</a>
          </li>
          <li>
            <a href=""><img src="/icons/latte.png" class="icon-size" alt="" />熱門咖啡</a>
          </li>
          <li>
            <a href=""><img src="/icons/coffee-cup.png" class="icon-size" alt="" />大人系列</a>
          </li>
          <li>
            <a href=""><img src="/icons/coffee-beans.png" class="icon-size" alt="" />精選豆單</a>
          </li>
          <li>
            <a href=""><img src="/icons/gift.png" class="icon-size" alt="" />精美禮盒</a>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div class="mb-4 row">
          <p class="col-8 category-title text-space title text-border text-light d-inline-block">所有商品</p>
          <section class="col-4 d-flex align-items-center justify-content-between">
            <select class="form-select form-select-sm mr-3" aria-label=".form-select-sm example">
              <option selected disabled>預設排序</option>
              <option value="1">最新上架</option>
              <option value="2">價格由高到低</option>
              <option value="3">價格由低到高</option>
            </select>
            <p class="title text-border text-light">共 31 件商品</p>
          </section>
        </div>
        <div class="d-flex flex-wrap justify-content-between">
          <a href="" class="card mb-4" style="width: 18rem;" v-for="i in 10" :key="i">
            <img src="/icons/sale.png" class="sale" alt="" />
            <img style="background-image: url('/images/cappuccino.jpg')" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title text-center text-space title text-border text-light">卡布奇諾</h5>
              <div class="text-center">
                <p class="title text-border text-light d-inline">NT $200</p>
                <del class="text-border text-light">NT $230</del>
              </div>
            </div>
            <a href="#" class="btn btn-danger text-border"
              ><img src="/icons/w-cart.png" class="cart" alt="" />加入購物車</a
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'

export default {
  components: {
    navbar,
  },
}
</script>
