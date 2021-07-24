<template>
  <div
    class="
      relative
      inline-block
      w-full
      overflow-hidden
      border-2 border-solid
      rounded-md
      text-gray-80
      h-14
    "
    :class="`${focusedClass} ${errorClass} ${disabledLabelClass}`"
  >
    <label class="relative flex items-center h-hull px-2 cursor-text">
      <span class="absolute text-gray-400 select-none" :class="`${smallLabelClass}`">
        {{ label }}
      </span>
      <input
        class="w-full mt-3 placeholder-gray-400 focus:outline-none"
        :class="{ 'opacity-100': isFocus || value }"
        :type="type"
        :value="value"
        :placeholder="isFocus ? placeholder : ''"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="listeners"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from 'vue';

export default defineComponent({
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'text' | 'number' | 'password' | 'email' | 'tel' | 'date'>,
      default: 'text',
    },

    isError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
  },
  emits: {
    input: (targetValue: string) => true,
    change: (targetValue: string) => true,
    focus: (event: Event) => true,
    blur: (event: Event) => true,
    'update:value': (modelValu: string) => true,
  },
  setup(props, { emit }) {
    const isFocus = ref(false);

    const handleInput = ({ target }: { target: HTMLInputElement }) => {
      emit('input', target.value);
      emit('update:value', target.value);
    };
    const handleChange = ({ target }: { target: HTMLInputElement }) => {
      emit('change', target.value);
      emit('update:value', target.value);
    };
    const handleFocus = (event: Event) => {
      isFocus.value = true;
      emit('focus', event);
    };
    const handleBlur = (event: Event) => {
      isFocus.value = false;
      emit('blur', event);
    };

    const focusedClass = computed(() =>
      isFocus.value ? 'border-blue-700 ring-blue-100 transition duration-100' : 'border-gray-300'
    );
    const errorClass = computed(() => (props.isError ? 'border-red-500' : ''));
    const disabledLabelClass = computed(() =>
      props.disabled && !props.value ? 'bg-gray-200' : ''
    );
    const smallLabelClass = computed(() =>
      isFocus.value || props.value || props.type === 'date' // dateは最初から小さく表示
        ? 'transition origin-top-left transform scale-75 -translate-y-3'
        : ''
    );

    const listeners = computed(() => ({
      input: handleInput,
      change: handleChange,
      focus: handleFocus,
      blur: handleBlur,
    }));

    return {
      isFocus,
      focusedClass,
      errorClass,
      disabledLabelClass,
      smallLabelClass,
      listeners,
    };
  },
});
</script>
