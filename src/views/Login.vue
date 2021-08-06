<template>
  <navbar></navbar>
  <div class="container mt-6 w-25 db">
    <form class="pt-5">
      <img style="background-image: url(/images/cappuccino.jpg)" class="db-img" alt="" />
      <div class="title text-border text-light mb-3 p-3" style="">登入後台系統</div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.username"
          placeholder="後臺管理帳號"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.password"
          placeholder="後臺管理密碼"
        />
      </div>
      <button type="submit" class="btn btn-success d-block w-100" @click.prevent="signinFn">登入</button>
    </form>
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      signInApi: `${process.env.VUE_APP_API}/admin/signin`,
    }
  },
  components: {
    navbar,
  },
  methods: {
    signinFn() {
      this.$http.post(this.signInApi, this.user).then((res) => {
        const { token, expired } = res.data
        document.cookie = `loginToken=${token}; expired=${new Date(expired)}`
        console.log(res)
        if (res.data.success) {
          this.$router.push('/dashboard')
        }
      })
    },
  },
}
</script>
