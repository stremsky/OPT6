<script lang="ts" setup>
const appConfig = useAppConfig();
console.log(appConfig.theme);

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "light";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <div class="container">
    <ClientOnly>
      <UButton
        class="foo"
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
    <Check />
    <Pluses />
    <Carousel />
    <Contract />
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-direction: column;

  .foo {
    width: 95%;
    display: flex;
    justify-content: flex-end;
    height: 79px;
    & > * {
      transform: scale(3);
    }
  }
}
</style>

