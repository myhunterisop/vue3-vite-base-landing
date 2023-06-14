<template>
    <div class="about">
        <div class="about__bg" />
        <div class="container">
            <div class="about__wrapper">
                <h1 class="text-black u-uppercase">
                    <span class="text-brand-color">Lorem ipsum</span> dolor sit amet consectetur <span class="text-brand-color">adipiscing</span>
                </h1>
                <div class="about__description">
                    <p class="u-bold">At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
                    <ul class="about__list">
                        <li>Totam rem aperiam eaque ipsa</li>
                        <li>Sit voluptatem accusantium doloremque laudantium</li>
                        <li>Sed ut perspiciatis, unde omnis iste natus error</li>
                    </ul>
                </div>
                <div class="about__buttons buttons">
                    <button class="button button--accent buttons__item" onclick="window.location.href='#order'">Заказать</button>
                    <button class="button buttons__item">Подробнее</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
<style lang="scss">
.about {
    padding-top: 202px;
    padding-bottom: 202px;
    position: relative;
    overflow: hidden;

    @media (max-width: $breakpoint-v-tablet) {
        padding-top: 150px;
        padding-bottom: 100px;
        background-position: 56% center;
    }

    @media (max-width: $breakpoint-v-tablet) {
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: linear-gradient(270deg, rgba(0, 0, 0, 0.3) 0%, rgb(254, 254, 254) 70%);
            position: absolute;
            opacity: 0.7;
            top: 0;
            left: 0;
        }
    }

    &__bg {
        background-image: url(/images/hero.jpg);
        background-position: center;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
        will-change: transform;
    }
    
    &__wrapper {
        max-width: 780px;
        z-index: 2;
        position: relative;
        transform: translate3d(0, calc(var(--scrollTop) / 5.6), 0);
        will-change: transform;

        @media (max-width: $breakpoint-v-tablet) {
            max-width: 70%;
        }

        @media (max-width: $breakpoint-mobile) {
            max-width: 100%;
        }
    }

    &__description {
        margin-top: 80px;
        color: var(--text-color-black);

        @media (max-width: $breakpoint-v-tablet) {
            margin-top: 40px;
        }
    }

    &__buttons {
        margin-top: 80px;

        @media (max-width: $breakpoint-v-tablet) {
            margin-top: 40px;
        }

        @media (max-width: $breakpoint-mobile) {
            display: flex;
            flex-direction: column;
        }
    }

    &__list {
        margin-top: 10px;
    }
}

.buttons__item {
    width: 183px;

    @media (max-width: 400px) {
        width: 100%;
    }

    & + & {
        margin-left: 30px;

        @media (max-width: $breakpoint-mobile) {
            margin-left: 0;
            margin-top: 16px;
        }
    }
}
</style>