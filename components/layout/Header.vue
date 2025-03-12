<script setup lang="ts">
import { ref } from "vue";
import burgerIcon from "@/assets/icons/burger.svg?raw";
import closeIcon from "@/assets/icons/close.svg?raw";
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
    <header class="header" data-aos="fade-down" data-aos-duration="800">
        <div class="container header__inner">
            <a href="https://adsgram.ai" data-aos="fade-right" data-aos-delay="100">
                <img class="header__logo" src="@/assets/icons/logo.svg" alt="AdsGram Logo" />
            </a>
            <nav class="header__nav">
                <ul>
                    <li><a href="#trust">{{ $t("menu.experience") }}</a></li>
                    <li><a href="#usdt">{{ $t("menu.how_it_works") }}</a></li>
                    <li><a href="#format">{{ $t("menu.format") }}</a></li>
                </ul>
            </nav>

            <div class="header__actions">
                <SharedLanguageSwitcher class="lang-switcher__desktop" />
                <button class="header__moderate">
                    {{ $t("button.monetize") }}
                </button>
                <div class="header__burger" @click="toggleMobileMenu">
                    <i v-html="isMobileMenuOpen ? closeIcon : burgerIcon"></i>
                </div>
            </div>
        </div>
    </header>
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
        <div class="mobile-menu__header">
            <a href="/">
                <img class="mobile-menu__logo" src="@/assets/icons/logo.svg" alt="AdsGram Logo" />
            </a>
            <div class="mobile-menu__close" @click="toggleMobileMenu">
                <i v-html="closeIcon"></i>
            </div>
        </div>

        <nav class="mobile-menu__nav">
            <ul>
                <li><a href="#trust" @click="toggleMobileMenu">{{ $t("menu.experience") }}</a></li>
                <li><a href="#usdt" @click="toggleMobileMenu">{{ $t("menu.how_it_works") }}</a></li>
                <li><a href="#format" @click="toggleMobileMenu">{{ $t("menu.format") }}</a></li>
            </ul>
        </nav>

        <div class="mobile-menu__lang">
            <SharedLanguageSwitcher @close-menu="isMobileMenuOpen = false" />

        </div>

        <div class="mobile-menu__actions">
            <button class="mobile-menu__moderate">
                {{ $t("button.monetize") }}
            </button>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use "@/assets/scss/vars" as *;

.header {
    background-color: $bg-color-1;
    color: $text-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.089);

    &__inner {
        max-width: 1220px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 72px;
        padding: 0 20px;
    }

    &__logo {
        height: 32px;
    }

    &__nav {
        margin-left: 40px;

        ul {
            display: flex;
            align-items: center;
            list-style: none;
            gap: 24px;

            li a {
                font-weight: bold;
                font-size: 16px;
                color: #181D27;
                text-decoration: none;
                transition: color 0.3s ease;

                &:hover {
                    color: $btn-color-2;
                }
            }
        }
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-left: auto;
    }

    .lang-switcher__desktop {
        display: block;
    }

    &__moderate {
        font-family: "Inter";
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
        letter-spacing: 0.5px;
        padding: 10px 18px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: #fff;
            color: $btn-color-2;
        }
    }

    &__burger {
        display: none;
        cursor: pointer;
        width: 24px;
        height: 24px;

        i {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 768px) {

        &__nav,
        &__actions .header__moderate {
            display: none;
        }

        &__burger {
            display: block;
        }

        .lang-switcher__desktop {
            display: none;
        }
    }
}

.mobile-menu {
    position: fixed;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 48vh;
    background: white;
    color: #181D27;
    transition: top 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    z-index: 999;

    &.open {
        top: 0;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__close {
        cursor: pointer;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
            width: 24px;
            height: 24px;
        }
    }

    &__nav {
        ul {
            list-style: none;
            padding: 0;

            li {
                margin-bottom: 16px;

                a {
                    font-size: 18px;
                    font-weight: bold;
                    text-decoration: none;
                    color: #181D27;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $btn-color-2;
                    }
                }
            }
        }
    }

    &__lang {
        width: 100%;
        padding: 12px 0px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: flex-start;
    }

    &__actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    &__moderate {
        font-family: "Inter";
        width: 100%;
        height: 44px;
        border-radius: 8px;
        background-color: $btn-color-2;
        color: #fff;
        border: none;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        letter-spacing: 0.5px;
        padding: 10px 18px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: #fff;
            color: $btn-color-1;
        }
    }
}
</style>
