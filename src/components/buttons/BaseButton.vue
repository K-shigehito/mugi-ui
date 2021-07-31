<template>
  <button
    class="px-[12px] rounded-[4px] h-[40px] font-base tracking-[0.01em]"
    :class="[typeClass, outlineClass, shadowClass, roundedClass, textClass, textColorClass]"
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
    shadow: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    text: {
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

    // タイプ
    const typeClass = computed(() => {
      if (props.type === 'default') {
        return 'bg-[#93918F] border-0 border-[#333] text-[#333]';
      } else if (props.type === 'primary') {
        return 'bg-[#005392] border-0 border-[#005392] text-[#005392]';
      } else if (props.type === 'secondary') {
        return 'bg-[#009AC5] border-0 border-[#009AC5] text-[#009AC5]';
      } else if (props.type === 'warning') {
        return 'bg-[#FBC600] border-0 border-[#FBC600] text-[#FBC600]';
      } else if (props.type === 'error') {
        return 'bg-[#DF212C] border-0 border-[#DF212C] text-[#DF212C]';
      } else {
        return '';
      }
    });

    // アウトライン
    const outlineClass = computed(() =>
      props.outlined ? 'box-border border-[1px] bg-opacity-0 hover:bg-opacity-10' : ''
    );

    // シャドウ
    const shadowClass = computed(() => (props.shadow ? 'shadow-md' : ''));

    // ラウンド
    const roundedClass = computed(() => (props.rounded ? 'rounded-full px-[16px]' : ''));

    // テキスト
    const textClass = computed(() => (props.text ? 'bg-opacity-0 hover:bg-opacity-10' : ''));

    // テキストカラー
    const textColorClass = computed(() =>
      !textClass.value && !outlineClass.value ? 'text-[#FFF]' : ''
    );

    return {
      handleClick,
      typeClass,
      outlineClass,
      shadowClass,
      roundedClass,
      textClass,
      textColorClass,
    };
  },
});
</script>
