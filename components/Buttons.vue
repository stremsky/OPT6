<script lang="ts" setup>
</script>

<template>
  <div class="buttons">
    <button class="btn">
      Проверить штрафы <img src="../assets/img/right-arrow.png" alt="arrow" />
    </button>
    <button class="btn tube">
      <img src="../assets/img/tube-sign.png" alt="tube" />О сервисе<span
        >(1 мин. 20 сек.)</span
      >
    </button>
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
  .tube {
    height: 45px;
    flex: 0 1 258px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: var(--c-black);
    border: 1px solid var(--c-blue);
    img {
      margin-left: 4px;
      position: relative;
      top: 0px;
      margin-right: 6px;
    }
    span {
      color: var(--c-dblue);
      margin-left: 6px;
    }
  }
}
.descr {
  margin-top: 16px;
  color: var(--c-dgray);
  font-size: 13px;
}
</style>
