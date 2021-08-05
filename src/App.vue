<template>
  <div id="page-wrapper" class="mx-[16px]">
    <div class="grid grid-cols-12 gap-x-[12px]">
      <!-- ヘッダー -->
      <PageHeader class="col-span-12" />

      <!-- ナビゲーション -->
      <PageNavigation class="hidden md:block md:col-span-3 mt-[16px]" />

      <!-- メインエリア -->
      <div class="col-span-12 md:col-span-9 mt-[16px]">
        <router-view />
      </div>

      <!-- フッター -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/pages/PageHeader.vue';
import PageNavigation from './components/pages/PageNavigation.vue';

export default defineComponent({
  name: 'App',
  components: { PageHeader, PageNavigation },
});
</script>
