<template>
	<ci-souespecialistapage
	/>
</template>

<script>
import CISouEspecialistaPage from '@/components/templates/CISouEspecialistaPage'
import { mapGetters } from 'vuex'

export default {
	components: {
		'ci-souespecialistapage': CISouEspecialistaPage
	},

	props: {
		scroll: {
			type: Number,
			default: undefined
		}
	},

	computed: {
		...mapGetters({
			// sobredobra2: 'page/getSobreDobra2',	
		})
	}
}
</script>
