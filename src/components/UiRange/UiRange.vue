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