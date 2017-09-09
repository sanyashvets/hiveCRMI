<template>
	<aside>
		<div class="tab">
			<ul class="tab__menu">
				<li :class="{active: tab === 'info'}"><a href="#" @click.prevent="setTab('info')"><i
						class="fa fa-info-circle" aria-hidden="true"></i></a></li>
				<li :class="{active: tab === 'edit'}"><a href="#" @click.prevent="setTab('edit')"><i
						class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
				<li :class="{active: tab === 'filter'}"><a href="#" @click.prevent="setTab('filter')"><i
						class="fa fa-filter" aria-hidden="true"></i></a></li>
				<li :class="{active: tab === 'card'}"><a href="#" @click.prevent="setTab('card')"><i
						class="fa fa-credit-card" aria-hidden="true"></i></a></li>
				<li class="shorten" :class="{active: tab === 'settings'}"><a href="#" @click.prevent="setTab('settings')"><i
						class="fa fa-cog" aria-hidden="true"></i></a></li>
			</ul>
			<div class="tab__area">
				<div class="tab__item" :class="{active: tab === 'info'}">
					<div class="simplebar" ref="info">
						<div class="info">
							<div class="info__block">
								<h3 class="tab__header info__header p-y-15 p-x-15">
									Осн. информация
								</h3>
								<div class="info__box p-x-30">
									<p class="item">
										<span class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></span>
										<span>{{info.main.name}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-vk" aria-hidden="true"></i></span>
										<span>{{info.main.vkID}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-instagram" aria-hidden="true"></i></span>
										<span>{{info.main.insta}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-phone-square" aria-hidden="true"></i></span>
										<span>{{info.main.phone}}</span>
									</p>
								</div>
							</div>
							<div class="info__block">
								<h3 class="tab__header info__header p-y-15 p-x-15">
									Доп. информация
								</h3>
								<div class="info__box p-x-30">
									<p class="item">
										<span class="icon"><i class="fa fa-compass" aria-hidden="true"></i></span>
										<span>{{info.additional.channel}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
										<span>{{info.additional.place}}</span>
									</p>
								</div>
							</div>
							<div class="info__block">
								<h3 class="tab__header info__header p-y-15 p-x-15">
									Компания
								</h3>
								<div class="info__box p-x-30">
									<p class="item">
										<span class="icon"><i class="fa fa-vk" aria-hidden="true"></i></span>
										<span>{{info.company.vkURL}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-desktop" aria-hidden="true"></i></span>
										<span>{{info.company.siteURL}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-phone-square" aria-hidden="true"></i></span>
										<span>{{info.company.phone}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
										<span>{{info.company.chief}}</span>
									</p>
									<p class="item">
										<span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
										<span>{{info.company.place}}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab__item" :class="{active: tab === 'edit'}">
					<div class="simplebar" ref="edit">edit</div>
				</div>
				<div class="tab__item" :class="{active: tab === 'filter'}">
					<div class="simplebar" ref="filter">filter</div>
				</div>
				<div class="tab__item" :class="{active: tab === 'card'}">
					<div class="simplebar" ref="card">card</div>
				</div>
				<div class="tab__item" :class="{active: tab === 'settings'}">
					<div class="simplebar" ref="settings">settings</div>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>

	import SimpleBar from 'simplebar'

	export default {
		sbInfo: null,
		sbEdit: null,
		sbFilter: null,
		sbCard: null,
		sbSettings: null,
		data() {
			return {
				tab: 'info',
				info: {
					main: {
						name: 'Александр Александров',
						vkID: 'id1234567',
						insta: '@account',
						phone: '+7 123 456 78 90'
					},
					additional: {
						channel: 'канал....',
						place: 'Воронеж'
					},
					company: {
						vkURL: 'vc.com/123456789',
						siteURL: 'siteadress.ru',
						phone: '+7 123 456 78 90',
						chief: 'Пантелеймон Смехов',
						place: 'Воронеж'
					}
				}
			}
		},
		methods: {
			/**
			 * Установить выбранный таб активным
			 *
			 * @param tab {string} - название таба
			 */
			setTab( tab ) {
				this.tab = tab;
			},
			/**
			 * Поиск по клиентам/заявкам - заглушка
			 */
			search() {
				// go go search
			},
			/**
			 * Инициализировать плагин для сайдбара
			 */
			initScrollbars() {
				this.sbInfo = new SimpleBar(this.$refs.info);
				this.sbEdit = new SimpleBar(this.$refs.info);
				this.sbFilter = new SimpleBar(this.$refs.info);
				this.sbCard = new SimpleBar(this.$refs.info);
				this.sbSettings = new SimpleBar(this.$refs.info);
			}
		},
		mounted() {
			this.initScrollbars();
		},
		computed: {},
		components: {}
	}
</script>

<style scoped="" lang="scss">

	@import "../../assets/scss/variables";

	.tab {
		&__header {
			text-align: center;
			text-transform: uppercase;
			font-family: 'LatoBold', 'sans-serif';
			font-size: 16px;
		}
	}

	.info {
		font-size: 18px;

		&__header {
			background-color: #f8f8f8;
		}

		&__block {
			border-bottom: 1px solid #d3d3d3;
		}

		&__box {
			padding: 25px;

			.item {
				display: flex; // beautiful text format (responsive)
				.icon {
					display: inline-block;
					text-align: center;
					width: 18px;
					margin-right: 25px;
				}

				+ .item {
					margin-top: 25px;
				}
			}
		}
	}

	@media all and (max-width: 1366px) {
		.info {
			font-size: 16px;
		}
	}


</style>
