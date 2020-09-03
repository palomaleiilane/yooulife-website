<template>
	<header class="ci-header">
		<div class="ci-header__container">
			<ci-brand type="yooulife" class="ci-header__brand" />
			<ci-navigation
				class="ci-header__navigation"
				:value="selected"
				:options="navigation"
				:inline="true"
				@input="$emit('update:selected', $event)"
			/>
			<div>
				<ci-hamburger class="ci-header__hamburger" @click="$emit('menu')" />
			</div>
		</div>
	</header>
</template>

<script>
import CIBrand from '@/components/atoms/CIBrand'
import CINavigation from '@/components/molecules/CINavigation'
import CIHamburger from '@/components/atoms/CIHamburger'

export default {
	props: {
		navigation: {
			type: Array,
			default: undefined
		},
		selected: {
			type: String,
			default: 'home'
		},
		
	},

	components: {
		'ci-brand': CIBrand,
		'ci-navigation': CINavigation,
		'ci-hamburger': CIHamburger
	}
}
</script>

<style lang="scss">
.ci-header{
	background: white;
	position: relative;
	box-shadow: 0 3px 7px rgba(black, .03);
	&__container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 13px 0;
		@include outer-container;
	}
	&__navigation{
		display: none;
	}
	&__brand{
		width: 100px;

		img{
			width: 100%;
			max-width: 200px;
			height: auto;
			margin: 13px 0 0 15px;
		}
	}
	&__hamburger{
		position: absolute;
		top: 50%;
		right: 16px;
		transform: translateY(-50%);
	}

	@include grid-media($g-desktop-up){
		.ci-header{
			&__container{
				padding: 13px 0;
			}
			&__brand{
				width: 155px;
				margin: 8px 0 0;
				flex-shrink: 0;
			}
			&__navigation{
				display: flex;
				justify-content: flex-end;
				margin: 0 8px;
				flex: 1;
			}
			&__hamburger{
				display: none;
			}
			&__lang{
				position: relative;
				top: 0;
				right: 0;
				margin-right: 24px;
				transform: initial;
			}
		}
	}
}
</style>
