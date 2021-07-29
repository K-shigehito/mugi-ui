<template>
  <button
    class="px-[12px] rounded-[4px] h-[40px]"
    :class="[typeClass, outlineClass]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    outlined: {
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

    // タイプクラス
    const typeClass = computed(() => {
      if (props.type === 'default') {
        return 'bg-[#93918F] border-0 border-[#93918F] text-[#93918F]';
      } else if (props.type === 'primary') {
        return 'bg-[#005392] border-0 border-[#005392] text-[#005392]';
      } else if (props.type === 'secondary') {
        return 'bg-[#009856] border-0 border-[#009856] text-[#009856]';
      } else if (props.type === 'warning') {
        return 'bg-[#FBC600] border-0 border-[#FBC600] text-[#FBC600]';
      } else if (props.type === 'error') {
        return 'bg-[#DF212C] border-0 border-[#DF212C] text-[#DF212C]';
      } else {
        return '';
      }
    });

    // アウトラインクラス
    const outlineClass = computed(() => {
      if (props.outlined) {
        return 'box-border !border-[1px] bg-opacity-10 text-transparent';
      } else {
        return '!text-[#FFFFFF]';
      }
    });

    return {
      handleClick,
      typeClass,
      outlineClass,
    };
  },
});
</script>
