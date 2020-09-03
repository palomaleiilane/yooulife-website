<template>
	<div class="ci-loading"
		:class="[
			`ci-loading--${state}`
		]"
	>
		<ci-leaf class="ci-loading__leaf"
			:theme="theme"
			:filled="false"
		/>

		<div class="ci-loading__progress">
			<ci-leaf class="ci-loading__leaf ci-loading__leaf--fill"
				:theme="theme"
				:mask="animatedProgress"
			/>
		</div>
	</div>
</template>

<script>
import CILeaf from '@/components/atoms/CILeaf'
import { TweenMax, Power2 } from 'gsap/TweenMax'

export default {
	components: {
		'ci-leaf': CILeaf
	},

	props: {
		theme: {
			type: String,
			default: 'primary' // primary | accent | warn
		},
		state: {
			type: String,
			default: 'idle' // idle | loading | done
		}
	},

	data: () => ({
		progress: 0,
		tweenedProgress: 0,
		duration: 5
	}),

	computed: {
		animatedProgress: function() {
			return this.tweenedProgress.toFixed(0);
		}
	},

	watch: {
		state(value) {
			switch(value) {
				case 'idle':
					this.progress = 0
					this.duration = .5
					break
				case 'loading':
					this.progress = 70
					this.duration = 10
					break
				case 'done':
					this.progress = 100
					this.duration = .5
					break
			}
		},

		progress(value) {
			TweenMax.to(this.$data, this.duration, {
				tweenedProgress: value,
				ease: Power2.easeOut
			})
		},
	},
}
</script>

<style lang="scss">
.ci-loading{
	position: relative;
	&__leaf{
		width: 200px;
		height: 200px;
	}
	&__progress{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
}
</style>
