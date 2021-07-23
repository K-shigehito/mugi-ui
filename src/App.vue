<template>
  <div class="m-4">
    <ButtonSample />
    <DialogSample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonSample from './components/buttons/ButtonSample.vue';
import DialogSample from './components/modals/DialogSample.vue';

export default defineComponent({
  name: 'App',
  components: {
    ButtonSample,
    DialogSample,
  },
});
</script>
