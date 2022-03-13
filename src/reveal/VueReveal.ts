import { ref, nextTick } from 'vue';
import Reveal from 'reveal.js';
import * as RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
import * as RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

export const VueReveal = {
  install: async (app: any, options: any) => {
    const isRevealLoaded = ref(false);
    const reveal = ref<Reveal>(null);

    nextTick(() => {
      const revealInstance = new Reveal({
        ...options,
        // highlight: {
        //   highlightOnLoad: false,
        // },
        // width: 210,
        // height: 297 * ratio,
        // maxScale: 1,
        // minScale: 1,
        // plugins: [RevealMarkdown, RevealHighlight],
      });

      revealInstance.initialize().then(() => {
        isRevealLoaded.value = true;
      });

      reveal.value = revealInstance;
    });

    app.provide('reveal', {
      reveal,
      isRevealLoaded,
    });
  },
};
