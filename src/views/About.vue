<template>
  <navbar></navbar>
  <swiper
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
      <img src="../assets/coverimg.jpg" style="height: 600px; width: 100vw" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/coverimg2.jpg" style="height: 600px; width: 100vw" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/coverimg3.jpg" style="height: 600px; width: 100vw" alt="" />
    </swiper-slide>
    ...
  </swiper>
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
  mounted() {},
}
</script>
