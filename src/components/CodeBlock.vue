<script setup lang="ts">
import { ref, nextTick, inject, onMounted, watch } from "vue";
import { Store } from '../store';

const props = defineProps({
  file: {
    default: "",
  }
});
const { file } = props;
const code = ref<null | string>(null);
const codeElement = ref();


const store = inject<Store>('store')!

console.log(file, store.state.modules)
code.value = store.state.modules[file]

watch(() => store.state.isRevealLoaded, (isRevealLoaded) => {
  console.log('isRevealLoaded', isRevealLoaded, code.value);

  // console.log('watch', code, isRevealLoaded, store.state.reveal)
  const highlight = store.state.reveal.getPlugin('highlight');
  // console.log(highlight, codeElement.value);
  nextTick(() => {
    highlight.highlightBlock( codeElement.value );
  })
});

</script>

<template>
  <div>
    <pre><code ref="codeElement" data-line-numbers data-trim data-noescape>{{code}}</code></pre>
  </div>
</template>

<style scoped>
.hljs-ln-line.hljs-ln-numbers {
  display: none !important;
}
</style>
