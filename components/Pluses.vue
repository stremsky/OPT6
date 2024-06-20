<script lang="ts" setup>
import items from "assets/table.json";

defineProps({
  img: String,
  title: String,
  descr: Number,
  id: Number,
});
</script>

<template>
  <div class="pluses">
    <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="table">
      <div
        class="table-item"
        v-for="item in items"
        :img="img"
        :title="title"
        :descr="descr"
        :key="id"
      >
        <div class="img"><img :src="item.img" alt="img" /></div>
        <div class="text">
          <p>{{ item.title }}</p>
          <span>{{ item.descr }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pluses {
  margin-top: 96px;
  h2 {
    text-align: center;
  }
  .table {
    padding: 10px;
    margin-top: 33px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    gap: 35px;
    .table-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px;
      min-height: 151px;
      border: 1px solid #eeeff1;
      border-radius: 10px;
      background: #fbfcfd;
      .img {
        width: 100%;
      }
      .text {
        p {
          color: var(--c-dblue);
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        span {
          font-size: 15px;
        }
      }
    }
  }
}
</style>

function defineProps(arg0: { img: StringConstructor; title: StringConstructor; descr: NumberConstructor; }) {
  throw new Error("Function not implemented.");
}
