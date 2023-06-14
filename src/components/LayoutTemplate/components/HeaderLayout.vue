<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <a href="/" class="header__logo">
                    <img src="/images/logo.svg" />
                </a>
                <navigation-main class="header__navigation"/>
                <navigation-mobile class="header__navigation header__navigation--mobile"/>
            </div>
        </div>
    </header>
</template>
<script setup>
import NavigationMain from '@/components/NavigationMain/NavigationMain.vue'
import NavigationMobile from '@/components/NavigationMobile/NavigationMobile.vue'

</script>
<style lang="scss">
.header {
    width: 100%;
    position: sticky;
    z-index: 3;
    top: 0;
    left: 0;
    background: rgba(16, 16, 29, 0.95);

    &__wrapper {
        display: flex;
        align-items: center;
        padding: 36px 0;
        justify-content: space-between;
    }

    &__logo {
        transition: filter var(--transition);

        @media (max-width: $breakpoint-v-tablet) {
            img {
                max-width: 200px;
            }
        }

        &:hover {
            filter: drop-shadow(0px 0px 5px var(--brand-color));
        }
    }

    &__navigation {
        margin-left: 24px;

        @media (max-width: $breakpoint-v-tablet) {
            display: none;
        }
    }

    &__navigation--mobile {
        display: none;

        @media (max-width: $breakpoint-v-tablet) {
            display: flex;
        }
    }

    &.is-open {
        background: rgb(16, 16, 29);
    }
}
</style>