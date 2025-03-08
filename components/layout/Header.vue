<script setup lang="ts"></script>

<template>
    <header class="header" data-aos="fade-down" data-aos-duration="800">
      <div class="container header__inner">
        <a href="/" data-aos="fade-right" data-aos-delay="100">
          <img class="header__logo" src="@/assets/icons/logo.svg" alt="AdsGram Logo" />
        </a>
        <nav class="header__nav" data-aos="fade-down" data-aos-delay="200">
          <ul>
            <li><a href="/#">опыт</a></li>
            <li><a href="/#">как работает</a></li>
            <li><a href="/#">формат</a></li>
          </ul>
        </nav>
        <button class="header__moderate" data-aos="zoom-in" data-aos-delay="300">
          Монетизировать
        </button>
      </div>
    </header>
  </template>

<style scoped lang="scss">
@use "@/assets/scss/vars" as *;

.header {
    background-color: $bg-color-1;
    color: $text-color;

    &__inner {
        display: flex;
        align-items: center;
        height: 112px;
    }

    &__logo {
        height: 32px;
        margin-right: 40px;
    }

    &__nav {
        transform: translateY(1px);

        ul {
            display: flex;
            align-items: center;
            list-style: none;
            gap: 24px;

            li {
                a {
                    font-weight: bold;
                    font-size: 16px;
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $btn-color-2;
                    }
                }
            }
        }
    }

    &__moderate {
        margin-left: auto;
        width: 171px;
        height: 44px;
        border-radius: 8px;
        background-color: $btn-color-1;
        color: #fff;
        border: none;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        letter-spacing: 0.5px;

        &:hover {
            background-color: #fff;
            color: $btn-color-2;
        }
    }
}
</style>
