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
      Dialog
    </h2>
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
