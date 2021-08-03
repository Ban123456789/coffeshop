<template>
  <div class="coffee-background">
    <div class="coffee-mug">
      <div class="coffee-container">
        <div class="coffee">
          <div class="loading">Loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$color-white: #fff;
$color-mug: #e67e22;
$color-coffee: rgb(117, 73, 44);

.coffee-background {
  background: rgba(165, 165, 165, 0.603);
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.coffee-mug {
  position: relative;
  top: 40%;
  margin: 0 auto;
  width: 8em;
  height: 6em;
  border-radius: 0.05em 0.05em 3em 3em;
  box-shadow: 0 0 0 0.5em $color-mug;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 100%;
    top: 1em;
    width: 1.5em;
    height: 2em;
    box-shadow: 0 0 0 0.5em $color-mug;
    margin-left: 0.5em;
    border-radius: 0 50% 50% 0;
  }

  .coffee-container {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-white;
    border-radius: 0.05em 0.05em 3em 3em;
  }

  .coffee {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $color-coffee;
    animation: coffee-load 8s;

    &:before {
      content: '';
      display: block;
      width: 200%;
      height: 1em;
      position: absolute;
      left: -50%;
      top: -0.5em;
      background: $color-white;
      animation: coffee-wave 0.8s ease-in-out infinite;
      border-radius: 50%;
    }

    .loading {
      color: $color-white;
      text-align: center;
      padding-top: 1em;
      animation: loading 8s;
    }
  }
}

@keyframes coffee-load {
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(20%);
  }
  90% {
    transform: translateY(0);
  }
  95% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes coffee-wave {
  0% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(2deg);
  }
}

@keyframes loading {
  0% {
    color: $color-white;
  }
  100% {
    color: $color-coffee;
  }
}
</style>
