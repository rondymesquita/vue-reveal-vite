import { ref, nextTick, inject } from 'vue';
import CodeBlock from './components/CodeBlock.vue';

export default {
  install: (app: any) => {
    const reveal = inject('reveal');
    console.log(reveal, reveal);

    // console.log('plugin installed');
    app.component('CodeBlock', CodeBlock);
  },
};
