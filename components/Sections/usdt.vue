<template>
  <section class="steps" data-aos="fade-up" data-aos-offset="100">
    <div class="container">
      <span class="steps__tag" data-aos="fade-right" data-aos-delay="100">{{ $t("steps.tag") }}</span>
      <h2 class="steps__title" data-aos="fade-right" data-aos-delay="200">
        {{ $t("steps.title") }}
      </h2>
      <p class="steps__subtitle" data-aos="fade-right" data-aos-delay="300">
        {{ $t("steps.subtitle") }}
      </p>

      <div class="steps__wrapper">
        <div class="steps__content" data-aos="fade-right" data-aos-delay="400">
          <div class="steps__icons" data-aos="zoom-in" data-aos-delay="500">
            <img v-for="n in 10" :key="n" src="/assets/images/icons.svg" alt="Иконка" />
          </div>

          <div class="steps__list">
            <div class="steps__item steps__item--active" data-aos="fade-up" data-aos-delay="600">
              <h3 class="steps__item-title">{{ $t("steps.step1.title") }}</h3>
              <p class="steps__item-text">{{ $t("steps.step1.text") }}</p>
              <a href="#" class="steps__link">{{ $t("steps.step1.link") }}</a>
            </div>

            <div class="steps__item" data-aos="fade-up" data-aos-delay="700">
              <h3 class="steps__item-title">{{ $t("steps.step2.title") }}</h3>
              <p class="steps__item-text">{{ $t("steps.step2.text") }}</p>
            </div>

            <div class="steps__item" data-aos="fade-up" data-aos-delay="800">
              <h3 class="steps__item-title">{{ $t("steps.step3.title") }}</h3>
              <p class="steps__item-text">{{ $t("steps.step3.text") }}</p>
            </div>
          </div>
        </div>
        <div class="steps__image" data-aos="fade-left" data-aos-delay="900">
          <img src="/assets/images/balance2.png" alt="{{ $t('steps.image_alt') }}" />
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.steps {
  padding: 80px 0;
  background: #FFFFFF;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 112px;
    background: #FFFFFF;
  }

  &__tag {
    color: #005bff;
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    color: #181D27;
    margin-bottom: 16px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 40px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 64px;
  }

  &__content {
    flex: 1;
    max-width: 50%;
  }

  &__icons {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 24px;
    margin-left: 20px;
  }

  &__icons img {
    width: 24px;
    height: 24px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    padding-left: 20px;
  }

  &__list::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background: #D1D1D2;
    left: 20px;
    top: 0;
  }

  &__item {
    position: relative;
    padding-left: 16px;
  }

  &__item--active {
    border-left: 4px solid #005bff;
    margin-left: -1px;
  }

  &__item-title {
    font-size: 20px;
    font-weight: 700;
    color: #181D27;
    margin-bottom: 8px;
  }

  &__item-text {
    font-size: 16px;
    line-height: 1.5;
  }

  &__link {
    display: inline-block;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #005bff;
    text-decoration: none;
  }


  &__image {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    max-width: 50%;
  }

  &__image::before {
    content: "";
    margin-left: 10px;
    position: absolute;
    width: 90%;
    height: 90%;
    background: #F4F4F6;
    border-radius: 24px;
    top: 20px;
    left: 10px;
    z-index: 0;
  }

  &__image img {
    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;
    width: 100%;
    max-width: 500px;
    height: auto;
    z-index: 1;
  }
}

@media (max-width: 768px) {
  .steps {
    padding: 0;

    .steps__icons {
      display: none;
    }

    .container {
      padding: 10px 16px;
      padding-bottom: 120px;
    }

    &__tag {
      font-size: 14px;
      font-weight: 600;
      color: #005bff;
      text-transform: uppercase;
      display: block;
      margin-bottom: 8px;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      color: #181D27;
      margin-bottom: 12px;
    }

    &__subtitle {
      font-size: 14px;
      color: #535862;
      line-height: 1.5;
      margin-bottom: 24px;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 24px;
    }

    &__content {
      max-width: 100%;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 24px;
      position: relative;
      padding-left: 1px;
    }

    &__list::before {
      content: "";
      position: absolute;
      width: 1.5px;
      height: 100%;
      background: #53586200;
      left: 0;
      top: 0;
    }

    &__item {
      position: relative;
      padding-left: 16px;
    }

    &__item--active {
      border-left: 2px solid #005bff;
      padding-left: 14px;
    }

    &__item-title {
      font-size: 16px;
      font-weight: 700;
      color: #181D27;
      margin-bottom: 4px;
    }

    &__item-text {
      font-size: 14px;
      color: #535862;
      line-height: 1.4;
    }

    &__link {
      display: inline-block;
      margin-top: 4px;
      font-size: 14px;
      font-weight: 600;
      color: #005bff;
      text-decoration: none;
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100%;
      margin-top: 24px;
    }

    &__image img {
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
