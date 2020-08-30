<template>
  <div class="logo-loader">
    <img src="../assets/loader-logo.gif" alt="aviasales logo" width="70">
  </div>
</template>

<style lang="scss" scoped>
.logo-loader {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  animation: loading 1.2s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
