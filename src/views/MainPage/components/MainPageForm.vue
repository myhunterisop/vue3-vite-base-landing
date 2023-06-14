<template>
    <form class="form" @submit.prevent="send">
        <div class="form__wrapper">
            <div class="form__item">
                <ui-select
                    placeholder="Выберите тип системы"
                    :options="[
                        {
                            'id': 1,
                            'selected': false,
                            'text': 'Sed ut perspiciatis'
                        },
                        {
                            'id': 2,
                            'selected': false,
                            'text': 'Nemo enim ipsam'
                        },
                        {
                            'id': 3,
                            'selected': false,
                            'text': 'Et harum quidem'
                        },
                        {
                            'id': 4,
                            'selected': false,
                            'text': 'Nemo enim ipsam'
                        },
                        {
                            'id': 5,
                            'selected': false,
                            'text': 'Et harum quidem'
                        }
                    ]"
                />
            </div>
            <div class="form__item">
                <ui-input
                    name="email"
                    type="email"
                    placeholder="Ваш e-mail *"
                    required
                />
            </div>
            <div class="form__item">
                <ui-input
                    name="name"
                    placeholder="Ваше имя *"
                    required
                />
            </div>
            <div class="form__item form__item--range">
                <ui-range
                    name="range"
                    min="0"
                    max="100"
                    title="Sed ut perspiciatis, unde omnis iste natus"
                />
            </div>
            <div class="form__item">
                <ui-input-file name="file" />
            </div>
        </div>
        <button type="submit" class="form__submit button button--accent">Отправить</button>
    </form>
</template>

<script setup>
import UiSelect from '@/components/UiSelect/UiSelect.vue'
import UiInput from '@/components/UiInput/UiInput.vue'
import UiRange from '@/components/UiRange/UiRange.vue'
import UiInputFile from '@/components/UiInputFile/UiInputFile.vue'
import {throttle} from 'throttle-debounce'

const send = throttle(500, function () {
    fetch(`/api/test/${window.location.search}`)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                console.log('send ok');
            } else {
                console.log('send error');
            }
        })
        .catch(error => {
            console.log(error);
        })
})
</script>

<style lang="scss">
.form {
    &__wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -30px;
        margin-left: -15px;
        margin-right: -15px;

        @media (max-width: $breakpoint-mobile) {
            justify-content: flex-start;
        }
    }

    &__item {
        margin-top: 30px;
        width: 33.33333%;
        padding-left: 15px;
        padding-right: 15px;
        color: var(--text-color-black);
        flex-grow: 1;
        max-width: 50%;

        @media (max-width: $breakpoint-mobile) {
            width: 100%;
            max-width: 100%;
        }

        &--range {
            max-width: 66.66666%;
            width: 66.66666%;
        
            @media (max-width: $breakpoint-mobile) {
                max-width: 100%;
                width: 100%;
            }
        }
    }

    &__submit {
        margin-top: 40px;
        max-width: 370px;
        width: 100%;
        padding-top: 17px !important;
        padding-bottom: 17px !important;

        @media (max-width: $breakpoint-mobile) {
            width: 100%;
            max-width: 100%;
        }
    }
}
</style>