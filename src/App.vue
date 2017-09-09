<template>
	<div id="app">
		<app-main></app-main>
	</div>
</template>

<script>

	import appMain from './components/Main.vue'

	export default {
		name: 'app',
		components: {
			appMain
		}
	}
</script>

<style lang="scss">
	@import "./assets/scss/styles";
</style>

