import model from 'bootstrap/js/dist/modal'

export default {
  methods: {
    showModel() {
        this.modal.show()
    },
    hideModel() {
      this.modal.hide()
    },
  },
  mounted() {
    this.modal = new model(this.$refs.controlModel, {
    keyboard: false,
    })
  },
}