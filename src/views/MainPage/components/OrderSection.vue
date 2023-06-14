<template>
    <div class="order">
        <div class="container">
            <h2 class="order__title u-uppercase js-animation">Оформление <span class="text-brand-color">Заказа</span></h2>
            <p class="order__description js-animation">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
            <div class="order__scheme">
                <div class="scheme">
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme-item__icon">
                                <ui-icon animated width="55" height="55" name="lens" />
                            </div>
                            <div class="scheme-item__description">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme-item__icon">
                                <ui-icon animated width="55" height="55" name="percent" />
                            </div>
                            <div class="scheme-item__description">Сonsecteturadipiscing elit</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme-item__icon">
                                <ui-icon animated width="55" height="55" name="doc" />
                            </div>
                            <div class="scheme-item__description">Sed do eiusmod tempor</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme-item__icon">
                                <ui-icon animated width="55" height="55" name="mail" />
                            </div>
                            <div class="scheme-item__description">Esse cillum dolore eu fugiat</div>
                        </div>
                    </div>
                    <div class="scheme__col">
                        <div class="scheme-item">
                            <div class="scheme-item__icon">
                                <ui-icon animated width="55" height="55" name="bucks" />
                            </div>
                            <div class="scheme-item__description">Excepteur sint occaecat cupidatat non proident</div>
                        </div>
                    </div>
                </div>
            </div>
            <main-page-form class="order__form" />
        </div>
    </div>
</template>

<script setup>
import MainPageForm from './MainPageForm.vue'
import UiIcon from '@/components/UiIcon/UiIcon.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { onMounted, nextTick } from 'vue';

onMounted(() => {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener('scroll', e => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })

    nextTick(() => {
        animationOrderTitle()
        animationSchemeIcons()
    })
})

const animationOrderTitle = () => {
    const list = gsap.utils.toArray('.js-animation');

    list.forEach((item, index) => {
        gsap.fromTo(item,
            {
                opacity: 0,
                x: index % 2 ? 70 : -70
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    start: 'top bottom-=100',
                    end: 'top center',
                    trigger: item,
                    scrub: true,
                }
            }
        );
    })
}

const animationSchemeIcons = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.scheme',
            start: 'top center+=150',
            end: 'top center-=100',
            scrub: true
        }
    })
    tl.from('.scheme-item__icon', {
        opacity: 0
    })
    tl.from('.scheme__col', {
        '--opacityVal': 0
    })
    tl.from('.scheme-item__description', {
        opacity: 0
    })
}

</script>

<style lang="scss">
    .order {
    padding-top: 120px;
    padding-bottom: 150px;
    background-color: #272733;
    text-align: center;

    @media (max-width: $breakpoint-v-tablet) {
        padding-top: 60px;
        padding-bottom: 75px;
    }
    
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
    --opacityVal: 1;

    @media (max-width: $breakpoint-v-tablet) {
        --icon-size: 75px;
    }
}

%decor {
    position: absolute;
    height: 6px;
    display: block;
    background-repeat: space no-repeat;
    background-position: center;
    background-size: 26px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='3' style='fill: %23c4c4c4'/%3E%3C/svg%3E%0A");
    top: calc(var(--icon-size) / 2);
    transform: translateY(-50%);
    z-index: 0;
    opacity: var(--opacityVal);
}

.scheme {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -56px;

    @media (max-width: $breakpoint-v-tablet) {
        flex-wrap: wrap;
    }

    @media (max-width: $breakpoint-mobile) {
        margin-top: -32px;
    }

    &__col {
        margin-top: 56px;
        flex-grow: 1;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        width: 20%;
        display: flex;
        justify-content: center;

        @media (max-width: $breakpoint-v-tablet) {
            width: 33.3333%;
        }

        @media (max-width: $breakpoint-mobile) {
            width: 100%;
            margin-top: 32px;
        }

        &:after {
            content: '';
            width: calc(100% - var(--icon-size));
            top: calc(var(--icon-size) / 2);
            left: calc(50% + (var(--icon-size) / 2));
            @extend %decor;

            @media (max-width: $breakpoint-mobile) {
                display: none;
            }
        }

        &:nth-child(3n+4) {
            &:before {
                content: '';
                display: block;
                left: calc(var(--icon-size) * -1);
                width: calc(50% + var(--icon-size) / 2);
                @extend %decor;

                @media (min-width: 1024px) {
                    display: none;
                }

                @media (max-width: $breakpoint-mobile) {
                    display: none;
                }
            }
        }

        &:last-child:after {
            display: none;
        }
    }

    &-item {
        max-width: calc(var(--icon-size) * 2);

        @media (max-width: $breakpoint-mobile) {
            max-width: 100%;
        }
    }

    &-item__description {
        margin-top: 20px;
        font-size: 16px;
    }

    &-item__icon {
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

        @media (max-width: $breakpoint-v-tablet) {
            .ui-icon {
                width: 75%;
            }
        }
    }
}

</style>