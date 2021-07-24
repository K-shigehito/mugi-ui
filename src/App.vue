<template>
  <div class="m-4">
    <ButtonSample />
    <DialogSample />
    <InputTextSample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonSample from './components/buttons/ButtonSample.vue';
import DialogSample from './components/modals/DialogSample.vue';
import InputTextSample from './components/forms/InputTextSample.vue';

export default defineComponent({
  name: 'App',
  components: {
    ButtonSample,
    DialogSample,
    InputTextSample,
  },
});
</script>
