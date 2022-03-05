<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import Reveal from 'reveal.js';
import 'reveal.js/plugin/markdown/markdown.js';
import 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

import HelloWorld from './components/HelloWorld.vue'


onMounted(() => {
  const ratio = 2
  let deck = new Reveal({
    // width: 210 * ratio,
    // height: 297 * ratio,
    // maxScale: 1,
    // minScale: 1,
    plugins: [RevealMarkdown, RevealHighlight ],
  });
  deck.initialize();
});
</script>

<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <HelloWorld msg="Rondy"/>
        Slide 1
        <pre><code data-line-numbers data-trim data-noescape>
          interface Greeter {
            greet(): void;
          }

          class Greet implements Greeter {
            greeting: string;

            constructor(message: string) {
              this.greeting = message;
            }

            greet() {
              return "Hello, " + this.greeting;
            }
          }

          let g = new Greet("world");
        </code></pre>
      </section>
      <section>Slide 2</section>
      <section data-markdown>
        <textarea data-template>
            ## Slide 1
            A paragraph with some text and a [link](http://hakim.se).
            ---
            ## Slide 2
            ---
            ## Slide 3
          </textarea
        >
      </section>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

section {
  box-sizing: border-box;
  /* width: 210px;
  height: 297px; */
  border: 1px solid red !important;
}
</style>
