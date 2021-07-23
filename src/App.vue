<template>
  <BaseButton>Base</BaseButton>
  <PrimaryButton>Primary</PrimaryButton>
  <SecondaryButton>Secondary</SecondaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './components/buttons/BaseButton.vue';
import PrimaryButton from './components/buttons/PrimaryButton.vue';
import SecondaryButton from './components/buttons/SecondaryButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    BaseButton,
    PrimaryButton,
    SecondaryButton,
  },
});
</script>
