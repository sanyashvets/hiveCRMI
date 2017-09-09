<template>
	<aside class="sb">
		<div class="main-header">
			<button class="menu-btn btn btn__flex">
				<span>
					<i class="fa fa-bars" aria-hidden="true"></i>
				</span>
			</button>
		</div>
		<div class="sb__container">
			<ul class="sb__menu list-unstyled">
				<li class="has-notifications orange" :data-count="notifications.hot"><a href="#"><i class="fa fa-fire" aria-hidden="true"></i></a></li>
				<li class="has-notifications primary" :data-count="notifications.chat"><a href="#"><i class="fa fa-commenting" aria-hidden="true"></i></a></li>
				<li class="active"><a href="#"><i class="fa fa-bell" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-calendar-minus-o" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></a></li>
				<!--
					or we have vue-router installed
					<router-link tag="li" active-class="active"><a></a></router-link>
				-->
			</ul>
		</div>
	</aside>
</template>

<script>
	export default {


		data() {
			return {
				notifications: {
					hot: 300,
					chat: 30
				}
			}
		},
		methods: {},
		computed: {},
		components: {}
	}
</script>

<style scoped="" lang="scss">

	@import '../../assets/scss/variables';

	.main-header {
		.fa {
			color: #ffffff;
			font-size: 20px;
		}
	}

	.menu-btn {
		background-color: #383838;
		height: 100%;
		width: 100%;
		outline: none;
		appearance: none;
		&:active {
			background-color: darken(#383838, 10%);
		}
	}

	.sb {
		height: 100%;
		flex: 0 0 80px;
		color: #ffffff;
		background-color: #606060;

		&__menu {
			> li {
				position: relative;

				&.active {
					background-color: #dcb033;
				}

				&.has-notifications {
					&:after {
						content: attr(data-count);
						position: absolute;
						top: 24px;
						left: 70%;


						font-size: 14px;
						line-height: 1;
						padding: 9px 14px;
						border-radius: 15px;
					}

					a {
						width: 65%;
					}
				}

				&.orange {
					&:after {
						background-color: rgb(255, 91, 0); // здесь всунул свой. Веб не хотел #d86a43 отображать как в псд
					}
				}

				&.primary {
					&:after {
						background-color: $primary-color;
					}
				}

				a {
					color: inherit;
					display: flex;
					justify-content: center;
					padding: 30px 0;
				}

				&:not(.active):hover {
					background-color: rgba(#fff, .2);
				}
			}
			.fa {
				font-size: 23px;
			}
		}
	}

	@media all and (max-width: 1366px) {
		.sb {
			&__menu {
				> li {
					&.has-notifications {
						&:after {
							font-size: 12px;
							padding: 5px 10px;
							left: 60%;
						}
					}
				}
			}
		}
	}
</style>
