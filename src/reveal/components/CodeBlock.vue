<script setup lang="ts">
import { ref, inject, watch } from "vue";

const props = defineProps({
  file: {
    default: "",
  }
});
const { file } = props;
const code = ref<null | string>(null);
const codeElement = ref();

const reveal = inject<any>('reveal')!
const codeBlocks = inject<any>('revealCodeBlocks')!

console.log(reveal.isRevealLoaded.value)
code.value = codeBlocks.value[file]

watch(reveal.isRevealLoaded, (isRevealLoaded) => {
  if (!isRevealLoaded) return;

  // const highlight = reveal.reveal.value.getPlugin('highlight');
  // highlight.highlightBlock( codeElement.value );
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
