<template>
  <div>
    <p class="mb-2 text-2xl">ContentsLoade</p>
    <ContentsLoader :line="2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentsLoader from './ContentsLoader.vue';

export default defineComponent({
  name: 'ContentsLoaderSample',
  components: {
    ContentsLoader,
  },
});
</script>
