<template>
  <ButtonSample />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonSample from './components/buttons/ButtonSample.vue';

export default defineComponent({
  name: 'App',
  components: {
    ButtonSample,
  },
});
</script>
