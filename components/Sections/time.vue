<template>
    <section class="time" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
        <div class="container">
            <h2 class="time__title" data-aos="zoom-in" data-aos-delay="100">
                время пришло
            </h2>
            <p class="time__text" data-aos="fade-right" data-aos-delay="200">
                начни зарабатывать с AdsGram сегодня
            </p>
            <button class="time__button" data-aos="fade-left" data-aos-delay="300">
                Перейти в кабинет
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.time {
    padding: 80px 0;
    background: #F4F4F6;
    text-align: center;

    .container {
        max-width: 1440px;
        margin: 0 auto;
    }

    &__title {
        font-size: 36px;
        font-weight: 700;
        color: #181D27;
        margin-bottom: 12px;
    }

    &__text {
        font-size: 20px;
        color: #535862;
        margin-bottom: 32px;
    }

    &__button {
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        background: #005bff;
        color: #FFFFFF;
        padding: 16px 24px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    &__button:hover {
        background: #FFFFFF;
        color: #005bff;
    }
}
</style>