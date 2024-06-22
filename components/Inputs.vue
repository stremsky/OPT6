<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  number: string().min(8, "Must be at least 8 characters").required("Required"),
  region: string().min(8, "Must be at least 8 characters").required("Required"),
  registration: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  number: undefined,
  region: undefined,
  registration: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
  alert("Данные были отправлены!");
}
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <div class="inputs">
      <UFormGroup label="Номер автомобиля" name="number" class="input number">
        <UInput v-model="state.number" />
      </UFormGroup>

      <UFormGroup label="Регион" name="region" class="input region">
        <UInput v-model="state.region" />
      </UFormGroup>

      <UFormGroup
        label="Свидетельство о регистрации ТС"
        name="registration"
        class="input registration"
      >
        <UInput v-model="state.registration" />
      </UFormGroup>
    </div>
    <div class="buttons">
      <UButton type="submit" class="btn submit-btn"
        >Проверить штрафы <img src="../assets/img/right-arrow.png" alt="arrow"
      /></UButton>
      <Modal />
    </div>

    <p class="descr">
      Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
      персональных данных и принимаете оферту
    </p>
  </UForm>
</template>

<style lang="scss" scoped>
.wrap {
  .inputs {
    width: 100%;
    margin-top: 25px;
    display: grid;
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
      }
    }
    .btn {
      font-size: 18px;
      height: 45px;
      width: 210px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      @media (max-width: 550px) {
        width: 100%;
      }

      img {
        margin-left: 4px;
        position: relative;
        top: 2px;
      }
    }

    .number {
      grid-area: number;
    }
    .region {
      grid-area: region;
    }
    .registration {
      grid-area: registration;
    }

    .submit {
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
  }
  .buttons {
    margin-top: 15px;

    display: flex;
    gap: 21px;
    @media (max-width: 550px) {
      flex-direction: column;
    }

    .btn {
      font-size: 18px;
      height: 45px;
      min-width: 210px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-left: 4px;
        position: relative;
        top: 2px;
      }
    }
  }

  .descr {
    margin-top: 16px;
    color: var(--c-dgray);
    font-size: 13px;
  }
}
</style>
