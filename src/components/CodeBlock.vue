<script setup lang="ts">
import { ref, nextTick, inject, onMounted, watch } from "vue";
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

const props = defineProps({
  file: {
    default: "",
  }
});
const { file } = props;
const code = ref<null | string>(null);
const codeElement = ref();

const path = import.meta.env.DEV
  ? `../public/code/${file}`
  : `/code/${file}.txt`;


fetch(path)
.then((response) => response.text())
.then((codeAsString) => {
  nextTick(() => {
    code.value = codeAsString;
  });
});

const store = inject('store')

watch([code, () => store.state.isRevealLoaded], ([code, isRevealLoaded]) => {
  if (!code) return
  console.log('watch', code, isRevealLoaded, store.state.reveal)
  const highlight = store.state.reveal.getPlugin('highlight');
  console.log(highlight, codeElement.value);
  nextTick(() => {
    highlight.highlightBlock( codeElement.value );
  })
});

onMounted(() => {

  // console.log('injected', store);

  // const highlight = store.state.reveal.getPlugin( 'highlight' );
  // console.log(highlight);

  // highlight.highlightBlock( /* code block element to highlight */ );
})


</script>

<template>
  <div>
    <pre><code ref="codeElement" data-line-numbers data-trim data-noescape>{{code}}</code></pre>
      <!-- <textarea data-template>
      {{code}}
    </textarea> -->
  </div>
</template>

<style scoped></style>
