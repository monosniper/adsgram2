<script lang="ts" setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import {useRoute, useRouter} from "nuxt/app";

import arrowIcon from "@/assets/icons/arrow.svg?raw";
import checkIcon from "@/assets/icons/check.svg?raw";

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const locale = ref(route.params.locale || "ru");

const languages = [
  {code: "ru", label: "lang.russian"},
  {code: "en", label: "lang.english"},
  {code: "zh", label: "lang.chinese"}
];

const emit = defineEmits(["close-menu"]);

const switchLocale = (newLocale: string) => {
  isOpen.value = false;
  emit("close-menu");

  if (newLocale === "ru") {
    router.push("/");
  } else {
    router.push(`/${newLocale}`);
  }

  locale.value = newLocale;
};

watch(() => route.params.locale, (newLocale) => {
  locale.value = newLocale || "ru";
});

const closeDropdown = (event: Event) => {
  if (!(event.target as HTMLElement).closest(".lang-switcher")) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", closeDropdown));
onUnmounted(() => document.removeEventListener("click", closeDropdown));
</script>

<template>
  <div class="lang-switcher">
    <div class="lang-switcher__desktop">
      <div class="lang-switcher__selected" @click.stop="isOpen = !isOpen">
        <span>{{ $t(languages.find(lang => lang.code === locale)?.label || "lang.russian") }}</span>
        <i :class="{ open: isOpen }" class="lang-switcher__icon" v-html="arrowIcon"></i>
      </div>
      <ul v-if="isOpen" class="lang-switcher__dropdown">
        <li v-for="lang in languages" :key="lang.code" class="lang-switcher__option"
            @click.stop="switchLocale(lang.code)">
          <span class="lang-switcher__label">{{ $t(lang.label) }}</span>
          <i v-if="locale === lang.code" class="lang-switcher__check" v-html="checkIcon"></i>
        </li>
      </ul>
    </div>
    <div class="lang-switcher__mobile">
      <button v-for="lang in languages" :key="lang.code" :class="{ active: locale === lang.code }"
              class="lang-switcher__button" @click="switchLocale(lang.code)">
        {{ $t(lang.label) }}
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/vars" as *;

.lang-switcher {
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: $text-color;

  &__desktop {
    display: block;
  }

  &__selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    padding: 10px 14px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  &__icon {
    margin-left: 8px;
    transition: transform 0.3s ease;
    transform: rotate(180deg);
  }

  &__icon.open {
    transform: rotate(0deg);
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: -126px;
    background: white;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-top: 6px;
    width: 248px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 0;
  }

  &__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #f0f0f0;
    }
  }

  &__label {
    flex-grow: 1;
  }

  &__check {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__mobile {
    display: none;
  }

  @media (max-width: 768px) {
    &__desktop {
      display: none;
    }

    &__mobile {
      display: flex;
      background: #f7f7f7;
      border-radius: 12px;
      gap: 6px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); // Добавляем тень
    }


    &__button {
      padding: 6px 12px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: #777;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: white;
        color: $btn-color-2;
        font-weight: bold;
      }
    }
  }
}
</style>
