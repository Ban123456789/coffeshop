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
