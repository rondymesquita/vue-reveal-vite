<script setup lang="ts">
import { ref, inject, watch } from "vue";

const props = defineProps({
  file: {
    default: "",
  }
});
const { file } = props;
const code = ref<null | string>(" loading code ");
const codeElement = ref();
const codeBlock = ref();

const reveal = inject<any>('reveal')!
const codeBlocks = inject<any>('revealCodeBlocks')!

console.log(reveal.isRevealLoaded.value)
code.value = codeBlocks.value[file]

watch(reveal.isRevealLoaded, (isRevealLoaded) => {
  if (!isRevealLoaded) return;

  const highlight = reveal.reveal.value.getPlugin('highlight');
  highlight.highlightBlock( codeElement.value );
  console.log(codeBlock.value.querySelector("pre > code > table > tbody > tr > td:first-child"));
  codeBlock.value.querySelector("pre > code > table > tbody > tr > td:first-child").style.display = "none"

});

</script>

<template>
  <div class="code-block" ref="codeBlock">
    <pre><code ref="codeElement" data-line-numbers data-trim data-noescape>{{code}}</code></pre>
  </div>
</template>

<style scoped>
/* tr td.hljs-ln-line.hljs-ln-numbers:first-child {
  display: none !important;
} */

/* .processing > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) { */
/* pre > code > table > tbody > tr > td:first-child {
  color: red;
  display: none !important
} */

.code-block > pre > code table{
  border: 1px solid red !important;
  color: red;
  /* font-size: 24px !important; */
}
</style>
