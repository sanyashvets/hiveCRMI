<template>
	<div class="msg flex p-x-15">
		<div class="msg__ava">
			<img class="img__responsive img__rounded" :src="msg.user.avatar" :alt="`Аватар ${msg.user.name}`">
		</div>
		<div class="msg__info">
			<p class="name" :class="{highlight: msg.user.id === myID}">{{msg.user.name}}</p>
			<a v-if="msg.soc" :href="msg.soc.link" class="url"><i class="fa fa-vk" aria-hidden="true"></i>{{msg.soc.name}}</a>
			<p class="text">
				{{msg.message}}
			</p>
		</div>
		<div class="date">
			<i class="fa fa-clock-o" aria-hidden="true"></i> {{date}}
		</div>
	</div>
</template>

<script>

	import moment from 'moment'

	export default {
		props: {
			msg: {
				type: Object,
				required: true
			}
		},
		data() {
			return {}
		},
		methods: {},
		computed: {
			/**
			 * Получить дату сообщения
			 *
			 * @returns {string}
			 */
			date() {
				return moment( this.msg.time ).format( 'lll' );
			},
			/**
			 * Получить ИД пользователя в системе
			 *
			 * @returns {number}
			 */
			myID() {
				return 2; // return this.$store.getters.user.id если бы было хранилище, а пока обойдемся
			}
		},
		components: {}
	}
</script>

<style lang="scss" scoped="">

	@import "../../../assets/scss/variables";

	$padding: 10px;

	.msg {
		position: relative;
		padding-top: $padding;
		padding-bottom: $padding;
		align-items: flex-start;

		&:nth-child(even) {
			background-color: #f8f8f8;
		}

		&:first-of-type {
			padding-top: 0;

			.date {
				top: 0;
			}
		}
		&__ava {
			width: 60px;
			flex: 0 0 60px;
		}

		&__info {
			flex: 1 1 auto;
			margin-left: 15px;

			.name {
				font-family: 'LatoBlack', 'sans-serif';
				margin-bottom: 5px;

				&.highlight {
					color: $primary-color;
				}
			}

			.url {
				font-size: 12px;
				.fa {
					margin-right: 10px;
				}
			}

			.text {
				line-height: 1.3;
				margin-top: 15px;
			}
		}

		a {
			color: inherit;
		}

		.date {
			position: absolute;
			top: $padding;
			right: 15px;
			font-size: 12px;
			color: #d3d3d3;
		}
	}

	@media all and (max-width: 1366px) {

		.msg {
			&__info {
				.text {
					font-size: 14px;
				}
			}
		}

	}

</style>
