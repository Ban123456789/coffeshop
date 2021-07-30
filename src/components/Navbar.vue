<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-brown position-fixed top-0 start-0 container-fluid">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand" href="#">
        <img src="../../public/images/logo.png" alt="風味留醇咖啡" style="width: 100px; height: 60px" />
        <h1
          style="text-indent:101%;
                overflow:hidden;
                white-space: nowrap;
                position: absolute;
                width: 1px;
                height: 1px;"
        >
          風味留醇咖啡
        </h1>
      </a>
      <div>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item px-2 nav-action">
            <router-link to="/" class="nav-link text-brown text-border">關於 Always</router-link>
          </li>
          <li class="nav-item px-2 nav-action">
            <router-link to="/" class="nav-link text-brown text-border">最新消息</router-link>
          </li>
          <li class="nav-item px-2 nav-action">
            <router-link to="/products" class="nav-link text-brown text-border">商品介紹</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/login" class="nav-link text-brown text-border"
              ><img src="/icons/gear-option.png" class="nav-icon-size" alt="" ref="tooltipLogin"
            /></router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/login" class="nav-link text-brown text-border"
              ><img src="/icons/magnifier.png" class="nav-icon-size" alt="" ref="tooltipSerch"
            /></router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/login" class="nav-link text-brown text-border"
              ><img src="/icons/b-cart.png" class="nav-icon-size" alt="" ref="tooltipCart"
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import toolTip from '../methods/toolTip.js'

export default {
  mounted() {
    const tipLogin = this.$refs.tooltipLogin
    const tipSearch = this.$refs.tooltipSerch
    const tipCart = this.$refs.tooltipCart
    toolTip(tipLogin, '管理後臺')
    toolTip(tipSearch, '搜尋商品')
    toolTip(tipCart, '購物車')
  },
}
</script>
