<template>
	<div class="ci-sobrepage">
		<ci-herosobre
			ref="herosobre"
			id="herosobre"
			class="ci-herosobre"
		/>
		<ci-sobredobra2
			ref="sobredobra2"
			id="sobredobra2"
			class="ci-sobredobra2"
			:title="sobredobra2.title"
			:content="sobredobra2.content"
		/>
		<ci-sobredobra3
			ref="sobredobra3"
			id="sobredobra3"
			class="ci-sobredobra3"
			:title="sobredobra3.title"
			:content="sobredobra3.content"
		/>
		<ci-sobredobra4
			ref="sobredobra4"
			id="sobredobra4"
			class="ci-sobredobra4"
			:title="sobredobra4.title"
			:content="sobredobra4.content"
		/>
		<ci-sobredobra5
			ref="sobredobra5"
			id="sobredobra5"
			class="ci-sobredobra5"
		/>
		<ci-newsletter
			ref="newsletter"
			id="newsletter_home"
		/>
		
	</div>
</template>

<script>
import CIHeroSobre from '@/components/organisms/CIHeroSobre'
import CISobreDobra2 from '@/components/organisms/CISobreDobra2'
import CISobreDobra3 from '@/components/organisms/CISobreDobra3'
import CISobreDobra4 from '@/components/organisms/CISobreDobra4'
import CISobreDobra5 from '@/components/organisms/CISobreDobra5'
import CINewsletterHome from '@/components/organisms/CINewsletterHome'

export default {
	components: {
		'ci-herosobre': CIHeroSobre,
		'ci-sobredobra2': CISobreDobra2,
		'ci-sobredobra3': CISobreDobra3,
		'ci-sobredobra4': CISobreDobra4,
		'ci-sobredobra5': CISobreDobra5,
		'ci-newsletter': CINewsletterHome
	},

	props: {		
		herosobre: {
			type: Object,
			default: () => ({})
		},
		sobredobra2: {
			type: Object,
			default: () => ({})
		},
		sobredobra3: {
			type: Object,
			default: () => ({})
		},
		sobredobra4: {
			type: Object,
			default: () => ({})
		},
		sobredobra5: {
			type: Object,
			default: () => ({})
		}
	},
}
</script>

<style lang="scss">
#newsletter_home{
	margin-top: -1px;
}
</style>
