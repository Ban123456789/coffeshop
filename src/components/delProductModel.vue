<template>
  <div class="modal fade" tabindex="-1" ref="controlModel">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-light">{{ temProduct.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            確定要刪除
            <span class="text-danger"
              >{{ temProduct.title }} <span class="text-dark">嗎? (刪除之後就無法復原喔!)</span></span
            >
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-danger" @click="$emit('inner-delproduct', temProduct)">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixinModel from '@/mixin/mixinModel'

export default {
  mixins: [mixinModel],
  props: {
    innerDelProduct: {
      type: Object,
      defalt() {
        return {}
      },
    },
  },
  data() {
    return {
      temProduct: {},
    }
  },
  watch: {
    innerDelProduct() {
      this.temProduct = this.innerDelProduct
    },
  },
}
</script>
