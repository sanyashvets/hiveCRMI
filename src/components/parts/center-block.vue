<template>
	<div>
		<div class="header flex flex__y-center flex__x-between">
			<div>
				<button class="btn broken">
					<i class="fa fa-chain-broken" aria-hidden="true"></i>
				</button>
			</div>
			<h2>{{user}}</h2>
			<div>
				<button class="btn">
					<i class="fa fa-comments" aria-hidden="true"></i>
				</button>
			</div>
		</div>

		<div class="g-tab">
			<!-- "g" - because of sexy tab design -->
			<ul class="g-tab__menu list-unstyled flex">
				<li :class="{active: tab === 'insta'}">
					<a href="#" @click.prevent="setTab('insta')">
						<i class="fa fa-instagram" aria-hidden="true"></i>
						<span class="name">InstaGroupName</span>
					</a>
				</li>
				<li :class="{active: tab === 'fb'}">
					<a href="#" @click.prevent="setTab('fb')">
						<i class="fa fa-facebook" aria-hidden="true"></i>
						<span class="name">Facebook group name</span>
					</a>
				</li>
				<li :class="{active: tab === 'vk'}">
					<a href="#" @click.prevent="setTab('vk')">
						<i class="fa fa-vk" aria-hidden="true"></i>
						<span class="name">Название сообщества / аккаунта</span>
					</a>
				</li>
				<li :class="{active: tab === 'ok'}">
					<a href="#" @click.prevent="setTab('ok')">
						<i class="fa fa-odnoklassniki" aria-hidden="true"></i>
						<span class="name">OK name</span>
					</a>
				</li>
				<li :class="{active: tab === 'tw'}">
					<a href="#" @click.prevent="setTab('tw')">
						<i class="fa fa-twitter" aria-hidden="true"></i>
						<span class="name">Twitter page</span>
					</a>
				</li>
			</ul>
			<div class="g-tab__area">
				<div class="g-tab__item" :class="{active: tab === 'insta'}">
					<div class="simplebar" ref="insta">
						<div>
							insta
						</div>
					</div>
				</div>
				<div class="g-tab__item" :class="{active: tab === 'fb'}">
					<div class="simplebar" ref="fb">
						<div>
							fb
						</div>
					</div>
				</div>
				<div class="g-tab__item" :class="{active: tab === 'vk'}">
					<div class="simplebar" ref="vk">
						<div>
							<msg-item v-for="i in dialogs" :msg="i" :key="i.id"></msg-item>
						</div>
					</div>
				</div>
				<div class="g-tab__item" :class="{active: tab === 'ok'}">
					<div class="simplebar" ref="ok">
						<div>
							ok
						</div>
					</div>
				</div>
				<div class="g-tab__item" :class="{active: tab === 'tw'}">
					<div class="simplebar" ref="tw">
						<div>
							tw
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>

	import msgItem from './center/msg-item.vue'
	import SimpleBar from 'simplebar'

	export default {
		sbInsta: null,
		sbFb: null,
		sbVk: null,
		sbOk: null,
		sbTw: null,
		data() {
			return {
				user: 'Геральт из Ривии',
				tab: 'vk',
				dialogs: [
					{
						id: 0,
						soc: {
							link: '',
							name: 'Геральт'
						},
						user: {
							id: 1,
							name: 'Геральт из Ривии',
							avatar: '/static/assets/images/geralt.jpg'
						},
						message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facilis soluta temporibus! Accusantium adipisci architecto dolorem doloremque dolorum incidunt neque nobis quisquam rerum! Iure, laborum nemo nostrum rem veritatis voluptates!',
						time: Date.now()
					},
					{
						id: 1,
						user: {
							id: 2,
							name: 'Менеджер',
							avatar: '/static/assets/images/ciri.jpg'
						},
						message: 'Lorem ipsumores rem doloremque dolorum incidunt neque nobis quisquam rerum! Iure, laborum nemo nostrum rem veritatis voluptates!',
						time: Date.now()
					},
					{
						id: 3,
						soc: {
							link: '',
							name: 'Геральт',
							avatar: '/static/assets/images/geralt.jpg'
						},
						user: {
							id: 1,
							name: 'Геральт из Ривии',
							avatar: '/static/assets/images/geralt.jpg'
						},
						message: 'в первой записи изменить "индивидуальным" на "уникальным". Вторая воо в первой записи изменить "индивидуальным" на "уникальным". Вторая воо, laborum nemo nostrum rem veritatis voluptates!',
						time: Date.now()
					},
					{
						id: 4,
						user: {
							id: 2,
							name: 'Менеджер',
							avatar: '/static/assets/images/ciri.jpg'
						},
						message: 'в первой записи изменить "индивидуальным" на "уникальным". Вторая воо!',
						time: Date.now()
					},
				]
			}
		},
		methods: {
			/**
			 * Установить выбранный таб активным
			 *
			 * @param tab  {string} - название таба
			 */
			setTab( tab ) {
				this.tab = tab;
			},
			/**
			 * Инициализировать плагин для сайдбара
			 */
			initScrollbars() {
				this.sbInsta = new SimpleBar( this.$refs.insta );
				this.sbFb = new SimpleBar( this.$refs.fb );
				this.sbVk = new SimpleBar( this.$refs.vk );
				this.sbOk = new SimpleBar( this.$refs.ok );
				this.sbTw = new SimpleBar( this.$refs.tw );
			}
		},
		mounted() {
			this.initScrollbars();
		},
		computed: {},
		components: {
			msgItem
		}
	}
