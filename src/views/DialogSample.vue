<template>
  <div>
    <p class="mb-2 text-2xl">Dialogs</p>
    <div>
      <MyDialog :visible="dialogVisible" @backdrop-clicked="switchDialog">
        <template #title>
          <p class="pb-[6px] border-b-[1px] border-gray-500 font-bold">
            ダイアログ
          </p>
        </template>
        <template #body>
          ダミー本文です。ダミー本文です。ダミー本文です。ダミー本文です。ダミー本文です。ダミー本文です。ダミー本文です。ダミー本文です。ダミー本文です。
        </template>
        <template #footer>
          <div class="flex justify-end">
            <SecondaryButton @click="switchDialog">close</SecondaryButton>
          </div>
        </template>
      </MyDialog>
    </div>
    <div class="mb-2">
      <PrimaryButton @click="switchDialog">open</PrimaryButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PrimaryButton from '../components/buttons/BasicButton.vue';
import SecondaryButton from '../components/buttons/LinkButton.vue';
import MyDialog from '../components/dialog/MyDialog.vue';

export default defineComponent({
  name: 'DialogSample',
  components: {
    PrimaryButton,
    SecondaryButton,
    MyDialog,
  },
  setup() {
    const dialogVisible = ref(false);
    const switchDialog = () => {
      dialogVisible.value = !dialogVisible.value;
    };

    return {
      dialogVisible,
      switchDialog,
    };
  },
});
</script>
