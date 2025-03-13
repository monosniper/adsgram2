<script lang="ts" setup>
import {computed} from "vue";
import {useRoute} from "nuxt/app";
const route = useRoute();
const locale = computed(() => route.params.locale || "ru");
const heroImageDesktop = computed(() => `/images/${locale.value}/main${locale.value}.png`);
const heroImageMobile = computed(() => `/images/${locale.value}/card${locale.value}.png`);
</script>

<template>
  <section class="hero" data-aos="fade-up">
    <div class="container">
      <div class="hero__content" data-aos="fade-right">
        <h1 class="hero__title" data-aos="fade-right">
          <span>{{ $t("hero.title1") }}</span>
          <span>{{ $t("hero.title2") }}</span>
        </h1>
        <p class="hero__text" data-aos="fade-right" data-aos-delay="100">
          <span>{{ $t("hero.text1") }}</span> <span>{{ $t("hero.text2") }}</span>
          <span>{{ $t("hero.text3") }}</span>
        </p>
        <button class="hero__button" data-aos="zoom-in" data-aos-delay="200">
          {{ $t("hero.button") }}
        </button>
      </div>

      <div class="hero__images" data-aos="fade-left">
        <img :src="heroImageDesktop" alt="Основное изображение" class="hero__image hero__image--desktop"/>
        <img :src="heroImageMobile" alt="Мобильное изображение" class="hero__image hero__image--mobile"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/vars" as *;

.hero {
  padding: 70px 0 0 0;
  background: $bg-color-1;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__content {
    flex: 1;
    max-width: 50%;
  }

  &__title {
    display: flex;
    flex-direction: column;
    text-wrap: nowrap;
    font-size: 60px;
    font-weight: 600;
    color: #02091C;
    line-height: 1.2;
    margin-bottom: 64px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  &__button {
    width: 253px;
    height: 60px;
    background-color: $btn-color-2;
    color: $bg-color-2;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: $bg-color-2;
      color: $btn-color-2;
    }
  }

  &__images {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__image--desktop {
    max-width: 950px;
    margin-left: -80px;
    margin-top: 20px;
  }

  &__image--mobile {
    display: none;
  }

  @media (max-width: 768px) {

    padding: 0;
    .hero__content {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
    .container {
      padding: 0 16px;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .hero__images {
      order: -1;
      margin-bottom: 16px;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .hero__image--desktop {
      display: none;
    }

    .hero__image--mobile {
      display: block;
      max-width: 100%;
      margin-top: 10px;
    }

    .hero__content {
      align-items: flex-start;
      text-align: left;
      width: 100%;
      max-width: 100%;
    }

    .hero__title {
      font-size: 24px;
      font-weight: 700;
      color: #181D27;
      margin-bottom: 12px;
      white-space: normal;
      display: block;
    }
    .hero__title span {
      display: inline;
      word-wrap: break-word;
    }
    .hero__text {
      font-size: 18px;
      color: #535862;
      line-height: 1.5;
      margin-bottom: 24px;
      display: block;
    }

    .hero__button {
      font-size: 16px;
      font-weight: 600;
      background: #005bff;
      color: #ffffff;
      padding: 14px 24px;
      border-radius: 12px;
      width: 100%;
    }
  }
}
</style>
