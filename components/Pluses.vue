<script lang="ts" setup>
</script>

<template>
  <div class="pluses">
    <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="table">
      <div class="table-item">
        <div class="img">
          <img src="/assets/img/table/1.png" alt="img" />
        </div>
        <div class="text">
          <p>Неограниченый автопарк</p>
          <span>Можно добавить неограниченное кол-во машин и водителей</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pluses {
  margin-top: 96px;
  .table {
    margin-top: 33px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
    .table-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px;
      height: 151px;
      border: 1px solid #eeeff1;
      border-radius: 10px;
      background: #fbfcfd;
      .img {
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
