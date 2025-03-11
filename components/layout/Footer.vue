<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <a href="https://adsgram.ai">
                <img class="footer__logo" src="@/assets/icons/logo.svg" alt="AdsGram Logo" />
            </a>
            <span class="footer__copyright">
                {{ $t("footer.copyright") }}
            </span>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "@/assets/scss/vars" as *;

.footer {
    background-color: $bg-color-2;
    color: $text-color;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        padding: 0 112px;
        margin: 0 auto;
        max-width: 1440px;
    }

    &__logo {
        height: 32px;
    }

    &__copyright {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        &__container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px;
            padding: 16px;
            height: auto;
        }

        &__logo {
            order: -1;
        }

        &__copyright {
            text-align: center;
            font-size: 14px;
        }
    }

}
</style>
