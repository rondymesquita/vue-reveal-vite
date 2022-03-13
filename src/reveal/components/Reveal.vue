<script setup lang="ts">

const props = defineProps({
  id: {
    default: "reveal",
  }
});
</script>


<template>
	<div :id='id' class="reveal">
		<div class="slides">
			<slot></slot>
		</div>
	</div>
</template>
