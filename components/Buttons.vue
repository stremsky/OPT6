<script lang="ts" setup>
</script>

<template>
  <div class="buttons">
    <button class="btn">
      Проверить штрафы <img src="../assets/img/right-arrow.png" alt="arrow" />
    </button>
    <Modal />
  </div>
  <p class="descr">
    Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
    персональных данных и принимаете оферту
  </p>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 21px;
  margin-top: 15px;
  flex: 0 1 563px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
  .btn {
    font-size: 18px;
    max-height: 45px;
    flex: 0 1 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-left: 4px;
      position: relative;
      top: 2px;
    }
  }
}
.descr {
  margin-top: 16px;
  color: var(--c-dgray);
  font-size: 13px;
}
</style>
