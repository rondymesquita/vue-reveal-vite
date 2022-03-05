<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import Reveal from 'reveal.js'
import 'reveal.js/plugin/markdown/markdown.js'
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

onMounted(() => {

    let deck = new Reveal({
      plugins: [ RevealMarkdown ]
    });
    deck.initialize();
});
</script>

<template>
  <div class="reveal">
    <div class="slides">
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
      <section>Slide 1</section>
      <section>Slide 2</section>
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
</style>
