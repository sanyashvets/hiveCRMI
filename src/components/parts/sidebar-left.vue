<template>
	<aside>
		<div class="tab">
			<ul class="tab__menu">
				<li :class="{active: tab === 'requests'}"><a href="#" @click.prevent="setTab('requests')">Заявки</a></li>
				<li :class="{active: tab === 'all'}"><a href="#" @click.prevent="setTab('all')">Все клиенты</a></li>
				<li class="shorten" :class="{active: tab === 'settings'}"><a href="#" @click.prevent="setTab('settings')"><i
						class="fa fa-cog" aria-hidden="true"></i></a></li>
			</ul>
			<div class="tab__area">
				<div class="tab__item" :class="{active: tab === 'requests'}">
					<div ref="req" class="simplebar">
						<form class="search p-x-15" @submit.prevent="search()">
							<div class="row">
								<div class="input-wrap">
									<label for="search2">
										<i class="fa fa-search" aria-hidden="true"></i>
									</label>
									<input type="search" id="search2" placeholder="ПОИСК" required>
								</div>
								<a class="favs" href="#" @click.prevent="like()">
									53 <i class="fa fa-star" aria-hidden="true"></i>
								</a>
							</div>
						</form>
						<ul class="list-unstyled">
							<usr-item v-for="i in users" :key="i.id" :user="i"></usr-item>
						</ul>
					</div>
				</div>
				<div class="tab__item" :class="{active: tab === 'all'}">
					<div ref="all" class="simplebar">
						<form class="search p-x-15" @submit.prevent="search()">
							<div class="row">
								<div class="input-wrap">
									<label for="search">
										<i class="fa fa-search" aria-hidden="true"></i>
									</label>
									<input type="search" id="search" placeholder="ПОИСК" required>
								</div>
								<a class="favs" href="#" @click.prevent="like()">
									53 <i class="fa fa-star" aria-hidden="true"></i>
								</a>
							</div>
						</form>
						<ul class="list-unstyled">
							<usr-item v-for="i in users" :key="i.id" :user="i"></usr-item>
						</ul>
					</div>
				</div>
				<div class="tab__item" :class="{active: tab === 'settings'}"></div>
			</div>
		</div>
	</aside>
</template>

<script>

	import usrItem from './sidebar/sb-left-item.vue'
	import SimpleBar from 'simplebar'

	export default {
		sbAll: null,
		sbReq: null,
		data() {
			return {
				tab: 'all',
				users: [
					{id: 0, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 30, time: Date.now()},
					{id: 10, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ilor', name: 'Санёк', notifications_count: 3, time: Date.now()},
					{id: 20, avatar: '/static/assets/images/geralt.jpg', message: 'Lorisicing elit. Accusamus adipisci assumenda dolor', name: 'Alex', notifications_count: 388, time: Date.now()},
					{id: 30, avatar: '/static/assets/images/geralt.jpg', message: 'Lorg elit. Accusamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
					{id: 40, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dcing elit. Accusamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
					{id: 50, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dolor sit asamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
					{id: 60, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
					{id: 70, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dolor sit amet, cadipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
					{id: 80, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dolor sitg elit. Accusamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
					{id: 100, avatar: '/static/assets/images/geralt.jpg', message: 'Lorem ipsum dolor sit amet, cccusamus adipisci assumenda dolor', name: 'Александр Александрович', notifications_count: 0, time: Date.now()},
				]
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
			 * Сделать лайк - заглушка
			 *
			 * (я не понял с шаблона что то за индикатор)
			 */
			like() {},
			/**
			 * Инициализировать плагин для сайдбара
			 */
			initScrollbars() {
				this.sbAll =  new SimpleBar( this.$refs.all );
				this.sbReq =  new SimpleBar( this.$refs.req );
			}
		},
		mounted() {
			this.initScrollbars();
		},
		computed: {},
		components: {
			usrItem
		}
	}
</script>

<style scoped="" lang="scss">

	@import "../../assets/scss/variables";

	.tab {
		&__menu {
			li {
				&:last-of-type {
					a {

					}
				}
			}
			a {
				text-transform: uppercase;
			}
		}
	}

	.search {
		font-size: 14px;
		padding-top: 15px;
		padding-bottom: 15px;

		.row {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.input-wrap {
			flex: 1 1 auto;
		}

		.favs {
			color: inherit;
			flex: 0 0 auto;
		}

		label {
			position: absolute;
			top: 10px;
			left: 0;
			color: $placeholder-color;
		}

		input {
			width: 100%;
			appearance: none;
			border: none;
			background: none;
			padding: 10px 0 10px 20px;

			&:focus {
				outline: none;
			}
		}
	}

	@media all and (max-width: 1366px) {

	}

</style>
