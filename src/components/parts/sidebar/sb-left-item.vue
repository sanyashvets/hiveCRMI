<template>
	<li class="sb-user clearfix p-x-15 p-y-15">
		<div class="sb-user__ava"><img class="img__rounded img__responsive" :src="user.avatar" alt="Geralt avatar"></div>
		<div class="sb-user__info">
			<p class="name">
				{{user.name}}
			</p>
			<p class="msg text-limit">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda dolor
			</p>
		</div>
		<p class="date">
			{{date}}
		</p>
		<p class="notification" v-if="user.notifications_count">
			{{user.notifications_count}}
		</p>
	</li>
</template>

<script>

	import moment from 'moment';

	export default {
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		data() {
			return {}
		},
		methods: {

		},
		computed: {
			date() {
				return moment(this.user.time).format('HH:mm')
			}
		},
		components: {}
	}
</script>

<style lang="scss" scoped="">

	@import "../../../assets/scss/variables";

	.sb-user {
		position: relative;
		border-top: 1px solid #d3d3d3;
		display: flex;
		font-size: 14px;
		cursor: pointer;
		
		&__ava,
		&__info {
			/*float: left;*/
		}

		$ava-width: 60px;

		&__ava {
			width: 60px;
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: calc(100% - #{$ava-width} - 10px);
			margin-left: 10px;

			.name {
				font-family: 'LatoBlack', 'sans-serif';
				padding-right: 40px;
			}

			.msg {
				width: 80%;
			}
		}

		.date,
		.notification {
			position: absolute;
		}

		.date {
			top: 15px;
			right: 15px;
			font-size: 12px;
			color: #d3d3d3;
		}

		.notification {
			padding: 5px 10px;
			bottom: 15px;
			right: 15px;
			background-color: $primary-color;
			color: #ffffff;
			line-height: 1;
			border-radius: 20px;
		}
	}
</style>
