
<script setup >
const items = [
  {
    img: "_nuxt/assets/img/table/1.png",
    title: "Неограниченый автопарк",
    descr: "Можно добавить неограниченное кол-во машин и водителей",
    id: 0,
  },
  {
    img: "_nuxt/assets/img/table/2.png",
    title: "Сокращение затрат до 50%",
    descr:
      "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
    id: 1,
  },
  {
    img: "_nuxt/assets/img/table/3.png",
    title: "Безопасность",
    descr:
      "Данные передаются в зашифрованном виде, они доступны только получателю",
    id: 2,
  },
  {
    img: "_nuxt/assets/img/table/6.png",
    title: "Все история сохраняется по каждой машине",
    descr:
      "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
    id: 5,
  },
  {
    img: "_nuxt/assets/img/table/2.png",
    title: "Сокращение затрат до 50%",
    descr:
      "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
    id: 1,
  },
  {
    img: "_nuxt/assets/img/table/3.png",
    title: "Безопасность",
    descr:
      "Данные передаются в зашифрованном виде, они доступны только получателю",
    id: 2,
  },
  {
    img: "_nuxt/assets/img/table/6.png",
    title: "Все история сохраняется по каждой машине",
    descr:
      "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
    id: 5,
  },
];
</script>

<template>
  <div class="wrap">
    <h2 class="flex justify-center">Документы</h2>
    <UCarousel
      v-slot="{ item, index }"
      :items="items"
      :ui="{ item: 'basis-full sm:basis-1/2   md:basis-1/3 lg:basis-1/3' }"
      class="carousel"
      :prev-button="{
        class: 'carousel-arrow-left',
      }"
      :next-button="{
        class: 'carousel-arrow-right',
      }"
      arrows
      indicators
    >
      <div class="doc">
        <div class="doc__text">
          <div class="doc__title">{{ item.title }}</div>
          <div class="doc__descr">{{ item.descr }}</div>
        </div>
        <button class="btn">Перейти</button>
      </div>
    </UCarousel>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  max-width: 1148px;
  margin-bottom: 496px;
  h2 {
    margin-bottom: 40px;
    text-align: center;
  }
  .carousel {
    margin: 85px 20px 0;
    display: flex;
    & > :nth-child(3) {
      bottom: -23px;
      .rounded-full {
        background: red !important;
        color: red !important;
        outline: 1px solid red !important;
        border: 1px solid red !important;
      }
    }

    button {
    }

    .doc {
      box-shadow: 0px 0px 20px 0px #0000001f;
      width: 340px;
      height: 450px;
      margin: 0 17px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid var(--c-lgray);
      border-radius: 10px;
      align-self: center;

      .doc__text {
        .doc__title {
          font-size: 31px;
          font-weight: 700;
          line-height: 37.2px;
          color: var(--c-blue);
        }
        .doc__descr {
          font-size: 18px;
          font-weight: 400;
          line-height: 21.6px;
          margin-top: 10px;
        }
      }
      .btn {
        width: 290px;
        height: 45px;
      }
    }
  }
}
</style>
