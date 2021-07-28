<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-brown position-fixed top-0 start-0 container-fluid">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img src="../../public/images/logo.png" alt="風味留醇咖啡" style="width: 100px; height: 60px" />
        <h1
          style="text-indent:101%;
                overflow:hidden;
                white-space: nowrap;
                position: absolute;
                width: 1px;
                height: 1px;"
        >
          風味留醇咖啡
        </h1>
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-brown text-border">關於 Always</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link text-brown text-border">最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link text-brown text-border">商品介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-brown text-border">登入</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
