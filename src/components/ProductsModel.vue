<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="openProductsModel"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="controlModel"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light">新增商品</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div class="mb-3">
                <label for="imgLink" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="imgLink"
                  placeholder="請輸入圖片連結"
                  v-model="innerproduct.imagesUrl"
                />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">或上傳圖片</label>
                <input class="form-control" type="file" id="formFile" @change="uploadFile" ref="imgFile" />
              </div>
              <div class="mr-3"><img class="img-fluid" :src="innerproduct.imageUrl" alt="" /></div>
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="button">新增圖片</button>
              </div>
            </div>
            <div class="col-8">
              <div class="mb-3">
                <label for="title" class="form-label">商品名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入商品名稱"
                  v-model="innerproduct.title"
                  required
                />
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mb-3">
                    <label for="category" class="form-label">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="innerproduct.category"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入商品原價"
                      v-model="innerproduct.origin_price"
                      required
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label for="unit" class="form-label">單位</label>
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入商品單位"
                      v-model="innerproduct.unit"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="price" class="form-label">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入商品售價"
                      v-model="innerproduct.price"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    id="description"
                    class="form-control"
                    aria-label="With textarea"
                    placeholder="請輸入產品描述"
                    v-model="innerproduct.description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    id="content"
                    class="form-control"
                    aria-label="With textarea"
                    placeholder="請輸入說明內容"
                    v-model="innerproduct.content"
                  ></textarea>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked
                    v-model="innerproduct.is_enabled"
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked">是否上架</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" @click="$emit('inner-addproduct', temProduct)">確定新增</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixinModel from '@/mixin/mixinModel'

export default {
  props: {
    innerproduct: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  watch: {
    innerproduct() {
      this.temProduct = this.innerproduct
    },
  },
  data() {
    return {
      modal: {},
      temProduct: {},
    }
  },
  methods: {
    uploadFile() {
      // 新增圖片
      const uploadedFile = this.$refs.imgFile.files[0]
      const uploadFileApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      let formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      this.$http.post(uploadFileApi, formData).then((res) => {
        if (res.data.success === true) {
          this.innerproduct.imageUrl = res.data.imageUrl
        }
      })
    },
  },
  mixins: [mixinModel],
}
</script>
