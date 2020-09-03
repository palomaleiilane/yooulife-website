<template>
	<ci-sobre
		:sobredobra2="sobredobra2"
		:sobredobra3="sobredobra3"	
		:sobredobra4="sobredobra4"	
	/>
</template>

<script>
import CISobre from '@/components/templates/CISobre'
import { mapGetters } from 'vuex'

export default {
	components: {
		'ci-sobre': CISobre
	},

	props: {
		scroll: {
			type: Number,
			default: undefined
		}
	},

	computed: {
		...mapGetters({
			sobredobra2: 'page/getSobreDobra2',			
			sobredobra3: 'page/getSobreDobra3',
			sobredobra4: 'page/getSobreDobra4'
		})
	}
}
</script>
