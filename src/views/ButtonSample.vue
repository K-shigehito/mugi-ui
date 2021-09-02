<template>
  <div class="bg-gray-100 mx-auto rounded-[4px] p-[28px] text-[#333132]">
    <h2
      class="
        mb-[40px]
        pl-[8px]
        text-3xl
        font-base font-bold
        border-l-[6px] border-[#DF212C]
      "
    >
      Buttons
    </h2>

    <!-- Basic Button -->
    <div class="mb-[40px]">
      <h3 class="text-2xl mb-[8px] font-base font-bold">Basic Button</h3>

      <section class="mb-[20px]">
        <h4 class="text-lg mb-[4px]">Type</h4>
        <div class="flex gap-[8px]">
          <BasicButton @click="handleClick">Default</BasicButton>
          <BasicButton type="primary" @click="handleClick">Primary</BasicButton>
          <BasicButton type="secondary" @click="handleClick"
            >Secondary</BasicButton
          >
          <BasicButton type="warning" @click="handleClick">Warning</BasicButton>
          <BasicButton type="error" @click="handleClick">Error</BasicButton>
        </div>
      </section>

      <section class="mb-[20px]">
        <h4 class="text-lg mb-[4px]">Outlined</h4>
        <div class="flex gap-[8px]">
          <BasicButton outlined @click="handleClick">Default</BasicButton>
          <BasicButton type="primary" outlined @click="handleClick"
            >Primary</BasicButton
          >
          <BasicButton type="secondary" outlined @click="handleClick"
            >Secondary</BasicButton
          >
          <BasicButton type="warning" outlined @click="handleClick"
            >Warning</BasicButton
          >
          <BasicButton type="error" outlined @click="handleClick"
            >Error</BasicButton
          >
        </div>
      </section>

      <section class="mb-[20px]">
        <h4 class="text-lg mb-[4px]">Shadow</h4>
        <div class="flex gap-[8px]">
          <BasicButton shadow @click="handleClick">Shadow</BasicButton>
        </div>
      </section>

      <section class="mb-[20px]">
        <h4 class="text-lg mb-[4px]">Rounded</h4>
        <div class="flex gap-[8px]">
          <BasicButton rounded @click="handleClick">Rounded</BasicButton>
        </div>
      </section>

      <section class="mb-[20px]">
        <h4 class="text-lg mb-[4px]">Text</h4>
        <div class="flex gap-[8px]">
          <BasicButton text @click="handleClick">Text Default</BasicButton>
        </div>
      </section>

      <section class="mb-[20px]">
        <h4 class="text-lg mb-[4px]">Disabled</h4>
        <div class="flex gap-[8px]">
          <BasicButton :disabled="true" @click="handleClick"
            >Default</BasicButton
          >
        </div>
      </section>
    </div>

    <!-- Link Button -->
    <div class="mb-[40px]">
      <h3 class="text-2xl mb-[8px] font-base font-bold">Link Button</h3>
      <div class="mb-2">
        <LinkButton
          href="http://example.com"
          target="_blank"
          rel="noopener"
          @click="handleClick"
          >Link</LinkButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BasicButton from '../components/buttons/BasicButton.vue';
import LinkButton from '../components/buttons/LinkButton.vue';

export default defineComponent({
  name: 'ButtonSample',
  components: {
    BasicButton,
    LinkButton,
  },
  emits: ['click'],
  setup() {
    const handleClick = () => {
      alert('clicked');
    };

    return {
      handleClick,
    };
  },
});
</script>
