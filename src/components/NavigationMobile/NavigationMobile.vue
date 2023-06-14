<template>
    <div class="navigation-mobile">
        <div class="navigation-mobile__burger" @click="toggleDropdown">
            <div :class="{'line': true, 'line--1': true, 'open': isOpen}"></div>
            <div :class="{'line': true, 'line--2': true, 'open': isOpen}"></div>
            <div :class="{'line': true, 'line--3': true, 'open': isOpen}"></div>
        </div>
        <div v-if="isOpen" class="navigation-mobile__dropdown">
            <nav>
            <a href="#business" class="navigation-mobile__link">Бизнес</a>
            <a href="#about" class="navigation-mobile__link">О нас</a>
            <a href="#prices" class="navigation-mobile__link">Цены</a>
            <a href="#order" class="navigation-mobile__link">Оформить заказ</a>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.navigation-mobile {
    &__burger {
      width: 30px;
      height: 22px;
      cursor: pointer;
      position: relative;
      overflow: visible;
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgb(16, 16, 29);
        padding: 10px;
        z-index: 2;
        border-top: 1px solid var(--brand-color);

        @media screen and (max-width: $breakpoint-v-tablet) {
            padding-right: var(--token-grids-v-tablet-offset);
            padding-left: var(--token-grids-v-tablet-offset);
        }
        
        @media screen and (max-width: $breakpoint-mobile) {
            padding-right: var(--token-grids-mobile-offset);
            padding-left: var(--token-grids-mobile-offset);
        }
    }

    &__link {
        display: block;
        padding: 10px 0;
        color: var(--text-color );
        text-decoration: none;
        transition: color var(--transition);

        &:hover {
            color: var(--brand-color);
        }
    }
}

.line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
}

.line--1 {
    top: 0;
    transform-origin: top left;
}

.line--2 {
    top: 10px;
    transform-origin: center;
}

.line--3 {
    bottom: 0;
    transform-origin: bottom left;
}

.open.line--1 {
    transform: rotate(45deg);
}

.open.line--2 {
    opacity: 0;
}

.open.line--3 {
    transform: rotate(-45deg);
}

</style>