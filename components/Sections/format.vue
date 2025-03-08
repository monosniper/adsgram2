<template>
    <section class="native-post" data-aos="fade-in" data-aos-duration="900">
        <div class="container">
            <div class="native-post__wrapper">
                <div class="native-post__image" data-aos="zoom-out" data-aos-delay="150">
                    <img src="/assets/images/hero-phone2.png" alt="Телефон с рекламой" />
                </div>
                <div class="native-post__content" data-aos="slide-up" data-aos-delay="250">
                    <span class="native-post__tag" data-aos="flip-down" data-aos-delay="300">
                        формат
                    </span>
                    <h2 class="native-post__title" data-aos="rotate" data-aos-delay="350">
                        Нативный пост в канале (боте)
                    </h2>
                    <p class="native-post__subtitle" data-aos="fade-left" data-aos-delay="400">
                        Объявление выглядит как нативный пост в канале
                    </p>
                    <ul class="native-post__list">
                        <li class="native-post__item" data-aos="flip-up" data-aos-delay="450">
                            <img src="/assets/icons/format.svg" alt="Формат" />
                            <span>формат: текст + img/gif</span>
                        </li>
                        <li class="native-post__item" data-aos="flip-up" data-aos-delay="500">
                            <img src="/assets/icons/time.svg" alt="Время" />
                            <span>время: 48 часов</span>
                        </li>
                        <li class="native-post__item" data-aos="flip-up" data-aos-delay="550">
                            <img src="/assets/icons/frequency.svg" alt="Частота" />
                            <span>частота выпуска: от 1 до 3-х раз в день</span>
                        </li>
                        <li class="native-post__item" data-aos="flip-up" data-aos-delay="600">
                            <img src="/assets/icons/audience.svg" alt="Аудитория" />
                            <span>аудитория: все, включая Premium</span>
                        </li>
                        <li class="native-post__item" data-aos="flip-up" data-aos-delay="650">
                            <img src="/assets/icons/payment.svg" alt="Оплата" />
                            <span>оплата: за CPM (просмотры)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.native-post {
    padding: 80px 0;
    background: #F4F4F6;

    .container {
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
        margin-top: -30px;
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
    }

    &__item img {
        width: 40px;
        height: 40px;
    }
}
</style>
