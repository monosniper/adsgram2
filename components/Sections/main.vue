<template>
  <section class="hero" data-aos="fade-up">
    <div class="container">
      <div class="hero__content" data-aos="fade-right">
        <h1 class="hero__title" data-aos="fade-right">
          Монетизируй канал <br />
          или бот без комиссии
        </h1>
        <p class="hero__text" data-aos="fade-right" data-aos-delay="100">
          удобно, выгодно, быстро, <br />
          без сложных условий <br />
          и лишних формальностей
        </p>
        <button class="hero__button" data-aos="zoom-in" data-aos-delay="200">
          Полетели
        </button>
      </div>
      <div class="hero__images" data-aos="fade-left">
        <img src="/assets/images/hero-chat.png" alt="Чат" class="hero__image hero__image--chat" />
        <img src="/assets/images/hero-phone2.png" alt="Телефон" class="hero__image hero__image--phone" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
    text-wrap: nowrap;
    font-size: 60px;
    font-weight: 600;
    color: #02091C;
    line-height: 1.2;
    margin-bottom: 64px;
  }

  &__text {
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
    max-width: 50%;
    display: flex;
    justify-content: center;
  }

  &__image {
    height: auto;

    &--chat {
      width: 620.95px;
      height: 392px;
      position: absolute;
      bottom: 155px;
      right: 286px;
      z-index: 1;
    }

    &--phone {
      width: 371.14px;
      height: 749.92px;
      position: relative;
      z-index: 2;
    }
  }
}
</style>
