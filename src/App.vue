<script setup lang="ts">
import { nextTick, onMounted, inject, provide } from 'vue';
// import Reveal from 'reveal.js';
// import * as RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
// import * as RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
// import 'reveal.js/dist/reveal.css';
// import 'reveal.js/dist/theme/black.css';
// import 'reveal.js/plugin/highlight/monokai.css';
import useReveal from './useReveal';
import HelloWorld from './components/HelloWorld.vue'
import CodeBlock from './components/CodeBlock.vue'

// const isRevealLoaded = ref(false)

const store = inject('store')

onMounted(() => {
  const { isLoaded } = useReveal()
  // let reveal = new Reveal({
  //   highlight: {
  //     highlightOnLoad: false
  //   },
  //   // width: 210 * ratio,
  //   // height: 297 * ratio,
  //   // maxScale: 1,
  //   // minScale: 1,
  //   plugins: [RevealMarkdown, RevealHighlight ],
  // });
  // const ratio = 2
  // reveal.initialize();

  // console.log('providing', store.store)
  // provide('reveal', reveal)
});
</script>

<template>
    <div class="reveal">
      <div class="slides">
        <section>
          <h1>Slide 1</h1>
          <CodeBlock file="test.java"/>
        </section>
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

section {
  top: 0;
  /* box-sizing: border-box; */
  /* width: 210px;
  height: 297px; */
  /* border: 1px solid red !important; */
}
</style>
