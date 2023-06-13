<script setup>
import LayoutTemplate from '@/components/LayoutTemplate/LayoutTemplate.vue'
import MainPageForm from '@/views/MainPageForm/MainPageForm.vue'
</script>

<template>
    <layout-template>
        <section class="about">
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
        </section>
        <section class="order" id="order">
            <div class="container">
                <h2 class="u-uppercase">Оформление <span class="text-brand-color">Заказа</span></h2>
                <p class="order__description">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                <div class="order__scheme scheme">
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme__icon">
                                <img src="/icons/lens.svg" />
                            </div>
                            <div class="scheme__item-description">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme__icon">
                                <img src="/icons/percent.svg" />
                            </div>
                            <div class="scheme__item-description">Сonsecteturadipiscing elit</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme__icon">
                                <img src="/icons/doc.svg" />
                            </div>
                            <div class="scheme__item-description">Sed do eiusmod tempor</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme__icon">
                                <img src="/icons/mail.svg" />
                            </div>
                            <div class="scheme__item-description">Esse cillum dolore eu fugiat</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme__icon">
                                <img src="/icons/bucks.svg" />
                            </div>
                            <div class="scheme__item-description">Excepteur sint occaecat cupidatat non proident</div>
                        </div>
                    </div>
                </div>
                <main-page-form class="order__form" />
            </div>
        </section>
    </layout-template>
</template>

<style lang="scss">
.about {
    padding-top: 202px;
    padding-bottom: 202px;
    background-position: center;
    background-size: cover;
    background-image: url(/images/hero.jpg);
    
    &__wrapper {
        max-width: 780px;
    }

    &__description {
        margin-top: 80px;
        color: var(--text-color-black);
    }

    &__buttons {
        margin-top: 80px;
    }

    &__list {
        margin-top: 10px;
    }
}

.buttons__item {
    & + & {
        margin-left: 30px;
    }
}

.order {
    padding-top: 120px;
    padding-bottom: 150px;
    background-color: #272733;
    text-align: center;
    
    &__description {
        margin-top: 30px;
        font-size: 18px;
        color: #BBBBBB;
    }

    &__scheme,
    &__form {
        margin-top: 80px;
    }
}

.scheme {
    --icon-size: 100px;
}

.scheme {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;

    &__col {
        flex-grow: 1;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        width: 20%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;

        &:before {
            content: '';
            position: absolute;
            height: 6px;
            width: calc(100% - var(--icon-size));
            display: block;
            background-repeat: space no-repeat;
            background-position: center;
            background-size: 26px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='3' style='fill: %23c4c4c4'/%3E%3C/svg%3E%0A");
            top: calc(var(--icon-size) / 2);
            transform: translateY(-50%);
            z-index: 2;
            left: calc(50% + (var(--icon-size) / 2));
        }

        &:last-child:before {
            display: none;
        }
    }

    &__item-description {
        margin-top: 20px;
        font-size: 16px;
    }

    &__icon {
        display: flex;
        position: relative;
        z-index: 1;
        justify-content: center;
        align-items: center;
        width: var(--icon-size);
        height: var(--icon-size);
        background-color: var(--brand-color);
        border: 5px solid #286690;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
}

.form-range {
    max-width: 66.66666%;
    width: 66.66666%;
}

</style>
