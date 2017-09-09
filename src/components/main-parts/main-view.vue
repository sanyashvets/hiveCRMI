<template>
	<main class="container">
		<app-header></app-header>
		<page-view></page-view>
	</main>
</template>

<script>

	import appHeader from '../parts/Header.vue'
	import pageView from './page-view.vue'

	export default {
		data() {
			return {}
		},
		methods: {},
		computed: {},
		components: {
			appHeader,
			pageView
		}
	}
</script>

<style lang="scss" scoped="">
	.container {
		background-color: #e5e5e5;
	}
</style>
