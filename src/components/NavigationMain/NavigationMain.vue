<template>
    <nav class="navigation-main">
        <a href="#business" class="navigation-main__link">Бизнес</a>
        <a href="#about" class="navigation-main__link">О нас</a>
        <a href="#prices" class="navigation-main__link">Цены</a>
        <a href="#order" class="navigation-main__link">Оформить заказ</a>
    </nav>
</template>

<script setup>
</script>

<style lang="scss">
.navigation-main {
    &__link {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.2;
        color: var(--text-color);
        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: 40px;
        text-decoration: none;
        transition: color var(--transition);
        text-transform: uppercase;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: #43ABF0;
        }
    }
}
</style>