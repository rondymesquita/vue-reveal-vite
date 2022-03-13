import { createApp } from 'vue';
import App from './App.vue';
import { VueReveal } from './reveal/VueReveal';
import VueRevealComponents from './reveal/VueRevealComponents';
import VueRevealFileImporter from './reveal/VueRevealFileImporter';

import * as RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
import * as RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

const app = createApp(App);
app.use(VueReveal, { plugins: [RevealMarkdown, RevealHighlight] });
app.use(VueRevealComponents);
app.use(VueRevealFileImporter);
app.mount('#app');
