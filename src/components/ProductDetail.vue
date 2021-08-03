<template>
  <navbar></navbar>
  <div class="container mt-6 pt-3 px-5">
    <a href="">返回前頁</a>
    <div class="row">
      <div class="col-6">
        <img style="background-image: url(/images/cappuccino.jpg)" class="detail-img" alt="" />
      </div>
      <div class="col-6">
        <h2 class="text-light mb-3 text-border">商品名稱</h2>
        <section class="text-light mb-3">
          全店，單筆滿千免運(限台灣本島) <br />
          滿額NT$1000即贈送精美小禮物
        </section>
        <p class="text-light mb-1 title">售價</p>
        <p class="text-light d-inline-block title" style="margin-right: 10px">NT $100</p>
        <del class="text-light">NT $300</del>
        <p class="text-light title mt-3 mb-1">數量</p>
        <button class="count text-border">-</button><input type="number" class="mb-5 count-content" disabled /><button
          class="count text-border"
        >
          +
        </button>
        <section>
          <a href="" class="btn btn-danger" style="margin-right: 10px; width: 48%">加入購物車</a>
          <a href="" class="btn btn-danger" style="width: 48%">立即購買</a>
        </section>
      </div>
      <section class="mt-5 mb-3">
        <a
          href=""
          @click.prevent="showContent('desContent')"
          class="btn btn-outline-info"
          style="width:48%; margin-right: 10px"
          >商品描述</a
        >
        <a href="" @click.prevent="showContent('payContent')" class="btn btn-outline-info" style="width:48%"
          >運送及付款方式</a
        >
      </section>
      <div :class="{ 'description-content': is_show }">{{ content }}</div>
      <div>相關商品</div>
    </div>
  </div>
</template>

<script>
import navbar from './Navbar.vue'

export default {
  components: {
    navbar,
  },
  data() {
    return {
      content: '',
      is_show: false,
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  },
  methods: {
    showContent(content) {
      this.is_show = false
      if (content === 'desContent') {
        this.content = '描述區塊'
        this.is_show = true
      } else {
        this.content = '運送付款方式'
        this.is_show = true
      }
    },
  },
}
</script>
