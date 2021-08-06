<template>
  <navbar></navbar>
  <!-- <coffeeLoading></coffeeLoading> -->
  <div class="container px-5 pt-5 mt-6">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <ul id="progressbar" class="mt-3">
      <li class="active">購物車</li>
      <li>填寫資料</li>
      <li>訂單確認</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './Navbar.vue'
import coffeeLoading from '../components/cofeeLoding.vue'

export default {
  components: {
    navbar,
    coffeeLoading,
  },
}
</script>
