import { createApp } from 'vue';
import App from './App.vue';
import { VueReveal } from './reveal/VueReveal';
import VueRevealComponents from './reveal/VueRevealComponents';
import VueRevealFileImporter from './reveal/VueRevealFileImporter';

//@ts-ignore
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
//@ts-ignore
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

const app = createApp(App);
app.use(VueReveal, { plugins: [RevealMarkdown, RevealHighlight] });
app.use(VueRevealComponents);
app.use(VueRevealFileImporter);
app.mount('#app');
