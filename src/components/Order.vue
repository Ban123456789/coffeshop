<template>
  <navbar></navbar>
  <div class="container px-5 pt-5 mt-6">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <ul id="progressbar" class="mt-5">
      <li class="active">Account Setup</li>
      <li>Social Profiles</li>
      <li>Personal Details</li>
    </ul>
  </div>
</template>

<script>
import navbar from './Navbar.vue'

export default {
  components: {
    navbar,
  },
}
</script>
