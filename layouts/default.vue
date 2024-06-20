<script lang="ts" setup>
</script>

<template>
  <header class="pt-sans-regular">
    <div class="container">
      <div class="left-side">
        <div class="logo">
          <NuxtLink class="link" to="/"
            ><img src="../assets/img/Logo.png" alt="Logo"
          /></NuxtLink>
        </div>
        <div class="links">
          <NuxtLink class="link p30" to="/blank">Тарифы</NuxtLink>
          <NuxtLink class="link" to="/blank">Контакты</NuxtLink>
        </div>
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
    color: var(--c-white);
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 850px) {
      padding: 10px;
    }

    .link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      color: var(--c-white);
      text-decoration: none;
      font-weight: 700;
    }
    .left-side {
      flex: 0 1 50%;
      min-height: 60px;
      padding: 0 10px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      column-gap: 30px;
      align-items: center;
      justify-content: start;
      @media (max-width: 850px) {
        width: 100%;
        display: block;
        margin: 0 10px;
        flex: 1 1 100%;
        // justify-content: center;
      }
      .logo a {
        @media (max-width: 850px) {
          display: block;
          text-align: center;
          margin: 10px 0;
        }
      }
      .links {
        display: flex;
        column-gap: 30px;
        @media (max-width: 850px) {
          justify-content: center;
        }
      }
    }
    .right-side {
      column-gap: 30px;
      flex: 0 1 50%;
      min-height: 60px;
      padding: 0 10px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: end;
      @media (max-width: 850px) {
        margin: 0 10px;
        flex: 1 1 100%;
        justify-content: center;
      }
      @media (max-width: 460px) {
        margin: 10px;
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
        margin: 10px;
      }
    }
  }
}
</style>
