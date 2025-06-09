<script setup lang="ts">
window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
	<v-container>
		<v-file-upload clearable density="comfortable"></v-file-upload>
  </v-container>
</template>

<style scoped></style>
