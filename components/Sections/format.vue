<script lang="ts" setup>
import {computed} from "vue";
import {useRoute} from "nuxt/app";
const route = useRoute();
const locale = computed(() => route.params.locale || "ru");
const phoneImage = computed(() => `/images/${locale.value}/mobile${locale.value}.png`);
</script>

<template>
  <section class="native-post" data-aos="fade-in" data-aos-duration="700">
    <div class="native-post__container">
      <div class="native-post__wrapper">
        <div class="native-post__image" data-aos="zoom-out" data-aos-delay="100">
          <!-- Динамическое изображение телефона -->
          <img :src="phoneImage" alt="Телефон с рекламой"/>
        </div>
        <div class="native-post__content" data-aos="slide-up" data-aos-delay="200">
                    <span class="native-post__tag" data-aos="flip-down" data-aos-delay="250">
                        {{ $t("native_post.tag") }}
                    </span>
          <h2 class="native-post__title" data-aos="rotate" data-aos-delay="300">
            {{ $t("native_post.title") }}
          </h2>
          <p class="native-post__subtitle" data-aos="fade-left" data-aos-delay="350">
            {{ $t("native_post.subtitle") }}
          </p>
          <ul class="native-post__list">
            <li class="native-post__item" data-aos="flip-up" data-aos-delay="400">
              <img alt="Формат" src="/assets/icons/format.svg"/>
              <span>{{ $t("native_post.format") }}</span>
            </li>
            <li class="native-post__item" data-aos="flip-up" data-aos-delay="450">
              <img alt="Время" src="/assets/icons/time.svg"/>
              <span>{{ $t("native_post.time") }}</span>
            </li>
            <li class="native-post__item" data-aos="flip-up" data-aos-delay="500">
              <img alt="Аудитория" src="/assets/icons/audience.svg"/>
              <span>{{ $t("native_post.audience") }}</span>
            </li>
            <li class="native-post__item" data-aos="flip-up" data-aos-delay="550">
              <img alt="Оплата" src="/assets/icons/brilliand.svg"/>
              <span>{{ $t("native_post.payment") }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.native-post {
  padding: 80px 0;
  background: #F4F4F6;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 112px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }

  &__image {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    max-width: 45%;
  }

  &__image img {
    width: 100%;
    max-width: 320px;
    height: auto;
  }

  &__content {
    flex: 1.2;
    max-width: 55%;
  }

  &__tag {
    color: #005bff;
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-bottom: 12px;
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    color: #181D27;
    margin-bottom: 16px;
  }

  &__subtitle {
    font-size: 20px;
    color: #6c757d;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 33px;
    background: #FFF;
    border-radius: 16px;
    padding: 24px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    color: #535862;
    font-weight: 500;
    padding-bottom: 12px;
    border-bottom: 1px solid #F4F4F6;

  }
  &__item:last-child {
    border-bottom: none !important;
  }

  &__item img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    & {
      padding: 0;
    }

    &__container {
      padding: 0 16px;
    }

    &__wrapper {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
    }

    &__content {
      max-width: 100%;
      margin-top: 20px;
      text-align: left;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      text-align: left;
    }

    &__subtitle {
      font-size: 16px;
    }

    &__image {
      max-width: 100%;
      justify-content: center;
    }
  }

}
</style>