import { ref, nextTick } from 'vue';
//@ts-ignore
import Reveal from 'reveal.js';

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
