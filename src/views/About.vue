<template>
  <navbar></navbar>
  <swiper
    class="mt-6"
    :slides-per-view="1"
    :space-between="50"
    :auto-play="true"
    effect="fade"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide>
      <img src="../../public/images/coverimg.jpg" style="height: 600px; width: 100vw" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/images/coverimg2.jpg" style="height: 600px; width: 100vw" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/images/coverimg3.jpg" style="height: 600px; width: 100vw" alt="" />
    </swiper-slide>
    ...
  </swiper>
  <h1 class="ml9">
    <span class="text-wrapper">
      <span class="letters text-light">Coffee mornings</span>
    </span>
  </h1>
  <h1>123</h1>
</template>

<script>
import SwiperCore, { EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import 'swiper/components/effect-fade/effect-fade.scss'
import navbar from '../components/Navbar.vue'

SwiperCore.use([EffectFade, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide,
    navbar,
  },
  data() {
    return {}
  },
  created() {
    const getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`
    this.$http.get(getProductsApi).then((res) => {
      console.log(res)
    })
  },
  mounted() {
    var textWrapper = document.querySelector('.ml9 .letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1),
      })
      .add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      })
  },
}
</script>
