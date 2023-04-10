<script setup lang="ts">
const props = defineProps<{
  variant: "primary" | "secondary"
  id: string
}>()
</script>

<template>
  <button :id="id"><slot /></button>
</template>
