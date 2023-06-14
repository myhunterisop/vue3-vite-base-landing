<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="currentIcon.viewBox"
        :aria-labelledby="name"
        role="presentation"
        :class="[
            'ui-icon',
            `ui-icon--${dir}`,
            {'is-animated': animated}
        ]"
        v-if="currentIcon"
    >
        <slot>
            <g v-html="currentIcon.data"></g>
        </slot>
    </svg>
</template>

<script setup>
import { onBeforeMount, computed, ref } from 'vue';

const icons = ref([])

onBeforeMount(() => {
    const modules = import.meta.glob(`./icons/*.js`)

    for (const path in modules) {
        modules[path]().then((mod) => {
            icons.value[path.replace('./icons/', '').replace('.js', '')] = mod.default
        })
    }
})

const currentIcon = computed(() => {
    return icons.value[props.name]
})

const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    width: {
        type: [Number, String],
        default: 18
    },
    height: {
        type: [Number, String],
        default: 18
    },
    iconColor: {
        type: String,
        default: 'currentColor'
    },
    dir: {
        type: String,
        default: 'up',
        validator: prop => ['down', 'up', 'right', 'left'].includes(prop)
    },
    animated: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss">
.ui-icon {
    display: inline-block;
    flex-shrink: 0;
    color: inherit;
    vertical-align: middle;
    fill: none;

    &--up {
        /* default */
        transform: rotate(0deg);
    }

    &--right {
        transform: rotate(90deg);
    }

    &--down {
        transform: rotate(180deg);
    }

    &--left {
        transform: rotate(-90deg);
    }

    &.is-animated {
        path {
            stroke: white;
            fill: transparent;
            stroke-dasharray: 100;
            stroke-dashoffset: 200;
            animation: icon-dash 6s infinite;
            animation-direction: alternate;
        }
    }

}
</style>