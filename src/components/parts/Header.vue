<template>
	<div>
		<div class="main-header flex flex__y-center flex__x-between p-x-30">
			<a href="/" class="brand"><img src="/static/assets/images/logo.png" alt="HiveCRMI logo"></a>
			<dropdown class="usr dropdown__right">
				<div class="usr__btn flex flex__y-center flex__x-center" slot="button">
					<div class="img"><img class="img__responsive img__rounded" :src="user.avatar" :alt="`${user.name} аватар`"></div>
					<div class="name">{{user.name}}</div>
					<div class="icon">
						<i class="fa fa-caret-down" aria-hidden="true"></i>
					</div>
				</div>
				<template slot="menu">
					<li><a href="#">Профиль</a></li>
					<li><a href="#">Выйти</a></li>
				</template>
			</dropdown>
		</div>
		<div class="sub-header p-x-30 flex flex__y-center flex__x-between">
			<h1 class="title">
				Диалоговое окно
			</h1>
			<div class="stats flex flex__y-center">
				<div class="stats__item flex flex__y-center">
					<p class="stats__txt">
						Среднее время <br> ответа на заявку (мин.)
					</p>
					<p class="stats__num">{{time.req}}</p>
					<a href="#" class="stats__question" title="explanation">
						<i class="fa fa-question-circle" aria-hidden="true"></i>
					</a>
				</div>
				<div class="divider"></div>
				<div class="stats__item flex flex__y-center">
					<p class="stats__txt">
						Среднее время <br> ответа в чате (мин.)
					</p>
					<p class="stats__num">{{time.answ}}</p>
					<a href="#" class="stats__question" title="explanation">
						<i class="fa fa-question-circle" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import dropdown from '../utils/dropdown.vue'

	export default {
		data() {
			return {
				user: {
					name: 'Цирилла',
					avatar: '/static/assets/images/ciri.jpg'
				},
				time: {
					req: 230,
					answ: 30
				}
			}
		},
		methods: {},
		computed: {},
		components: {
			dropdown
		}
	}
</script>

<style scoped="" lang="scss">

	@import "../../assets/scss/variables";

	.main-header {
		background-color: #ffffff;
	}

	.usr {
		&__btn {
			font-family: 'LatoBlack', 'sans-serif';

			.img {
				flex: 36px 0 0;
				width: 36px;
			}

			> div + div {
				margin-left: 15px;
			}
		}

	}

	.sub-header {
		line-height: 1;
		height: 80px;
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: #f8f8f8;

		.title {
			flex: 1 1 30%;
			margin: 0;
			font-size: 16px;
			text-transform: uppercase;
			font-family: 'LatoBlack', 'sans-serif';
			color: $secondary-color;
		}
	}

	.stats {
		height: 100%;
		justify-content: flex-end;
		flex:  1 1 45%;

		&__item {
			position: relative;
		}

		&__txt {
			text-align: right;
		}

		&__num {
			margin-left: 15px;
			font-size: 40px;
			color: $secondary-color;
		}

		&__question {
			position: absolute;
			top: 0;
			right: -20px;
			font-size: 14px;
			color: #d3d3d3;

			&:hover {
				color: $secondary-color;
			}
		}

		.divider {
			width: 1px;
			background-color: #d3d3d3;
			margin: 0 30px 0 50px;
			height: 100%;
		}
	}

	@media all and (max-width: 1366px) {
		.main-header {
			padding: 0 15px;
		}

		.sub-header {
			padding-left: 15px;
			padding-right: 15px;
		}

		.stats {
			&__question {
				right: -7px;
				top: -7px;
			}

			.divider {
				margin-left: 30px;
			}
		}
	}
</style>
