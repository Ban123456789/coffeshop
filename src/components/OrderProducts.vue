<template>
  <div class="modal" tabindex="-1" ref="orderProducts">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light text-border">購買商品訂單</h5>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="text-border">#</th>
                <th scope="col" class="text-border">商品名稱</th>
                <th scope="col" class="text-border">購買數量</th>
                <th scope="col" class="text-border">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in products" :key="i">
                <th scope="row">{{ data.product.num }}</th>
                <td>{{ data.product.title }}</td>
                <td>{{ data.qty }}</td>
                <td>{{ data.final_total }}</td>
              </tr>
              <tr>
                <td class="text-border">總計:</td>
                <td class="text-border">{{ total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">離開</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import model from 'bootstrap/js/dist/modal'

export default {
  props: ['products', 'total'],
  data() {
    return {
      modal: {},
    }
  },
  mounted() {
    this.modal = new model(this.$refs.orderProducts, {
      keyboard: false,
    })
  },
  methods: {
    showModal() {
      this.modal.show()
    },
    hideModal() {
      this.modal.hide()
    },
  },
}
</script>
