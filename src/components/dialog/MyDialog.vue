<template>
  <teleport v-if="visible" to="body">
    <div
      v-bind="$attrs"
      class="
        z-10
        fixed
        top-0
        left-0
        flex
        items-start
        justify-center
        w-screen
        h-screen
        overflow-y-scroll
      "
      @click.stop="clickBackDrop"
    >
      <section
        class="
          box-border
          max-w-screen-sm
          p-3
          mx-2
          my-16
          bg-white
          shadow-xl
          rounded-md
        "
        @click.stop
      >
        <!-- ヘッダー -->
        <header>
          <div class="w-full text-center">
            <slot name="title"></slot>
          </div>
        </header>
        <!-- ボディー -->
        <div class="py-3">
          <slot name="body"></slot>
        </div>
        <!-- フッター -->
        <footer>
          <slot name="footer"></slot>
        </footer>
      </section>
    </div>
    <div
      class="z-0 fixed top-0 left-0 w-[100%] h-[100%] bg-gray-400 opacity-80"
    ></div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';

export default defineComponent({
  name: 'MyDialog',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['backdropClicked'],
  setup(props, { emit }) {
    const clickBackDrop = () => {
      emit('backdropClicked');
    };

    watchEffect((onInvalidte) => {
      if (!props.visible) return;

      const overflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';

      onInvalidte(() => {
        document.documentElement.style.overflow = overflow;
      });
    });

    return {
      clickBackDrop,
    };
  },
});
</script>
