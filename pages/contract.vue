<script lang="ts" setup>
const links = [
  {
    label: "Главная страница",
    // icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Документы",
    // icon: "i-heroicons-square-3-stack-3d",
  },
  {
    label: "Лицензионный договор",
    // icon: "i-heroicons-link",
  },
];
</script>

<template>
  <div class="container">
    <UBreadcrumb
      :links="links"
      class="breadcrumb"
      :ui="{
        active: 'text-grayprimary-500 dark:text-gray-400',
        inactive: ' hover:text-gray-700 dark:hover:text-gray-200',
      }"
    />

    <h1>Лицензионный договор</h1>
    <p>Заголовок 1</p>
    <span>
      Представленная тележка-дозатор обеспечивает высококачественную обработку
      любых территорий сыпучими противогололедными реагентами самых разных
      типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и
      пескосоляные смеси. Тележка прекрасно подходит для использования во дворах
      многоквартирных домов, обработки территорий промышленных предприятий,
      востребована владельцами магазинов, различных коммерческих компаний. Кроме
      того, она может использоваться для высева семян на газонах, теннисных
      кортах и других территориях.
      <br />
      <br />
      Представленная тележка-дозатор обеспечивает высококачественную обработку
      любых территорий сыпучими противогололедными реагентами самых разных
      типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и
      пескосоляные смеси.
    </span>
    <p>Заголовок 2</p>
    <span>
      Представленная тележка-дозатор обеспечивает высококачественную обработку
      любых территорий сыпучими противогололедными реагентами самых разных
      типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и
      пескосоляные смеси.
    </span>
    <p>Заголовок 3</p>
    <span>
      Представленная тележка-дозатор обеспечивает высококачественную обработку
      любых территорий сыпучими противогололедными реагентами самых разных
      типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и
      пескосоляные смеси. Тележка прекрасно подходит для использования во дворах
      многоквартирных домов, обработки территорий промышленных предприятий,
      востребована владельцами магазинов, различных коммерческих компаний. Кроме
      того, она может использоваться для высева семян на газонах, теннисных
      кортах и других территориях.
      <br />
      <br />
      Представленная тележка-дозатор обеспечивает высококачественную обработку
      любых территорий сыпучими противогололедными реагентами самых разных
      типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и
      пескосоляные смеси.
    </span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  .breadcrumb {
    margin: 20px 0;
  }

  p {
    margin-top: 30px;
    font-size: 41px;
    font-weight: 700;
    color: var(--c-grayest);
  }
  span {
    margin-top: 25px;
    font-size: 18px;
  }
}
</style>
