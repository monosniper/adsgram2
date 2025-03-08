<template>
    <section class="steps" data-aos="fade-up" data-aos-offset="100">
      <div class="container">
        <span class="steps__tag" data-aos="fade-right" data-aos-delay="100">подключение</span>
        <h2 class="steps__title" data-aos="fade-right" data-aos-delay="200">
          3 шага к USDT на счету
        </h2>
        <p class="steps__subtitle" data-aos="fade-right" data-aos-delay="300">
          Мы сделали подключение и настройку максимально комфортными<br />
          и быстрыми, а наша служба поддержки готова помочь по любым вопросам
        </p>
  
        <div class="steps__wrapper">
          <div class="steps__content" data-aos="fade-right" data-aos-delay="400">
            <div class="steps__icons" data-aos="zoom-in" data-aos-delay="500">
              <img v-for="n in 10" :key="n" src="/assets/images/icons.svg" alt="Иконка" />
            </div>
  
            <div class="steps__list">
              <div class="steps__item steps__item--active" data-aos="fade-up" data-aos-delay="600">
                <h3 class="steps__item-title">
                  Добавьте бота и настройте частоту рекламы
                </h3>
                <p class="steps__item-text">
                  Подключите бота или канал через API, укажите админа и выберите допустимую частоту показов
                  в рекламном канале
                </p>
                <a href="#" class="steps__link">Начать →</a>
              </div>
  
              <div class="steps__item" data-aos="fade-up" data-aos-delay="700">
                <h3 class="steps__item-title">
                  Реклама публикуется на 48 часов
                </h3>
                <p class="steps__item-text">
                  Пост остается активным в течение 48 часов после прохождения модерации. По истечению этого времени пост
                  удаляется
                </p>
              </div>
  
              <div class="steps__item" data-aos="fade-up" data-aos-delay="800">
                <h3 class="steps__item-title">
                  Каждые 24 часа на кошелек приходит оплата в USDT
                </h3>
                <p class="steps__item-text">
                  Мы высылаем средства за просмотры (CPM) на ваш кошелек в кабинете AdsGram каждые 24 часа
                </p>
              </div>
            </div>
          </div>
          <div class="steps__image" data-aos="fade-left" data-aos-delay="900">
            <img src="/assets/images/balance.png" alt="Баланс в USDT" />
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
        position: relative;
        width: 100%;
        max-width: 500px;
        height: auto;
        z-index: 1;
    }
}
</style>
