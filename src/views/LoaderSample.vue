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
      Loader
    </h2>
    <div>
      <p class="mb-2 text-2xl">ContentsLoade</p>
      <ContentsLoader :line="2" />
    </div>
    <div>
      <p>fetch data</p>
      <Suspense>
        <template #default>
          <PostView />
        </template>
        <template #fallback>
          <ContentsLoader :line="3" />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentsLoader from '../components/loader/ContentsLoader.vue';
import PostView from '../components/PostView.vue';

export default defineComponent({
  name: 'ContentsLoaderSample',
  components: {
    ContentsLoader,
    PostView,
  },
});
</script>
