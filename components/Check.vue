<script lang="ts" setup>
</script>

<template>
  <div class="wrap">
    <div class="left-side">
      <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <Inputs />
    </div>

    <div class="right-side">
      <img src="../assets/img/devices.png" alt="devices" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  padding: 0 10px;
  display: flex;

  .left-side {
    flex: 0 1 563px;
    @media (max-width: 1024px) {
      flex: 0 1 auto;
    }
  }
  .right-side {
    flex: 0 1 auto;
    margin-left: 40px;
    img {
      width: 100%;
      object-fit: contain;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
}
</style>
