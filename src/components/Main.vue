<template>
	<div class="page-wrap">
		<sidebar></sidebar>
		<main-view></main-view>
	</div>
</template>

<script>

	import sidebar from './main-parts/sidebar.vue'
	import mainView from './main-parts/main-view.vue'

	export default {
		data() {
			return {}
		},
		methods: {},
		computed: {},
		components: {
			sidebar,
			mainView
		}
	}
</script>

<style>
</style>
