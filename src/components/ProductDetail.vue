<template>
  <navbar></navbar>
  <div class="container mt-6 pt-3 px-5">
    <a href="">返回前頁</a>
    <div class="row">
      <div class="col-6">
        <img :style="{ backgroundImage: 'url(' + data.imageUrl + ')' }" class="detail-img" alt="" />
      </div>
      <div class="col-6">
        <h2 class="text-light mb-3 text-border">{{ data.title }}</h2>
        <section class="text-light mb-3">
          全店，單筆滿千免運(限台灣本島) <br />
          滿額NT$1000即贈送精美小禮物
        </section>
        <p class="text-light mb-1 title">售價</p>
        <p class="text-light d-inline-block title" style="margin-right: 10px">NT ${{ data.price }}</p>
        <del class="text-light" v-if="data.price !== data.origin_price">NT ${{ data.origin_price }}</del>
        <p class="text-light title mt-3 mb-1">數量</p>
        <button class="count text-border" @click="countBtn('reduce')">-</button>
        <input type="number" class="mb-5 count-content" :value="count" disabled />
        <button class="count text-border" @click="countBtn('add')">+</button>
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
      data: {},
      count: 1,
    }
  },
  mounted() {
    const id = this.$route.params.id
    const getDetailApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
    this.$http.get(getDetailApi).then((res) => {
      console.log(res.data)
      this.data = res.data.product
    })
  },
  methods: {
    showContent(content) {
      this.is_show = false
      if (content === 'desContent') {
        this.content = this.data.content
        this.is_show = true
      } else {
        this.content = this.data.description
        this.is_show = true
      }
    },
    countBtn(method) {
      if (method === 'add' && this.count < 10) {
        this.count++
      } else if (method === 'reduce' && this.count > 1) {
        this.count--
      }
    },
  },
}
</script>
