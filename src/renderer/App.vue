<template>
	<v-container>

		<Header />
		<div id="wrapper">
			<v-file-upload ref="fileUploadInput" @update:model-value="onFileSelected" style=" height: 190px;" clearable
				density="comfortable"></v-file-upload>
		</div>
	</v-container>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';
import Header from './components/Header.vue';


function onFileSelected() { }
</script>

<style scoped></style>
