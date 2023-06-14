<template>
    <div class="range">
        <div class="range__header">
            <p class="range__title" v-html="title" />
            <output id="outputId" class="range__value" />
        </div>
        <input
            class="range__input"
            :name="name"
            type="range"
            value="0"
            :min="min"
            :max="max"
            oninput="outputId.value = inputId.value + ' %'"
            id="inputId"
        />
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    min: {
        type: String,
        default: "0",
        required: true
    },
    max: {
        type: String,
        default: "0",
        required: true
    },
    name: {
        type: String,
        default: 'range'
    }
})
</script>

<style lang="scss">
.range {
    width: 100%;
    
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    &__input {
        width: 100%;
        appearance: none;
        background: transparent;
        margin: 19px 0;

        &::-moz-focus-outer {
            border: 0;
        }

        &::-webkit-slider-runnable-track {
            cursor: default;
            height: 6px;
            transition: all var(--transition);
            width: 100%;
            border: 1px solid var(--white);
            background: rgba(255, 255, 255, 0.7);
            border-radius: 10px;
        }

        &::-webkit-slider-thumb {
            background: #42A9ED;
            border: 3px solid #286690;
            border-radius: 50%;
            box-sizing: border-box;
            cursor: default;
            height: 24px;
            width: 24px;
            -webkit-appearance: none;
            margin-top: -10px;
        }

        &:disabled {
            &::-webkit-slider-thumb,
            &::-webkit-slider-runnable-track {
                cursor: not-allowed;
            }
        }
    }

    &__title,
    output {
        font-size: 18px;
        color: var(--text-color);
    }

    output {
        font-weight: 600;
        padding-left: 20px;
        flex-shrink: 0;
    }
}
</style>