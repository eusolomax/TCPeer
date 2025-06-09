<script setup lang="ts">
window.electronAPI.sendMessage('Hello from App.vue!');
import { useTemplateRef, onMounted } from 'vue'
</script>

<template>
	<v-container>
		<div id="wrapper">
			<v-file-upload ref="fileUploadInput" @update:model-value="onFileSelected" style=" height: 190px;" clearable
				density="comfortable"></v-file-upload>
		</div>
	</v-container>
</template>

<style scoped></style>
