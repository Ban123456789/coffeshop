<template>
  <label for="cartBtn" class="cart-container">
    <div class="cart">
      <ul>
        <li class="title text-border text-light">購物車</li>
        <li class="d-flex">
          <a href="" style="background-image: url(/images/cappuccino.jpg)" class="cart-img"></a>
          <div class="px-3">
            <a href="" class="title text-border text-light" @click.prevent="">商品名稱</a>
            <p class="text-light">NT $200</p>
            <p class="text-light">數量: <span>2盒</span></p>
          </div>
          <div class="del-btn">
            <a class="btn btn-danger">刪除</a>
          </div>
        </li>
        <a href="" class="btn btn-outline-info mt-5 mx-3 d-block w100" @click.prevent="">前往結帳</a>
      </ul>
    </div>
  </label>
</template>

<script>
export default {}
</script>
