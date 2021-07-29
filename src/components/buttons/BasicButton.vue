<template>
  <BaseButton :disabled="disabled" :class="disabledClass" @click="handleClick">
    <slot />
  </BaseButton>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'BasicButton',
  components: {
    BaseButton,
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
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
      props.disabled ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
    );

    return {
      handleClick,
      disabledClass,
    };
  },
});
</script>
