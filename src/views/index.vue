<template>
  <header class="p-[16px]">
    <div class="pb-[8px] border-b-[1px] border-b-[#93918F]">
      <img src="../assets/images/mugi-ui-rogo.svg" width="100" alt="" />
    </div>
  </header>
  <div class="m-4">
    <div class="flex gap-[12px]">
      <router-link to="/button">button</router-link>
      <router-link to="/modal">modal</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
});
</script>
