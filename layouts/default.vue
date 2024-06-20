<script lang="ts" setup>
</script>

<template>
  <header class="pt-sans-regular">
    <div class="container">
      <div class="left-side">
        <NuxtLink class="link" to="/"
          ><img src="../assets/img/Logo.png" alt="Logo"
        /></NuxtLink>
        <NuxtLink class="link p30" to="/blank">Тарифы</NuxtLink>
        <NuxtLink class="link" to="/blank">Контакты</NuxtLink>
      </div>
      <div class="right-side">
        <a href="tel: +74951184422"> +7&nbsp;495&nbsp;118-44-22</a>

        <NuxtLink class="link p30" to="/blank">Вход</NuxtLink>

        <button class="btn">Регистрация</button>
      </div>
    </div>
  </header>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.p30 {
  padding: 0 30px;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(28, 39, 52, 1) 100%
  );
  font-size: 18px;
  .container {
    // outline: 1px solid red;
    color: var(--c-white);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .link {
      display: flex;
      align-items: center;
      color: var(--c-white);
      text-decoration: none;
      font-weight: 700;
    }
    .left-side {
      min-height: 60px;
      flex: 0 1;
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      @media (max-width: 715px) {
        margin: 0 auto;
      }
    }
    .right-side {
      //   margin: 0 auto;
      min-height: 60px;
      flex: 0 1;
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      @media (max-width: 715px) {
        margin: 0 auto;
      }
      a {
        color: var(--c-white);
        text-decoration: none;
        font-weight: 700;
        white-space: nowrap;
      }
      button {
        height: 37px;
        width: 117px;
        font-size: 15px;
      }
    }
  }
}
</style>
