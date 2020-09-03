<template>
	<div class="ci-especialistapage">
		<ci-heroespecialista
			ref="heroespecialista"
			id="heroespecialista"
			class="ci-heroespecialista"
		/>
		<ci-especialistadobra2
			ref="especialistadobra2"
			id="especialistadobra2"
			class="ci-especialistadobra2"
		/>
		<ci-especialistadobra3
			ref="especialistadobra3"
			id="especialistadobra3"
			class="ci-especialistadobra3"
		/>
		<ci-especialistadobra4
			ref="especialistadobra4"
			id="especialistadobra4"
			class="ci-especialistadobra4"
		/>
		<ci-especialistadobra5
			ref="especialistadobra5"
			id="especialistadobra5"
			class="ci-especialistadobra5"
		/>
		<ci-especialistasteps
			ref="especialistasteps"
			id="especialistasteps"
			class="ci-especialistasteps"
		/>
		<ci-especialistadobra6
			ref="especialistadobra6"
			id="especialistadobra6"
			class="ci-especialistadobra6"
		/>
		<ci-especialistadepoimentos
			ref="especialistadepoimentos"
			id="especialistadepoimentos"
			class="ci-especialistadepoimentos"
		/>
		<ci-especialistadobra7
			ref="especialistadobra7"
			id="especialistadobra7"
			class="ci-especialistadobra7"
		/>
		<ci-newsletterespecialista
			ref="newsletterespecialista"
			id="newsletterespecialista"
			class="ci-newsletterespecialista"
		/>
	</div>
</template>

<script>
import CIHeroEspecialista from '@/components/organisms/CIHeroEspecialista'
import CIEspecialistaDobra2 from '@/components/organisms/CIEspecialistaDobra2'
import CIEspecialistaDobra3 from '@/components/organisms/CIEspecialistaDobra3'
import CIEspecialistaDobra4 from '@/components/organisms/CIEspecialistaDobra4'
import CIEspecialistaDobra5 from '@/components/organisms/CIEspecialistaDobra5'
import CIEspecialistaSteps from '@/components/organisms/CIEspecialistaSteps'
import CIEspecialistaDobra6 from '@/components/organisms/CIEspecialistaDobra6'
import CIEspecialistaDepoimentos from '@/components/organisms/CIEspecialistaDepoimentos'
import CIEspecialistaDobra7 from '@/components/organisms/CIEspecialistaDobra7'
import CINewsletterEspecialista from '@/components/organisms/CINewsletterEspecialista'

export default {
	components: {
		'ci-heroespecialista': CIHeroEspecialista,
		'ci-especialistadobra2': CIEspecialistaDobra2,
		'ci-especialistadobra3': CIEspecialistaDobra3,
		'ci-especialistadobra4': CIEspecialistaDobra4,
		'ci-especialistadobra5': CIEspecialistaDobra5,
		'ci-especialistasteps': CIEspecialistaSteps,
		'ci-especialistadobra6': CIEspecialistaDobra6,
		'ci-especialistadepoimentos': CIEspecialistaDepoimentos,
		'ci-especialistadobra7': CIEspecialistaDobra7,
		'ci-newsletterespecialista': CINewsletterEspecialista
	},

	props: {		
		heroespecialista: {
			type: Object,
			default: () => ({})
		},
		especialistadobra2: {
			type: Object,
			default: () => ({})
		},
		especialistadobra3: {
			type: Object,
			default: () => ({})
		},
		especialistadobra4: {
			type: Object,
			default: () => ({})
		},
		especialistadobra5: {
			type: Object,
			default: () => ({})
		},
		especialistadobra6: {
			type: Object,
			default: () => ({})
		},
	},
}
</script>

<style lang="scss">
#newsletter_home{
	margin-top: -1px;
}
</style>
