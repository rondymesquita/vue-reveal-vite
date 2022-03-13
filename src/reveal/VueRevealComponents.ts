import { ref, nextTick, inject } from 'vue';
import CodeBlock from './components/CodeBlock.vue';
import Reveal from './components/Reveal.vue';

export default {
  install: (app: any) => {
    const reveal = inject('reveal');
    app.component('CodeBlock', CodeBlock);
    app.component('Reveal', Reveal);
  },
};
