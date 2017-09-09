<template>
	<div class="container main-block clearfix p-x-30 p-y-30">
		<sb-left class="main-block__sidebar"></sb-left>
		<app-center class="main-block__main"></app-center>
		<sb-right class="main-block__sidebar"></sb-right>
	</div>
</template>

<script>

	import sbLeft from '../parts/sidebar-left.vue'
	import appCenter from '../parts/center-block.vue'
	import sbRight from '../parts/sidebar-right.vue'

	export default {
		data() {
			return {}
		},
		methods: {},
		computed: {},
		components: {
			sbLeft,
			appCenter,
			sbRight
		}
	}
</script>

<style scoped="">

	@media all and (max-width: 1366px) {
		.main-block {
			padding: 15px;
		}
	}

</style>

