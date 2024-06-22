<script setup>
const isOpen = ref(false);
</script>

<template>
  <button class="btn tube" label="Open" @click="isOpen = true">
    <img src="../assets/img/tube-sign.png" alt="tube" />О сервисе<span
      >(1 мин. 20 сек.)</span
    >
  </button>
  <UModal v-model="isOpen">
    <div class="p-4">
      <iframe
        width="100%"
        height="500"
        placeholder="foo"
        src="https://www.youtube.com/embed/nwknAXpOWP0"
        title="Муслим Магомаев - Вдоль по Питерской. Muslim Magomaev"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <Placeholder class="h-48" />
    </div>
  </UModal>
</template>

<style lang="scss" scoped>
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
  flex: 0 1 258px !important;
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
</style>
