<template>
  <header class="">
    <div class="flex items-center pb-[8px] border-b-[1px] border-b-[#333132]">
      <div class="flex-grow" @click="goToIndex">
        <img
          src="../../assets/images/mugi-ui-rogo.svg"
          width="100"
          alt=""
          class="cursor-pointer hover:opacity-80"
        />
      </div>
      <a href="https://github.com/K-shigehito/mugi-ui" class="flex-grow-0 w-[24px] mr-[8px]">
        <fa
          :icon="{ prefix: 'fab', iconName: 'github' }"
          class="text-[24px] text-[#333132] cursor-pointer"
        />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PageHdeader',
  setup() {
    const router = useRouter();

    const goToIndex = () => {
      router.push({ name: 'index' });
    };

    return {
      goToIndex,
    };
  },
});
</script>
