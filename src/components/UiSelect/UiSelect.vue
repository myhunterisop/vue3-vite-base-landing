<template>
    <div
        v-if="options.length"
        :class="[
            'ui-select',
            {'is-opened': isDropdownVisible}
        ]"
        ref="select"
    >
        <div class="ui-select__container" @click="toggleDropdown">
            <span class="ui-select__option ui-select__option--selected">{{ selectedOption ? selectedOption.text : placeholder }}</span>
            <ui-icon
                class="ui-select__arrow"
                width="55"
                height="55"
                name="arrow"
            />
        </div>
        <div class="ui-select__dropdown" v-if="isDropdownVisible">
            <ul class="ui-select__options">
                <li
                    class="ui-select__option"
                    v-for="(item, index) in options"
                    :key="index"
                    @click="selectOption(item)"
                >
                    <span v-html="item.text" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import UiIcon from '@/components/UiIcon/UiIcon.vue'

defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    options: {
        type: Array,
        default: () => []
    },
    required: {
        type: Boolean,
        default: false
    }
})

const isDropdownVisible = ref(false)
const selectedOption = ref(null)
const select = ref(null)

const selectOption = (option) => {
    selectedOption.value = option;
    isDropdownVisible.value = false;
};

const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value;
};

const clickOutside = (e) => {
    if ((!select.value.contains(e.target) && select.value !== e.target)) {
        isDropdownVisible.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', clickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', clickOutside)
})

</script>

<style lang="scss">
.ui-select {
    $parent: &;
    --border-radius: 3px;

    position: relative;
    color: var(--text-color);
    user-select: none;

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--white);
        background: rgba(255, 255, 255, 0.85);
        color: var(--text-color-black);
        transition: all var(--transition);
        font-size: 18px;
        cursor: pointer;
        border-radius: var(--border-radius);

        &:hover,
        &:focus {
            background: #3D4050;
            color: var(--text-color);

            path {
                fill: var(--white) !important;
            }
        }
    }

    &__arrow {
        width: 20px;
        height: 20px;
        margin: 10px;
        transition: transform var(--transition);

        path {
            fill: var(--black);
        }
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        width: 100%;
        background: rgba(39, 39, 51, 0.98);
        border: 1px solid #3D4050;
        padding: 6px 4px;
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        z-index: 2;
    }

    &__options {
        max-height: 180px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 7px;
            border-radius: var(--border-radius);
            background-color: #3D4050;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: var(--border-radius);
            background-color: var(--brand-color);
        }
    }

    &__option {
        display: block;
        padding: 12px 10px;
        transition: color var(--transition);
        text-align: left;
        cursor: pointer;
        font-size: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        & + & {
            margin-top: 0;
        }

        &:before {
            display: none;
        }

        &:hover {
            color: #42A9ED;
        }

        &--selected {
            transition: none;

            &:hover {
                color: inherit;
            }
        }
    }

    &.is-opened {
        #{$parent}__container {
            color: var(--text-color);
            background: rgba(61, 64, 80, 0.85);
            border-color: rgba(61, 64, 80, 0.85);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            path {
                fill: var(--white) !important;
            }
        }

        #{$parent}__arrow {
            transform: rotate(180deg);
        }
    }
}
</style>