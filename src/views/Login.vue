<template>
  <navbar></navbar>
  <div class="container mt-5 w-25">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">帳號</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.username"
        />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密碼</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password" />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="signinFn">登入</button>
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
