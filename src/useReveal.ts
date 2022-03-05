import { ref, nextTick, inject } from 'vue';
import { Store } from './store';

import Reveal from 'reveal.js';
import * as RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
import * as RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

export default function useReveal() {
  const store: Store = inject('store');

  const isLoaded = ref(false);
  let reveal = new Reveal({
    highlight: {
      highlightOnLoad: false,
    },
    // width: 210 * ratio,
    // height: 297 * ratio,
    // maxScale: 1,
    // minScale: 1,
    plugins: [RevealMarkdown, RevealHighlight],
  });

  reveal.initialize().then(() => {
    isLoaded.value = true;
    store.actions.setReveal(reveal);
    store.actions.setRevealLoaded(true);
  });

  return {
    isLoaded,
  };
}
