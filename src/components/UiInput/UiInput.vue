<template>
    <div class="ui-input">
        <input
            class="ui-input__input"
            :name="name"
            :placeholder="placeholder"
            :type="type"
            v-model="value"
            @change="onChange"
            @input="onInput"
        />
        <span class="ui-input__error" v-html="error" v-if="error"></span>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const error = ref('')
const value = ref('')

const emit = defineEmits([
    'change',
    'input'
])

const props = defineProps ({
    name: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        validator: prop => ['text', 'email'].includes(prop),
        default: 'text'
    },
    required: {
        type: Boolean,
        default: false
    }
})

const onChange = e => {
    emit('change', e.target.value)
    validate()
}

const onInput = e => {
    emit('input', e.target.value)
    validate()
}

const validateEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}

const validate = () => {
    if (!value.value && props.required) {
        error.value = 'Обязательное поле'
        return
    }

    if (props.type === 'email' && !validateEmail(value.value)) {
        error.value = 'Введите корректный email'
        return
    }

    error.value = ''

    return
}

defineExpose({
    validate
})


</script>

<style lang="scss">
.ui-input {
    position: relative;

    &__input {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-size: 18px;
        line-height: 1.2;
        padding: 12px 10px;
        border: 1px solid var(--white);
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.85);
    
        &::placeholder {
            color: #272733;
            opacity: 1;
        }
    }

    &__error {
        position: absolute;
        font-weight: 400;
        font-size: 12px;
        color: rgb(219, 104, 104);
        width: 100%;
        transform: translate(-50%, 20%);
    }
}

</style>