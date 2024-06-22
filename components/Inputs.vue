<script setup>
</script>

<template>
  <div class="inputs">
    <div class="input number">
      <label for="number">Номер автомобиля</label>
      <input type="text" id="number" name="number" required minlength="4" />
    </div>
    <div class="input region">
      <label for="region">Регион</label>
      <input type="text" id="region" name="region" required minlength="4" />
    </div>
    <div class="input registration">
      <label for="registration">Свидетельство о регистрации ТС</label>
      <input
        type="text"
        id="registration"
        name="registration"
        required
        minlength="4"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputs {
  width: 100%;
  margin-top: 25px;
  display: grid;
  //   row-gap: 16px;
  column-gap: 30px;
  grid-template-columns: minmax(320px, 1fr) minmax(213px, 1fr);
  grid-template-areas:
    "number region"
    "registration registration";
  @media (max-width: 715px) {
    display: block;
  }

  .input {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-family: PT Sans;
    font-size: 12px;
    line-height: 14.4px;
    input {
      height: 40px;
      border-radius: 5px;
      border: 1px solid var(--c-gray);
    }
    label {
      margin: 16px 0 5px;
    }
  }

  .number {
    grid-area: number;
    flex: 0 1 320px;
  }
  .region {
    grid-area: region;
    flex: 0 1 auto;
    // margin: 0;
  }
  .registration {
    grid-area: registration;
    flex: 0 1 auto;
  }
}
</style>
