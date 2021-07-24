<template>
  <div>
    <p class="mb-2 text-2xl">Forms</p>

    <!-- v-model -->
    <div class="w-80">
      <InputText
        v-model:value="inputTextValue"
        placeholder="placeholder"
        label="InputText with event handler"
      ></InputText>
    </div>

    <!-- value + DOMイベント -->
    <div class="w-80">
      <InputText
        :value="inputTextValue"
        placeholder="placeholder"
        label="InputText with event handler"
        @input="handleInputText"
      ></InputText>
    </div>

    <!-- disabled -->
    <div class="w-80">
      <InputText :disabled="true" label="disabled"></InputText>
    </div>

    <!-- error -->
    <div class="w-80">
      <InputText v-model:value="inputTextValue" :is-error="true" label="error"></InputText>
    </div>

    <!-- full width -->
    <div>
      <InputText v-model:value="inputTextValue" label="width full"></InputText>
    </div>

    <!-- type：number -->
    <div class="w-80">
      <InputText v-model:value="inputNumberValue" type="number" label="number"></InputText>
    </div>

    <!-- type：password -->
    <div class="w-80">
      <InputText v-model:value="inputPasswordValue" type="password" label="password"></InputText>
    </div>

    <!-- type：email -->
    <div class="w-80">
      <InputText v-model:value="inputEmailValue" type="email" label="email"></InputText>
    </div>

    <!-- type：tel -->
    <div class="w-80">
      <InputText v-model:value="inputTelValue" type="tel" label="tel"></InputText>
    </div>

    <!-- type：date -->
    <div class="w-80">
      <InputText v-model:value="inputDateValue" type="date" label="date"></InputText>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputText from './InputText.vue';

export default defineComponent({
  name: 'InputTextSample',
  components: {
    InputText,
  },
  setup() {
    const inputTextValue = ref('');
    const handleInputText = (value: string) => (inputTextValue.value = value);

    const inputNumberValue = ref('0');
    const inputPasswordValue = ref('');
    const inputEmailValue = ref('');
    const inputTelValue = ref('');
    const inputDateValue = ref('');

    return {
      inputTextValue,
      handleInputText,
      inputNumberValue,
      inputPasswordValue,
      inputEmailValue,
      inputTelValue,
      inputDateValue,
    };
  },
});
</script>
