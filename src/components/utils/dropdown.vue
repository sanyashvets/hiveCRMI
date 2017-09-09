<template>
	<div class="dropdown" :class="{open}" v-clickaway="closeMenu">
		<div class="dropdown__btn" @click="toggleMenu()">
			<slot name="button"></slot>
		</div>

		<ul class="dropdown__menu list-unstyled">
			<slot name="menu"></slot>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				open: false
			}
		},
		methods: {
			toggleMenu() {
				this.open = !this.open;
			},
			closeMenu() {
				if ( this.open ) this.open = false;
			}
		},
		computed: {},
		components: {}
	}
</script>

<style scoped="" lang="scss">

	.dropdown {
		position: relative;

		&__right {
			.dropdown__menu {
				left: auto;
				right: 0;
			}
		}

		&.open {
			.dropdown__menu {
				display: block;
			}
		}

		&__btn {
			cursor: pointer;
		}

		&__menu {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			border-radius: 4px;
			background-color: #ffffff;
			min-width: 100%;
			box-shadow: 1px 1px 3px 0 rgba(#000, .4);
			z-index: 20;
			> li {
				display: block;
				a {
					display: block;
					padding: 10px 15px;
					color: inherit;
				}

				&:hover {
					background-color: #E1E1E1;
				}
			}
		}
	}

</style>
