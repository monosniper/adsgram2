<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="container footer__inner">
            <img class="footer__logo" src="@/assets/icons/logo.svg" alt="AdsGram Logo" />
            <span class="footer__copyright">
                © 2023 AdsGram. All rights reserved.
            </span>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "@/assets/scss/vars" as *;

.footer {
    background-color: $bg-color-2;
    color: $text-color;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
    }

    &__logo {
        height: 32px;
    }

    &__copyright {
        font-size: 16px;
    }
}
</style>
