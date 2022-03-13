<script setup lang="ts">
import { onMounted } from 'vue';

// import useReveal from './useReveal';
// import useFileImporter from './useFileImporter';
import HelloWorld from './components/HelloWorld.vue'

// const {isLoaded} = useFileImporter()


console.log('app created')
onMounted(() => {
  console.log('app mounted')
  // useReveal()

});
</script>

<template>
    <div class="reveal">
      <div class="slides">
        <!-- <Cover/> -->
        <section>
          <h1>Slide 1</h1>
          <CodeBlock file="test.java"/>
        </section>
        <section>
          <h1>Slide 2</h1>
          <CodeBlock file="test.ts"/>
        </section>
        <section>
          <h1>Slide 3</h1>
          <HelloWorld msg="Rondy"/>
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
        <section data-markdown="../public/markdown.md"
                data-separator="^\n\n\n"
                data-separator-vertical="^\n\n"
                data-separator-notes="^Note:"
                data-charset="iso-8859-15">
            <!--
                Note that Windows uses `\r\n` instead of `\n` as its linefeed character.
                For a regex that supports all operating systems, use `\r?\n` instead of `\n`.
            -->
        </section>
        <section data-markdown>
          <textarea data-template>
              ## Slide 4
              <CodeBlock file="test.ts"/>
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
