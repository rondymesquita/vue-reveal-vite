<script setup lang="ts">
import { onMounted } from 'vue';

import useReveal from './useReveal';
import HelloWorld from './components/HelloWorld.vue'
import CodeBlock from './components/CodeBlock.vue'

onMounted(() => {
  useReveal()
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
          <h1>Slide 2</h1>
          <CodeBlock file="test.ts"/>
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
              ```js
                console.log('here')
                <CodeBlock file="test.ts"/>
              ```
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
  /* top: 0; */
}
</style>
