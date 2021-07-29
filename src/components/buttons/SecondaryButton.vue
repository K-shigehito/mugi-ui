<template>
  <a
    v-if="$attrs.href"
    :disabled="disabled"
    class="inline-flex items-center justify-center px-[12px] no-underline rounded-[4px] h-[40px]"
    :class="linkButtonClass"
    ><slot />
  </a>
  <BaseButton v-else :disabled="disabled" :class="disabledClass" @click="handleClick">
    <slot />
  </BaseButton>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'SecondaryButton',
  components: {
    BaseButton,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      defalut: false,
    },
  },
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click');
    };
    const disabledClass = computed(() =>
      props.disabled ? 'text-gray-400 bg-gray-100' : 'text-gray-900 bg-gray-200 hover:opacity-80'
    );
    const linkButtonClass = computed(() =>
      props.disabled ? 'text-gray-400 bg-gray-100' : 'text-gray-900 bg-gray-200 hover:opacity-80'
    );

    return {
      handleClick,
      disabledClass,
      linkButtonClass,
    };
  },
});
</script>
