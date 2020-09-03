<template>
	<div class="ci-apps">

		<div class="">
		
			<div class="ci-apps__list">
				<ci-application
					class="ci-apps__application ci-apps__animate"
					v-for="(app, index) in apps"
					:key="index"
					:descri="app.descri"
					:brands="app.brands"
					:content="app.content"

				/>
			</div>			
		</div>
	</div>
</template>

<script>
import CIApplication from '@/components/molecules/CIApplication'
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	components: {
		'ci-application': CIApplication
	},

	props: {
		title: {
			type: String,
			default: 'Itens'
		},
		content: {
			type: String,
			default: 'Curabitur libero augue, convallis ac elit non, faucibus mollis nisi. Maecenas venenatis aliquam ipsum, sed interdum tellus fringilla eu. Cras gravida tempor euismod. Integer et condimentum ipsum, vel maximus urna.'
		},
		apps: {
			type: Array,
			default: () => ([
				{}, {}, {}, {}
			])
		},
		initialized: {
			type: Boolean,
			default: true
		}
	},


	methods: {
	}
}
</script>

<style lang="scss">
.ci-apps{
	position: relative;
	display: flex;
	height: 100%;
	&__container{
		transition: opacity .6s;
		margin-bottom: 15px;
	}
	&__content{
		margin-bottom: 24px;
	}
	&__title{
		margin-bottom: 8px;
		width: 100%;
	}
	&__application{
		background: #384c73;
		box-sizing: border-box;
		padding: 0;
		margin: 0!important;
		border-radius: 0;
	}
	&__shape{
		position: absolute;
		top: -300px;
		left: 50%;
		transform: translateX(-55%);
		z-index: -1;
	}

	@include grid-media($g-tablet-up) {
		.ci-apps{
			&__application{
				@include grid-column(12)
			}
		}
	}

	@include grid-media($g-desktop-up){
		.ci-apps{
			&__application{
				top: 0;
				position: relative;
				@include grid-column(12);

				&:first-child{
					width: 100%;
					display: flex;
					flex-flow: row;
				}
				&:nth-child(3){
					width: 100%;
					display: flex;
					flex-flow: row;
				}
				&:nth-child(2){
					width: 100%;
					display: flex;
					flex-flow: row-reverse;
				}
			
			}
			
		}
	}

	&.is-idle{
		.ci-apps{
			&__container{
				opacity: 0;
			}
		}
	}
}
</style>