</script>

<style scoped="" lang="scss">

	@import "../../assets/scss/variables";

	.header {
		color: #ffffff;
		background-color: $primary-color;

		.fa {
			color: #ffffff;
		}

		h2 {
			padding: 30px 0;
			font-size: 16px;
			font-weight: bold;
			text-transform: uppercase;
		}

		.btn {
			padding: 30px;
			background: none;
			border: none;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			outline: none;

			&:hover {
				background-color: rgba(#fff, .1);
			}

			&:active {
				background-color: rgba(#fff, .2);
			}
		}

	}

	.broken {
		.fa {
			color: $secondary-color;
		}
	}

	$border-color: #d3d3d3;

	.g-tab {
		&__menu {
			font-size: 14px;
			border-bottom: 1px solid $border-color;
			a {
				display: block;
				text-align: center;
				padding: 25px 15px;
				color: $border-color;
			}

			li {
				padding: 5px 0;
				flex: 1 1 auto;

				&:first-child {
					a {
						padding-left: 30px;
					}
				}

				&:last-of-type {
					a {
						padding-right: 30px;
					}
				}
			}

			.active {
				position: relative;

				&:before,
				&:after {
					content: '';
					position: absolute;
					top: 100%;
					right: calc(50% - 10px);
				}

				&:before {
					width: 0;
					height: 0;
					border-style: solid;
					border-width: 10px 10px 0 10px;
					border-color: #e0e0e0 transparent transparent transparent;
				}

				&:after {
					width: 0;
					height: 0;
					border-style: solid;
					border-width: 9px 9.5px 0 9.5px;
					border-color: #ffffff transparent transparent transparent;
				}

				a {
					color: $primary-color;
					border-left: 1px solid $border-color;
					border-right: 1px solid $border-color;
				}

				.name {
					display: inline-block;
				}
			}

			.name {
				display: none;
			}

			i + span {
				margin-left: 20px;
			}
		}

		&__item {
			display: none;
			padding-top: 30px;

			&.active {
				display: block;
			}
		}
	}

	@media all and (max-width: 1366px) {
		.header {
			height: 48px;
			h2 {
				padding: 15px 0;
				font-size: 14px;
			}

			.btn {
				padding: 15px;
			}
		}

		.g-tab {
			&__menu {
				li {
					&:first-child {
						a {
							padding-left: 15px;
						}
					}

					&:last-of-type {
						a {
							padding-right: 15px;
						}
					}
				}

				a {
					padding: 10px 7px;
				}
			}
		}
	}

</style>
