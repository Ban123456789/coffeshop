<template>
  <div class="toast-container position-absolute top-0 end-0 p-3">
    <toast :msg="data" v-for="(data, key) in messages" :key="key"></toast>
  </div>
</template>

<script>
import toast from '@/components/Toast.vue'

export default {
  components: {
    toast,
  },
  data() {
    return {
      messages: [],
    }
  },
  inject: ['mitter'],
  mounted() {
    this.mitter.on('msg', (messages) => {
      this.messages.push(messages)
    })
  },
}
</script>
