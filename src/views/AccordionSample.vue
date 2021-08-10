<template>
  <div v-for="data in faqData" :key="data.id">
    <Accordion>
      <template #head>
        <span v-html="data.question"></span>
      </template>
      <template #body>
        <span v-html="data.answer"></span>
      </template>
    </Accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Accordion from '../components/accordion/Accordion.vue';

export default defineComponent({
  name: 'AccordionSample',

  components: {
    Accordion,
  },

  setup() {
    const faqData = [
      {
        id: 1,
        question: 'かわいいねこの名前',
        answer: 'むぎ',
      },
      {
        id: 2,
        question: 'おもしろいねこの名前',
        answer: 'ハナ',
      },
      {
        id: 3,
        question: 'まじめなねこの名前',
        answer: 'クゥ',
      },
    ];

    return {
      faqData,
    };
  },
});
</script>
