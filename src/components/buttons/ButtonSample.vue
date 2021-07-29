<template>
  <div>
    <h2 class="mb-[40px] text-3xl font-bold">Buttons</h2>

    <!-- Basic Button -->
    <div class="mb-[40px]">
      <h3 class="text-2xl font-bold mb-[8px]">Basic Button</h3>

      <section class="mb-[12px]">
        <h4 class="text-lg mb-[4px]">type</h4>
        <div class="flex gap-[8px]">
          <BasicButton @click="handleClick">Default</BasicButton>
          <BasicButton type="primary" @click="handleClick">Primary</BasicButton>
          <BasicButton type="secondary" @click="handleClick">Secondary</BasicButton>
          <BasicButton type="warning" @click="handleClick">Warning</BasicButton>
          <BasicButton type="error" @click="handleClick">Error</BasicButton>
        </div>
      </section>

      <section class="mb-[12px]">
        <h4 class="text-lg mb-[4px]">outline</h4>
        <div class="flex gap-[8px]">
          <BasicButton outlined @click="handleClick">Default</BasicButton>
          <BasicButton type="primary" outlined @click="handleClick">Primary</BasicButton>
          <BasicButton type="secondary" outlined @click="handleClick">Secondary</BasicButton>
          <BasicButton type="warning" outlined @click="handleClick">Warning</BasicButton>
          <BasicButton type="error" outlined @click="handleClick">Error</BasicButton>
        </div>
      </section>

      <section class="mb-[12px]">
        <h4 class="text-lg mb-[4px]">Disabled</h4>
        <div class="flex gap-[8px] mb-[8px]">
          <BasicButton :disabled="true" @click="handleClick">Default</BasicButton>
          <BasicButton :disabled="true" type="primary" @click="handleClick">Primary</BasicButton>
          <BasicButton :disabled="true" type="secondary" @click="handleClick"
            >Secondary</BasicButton
          >
          <BasicButton :disabled="true" type="warning" @click="handleClick">Warning</BasicButton>
          <BasicButton :disabled="true" type="error" @click="handleClick">Error</BasicButton>
        </div>
        <div class="flex gap-[8px]">
          <BasicButton :disabled="true" outlined @click="handleClick">Default</BasicButton>
          <BasicButton :disabled="true" outlined type="primary" @click="handleClick"
            >Primary</BasicButton
          >
          <BasicButton :disabled="true" outlined type="secondary" @click="handleClick"
            >Secondary</BasicButton
          >
          <BasicButton :disabled="true" outlined type="warning" @click="handleClick"
            >Warning</BasicButton
          >
          <BasicButton :disabled="true" outlined type="error" @click="handleClick"
            >Error</BasicButton
          >
        </div>
      </section>
    </div>

    <h3 class="text-2xl font-bold mb-[8px]">Link Button</h3>
    <div class="mb-2">
      <SecondaryButton href="http://example.com" target="_blank" rel="noopener" @click="handleClick"
        >Secondary Link</SecondaryButton
      >
    </div>
    <div class="mb-2">
      <SecondaryButton
        :disabled="true"
        href="http://example.com"
        target="_blank"
        rer="noopener"
        @click="handleClick"
        >Secondary Link Disabled</SecondaryButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicButton from './BasicButton.vue';
import SecondaryButton from './SecondaryButton.vue';

export default defineComponent({
  name: 'ButtonSample',
  components: {
    BasicButton,
    SecondaryButton,
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
