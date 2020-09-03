<template>
	<ci-landing
		:hero="home"
		:solutions="solutions"
		:apps="apps"		
		:clientes="clientes"
		:planos="planos"
	/>
</template>

<script>
import CILanding from '@/components/templates/CILanding'
import { mapGetters } from 'vuex'

export default {
	components: {
		'ci-landing': CILanding
	},

	props: {
	},

	computed: {
		...mapGetters({
			home: 'page/getHome',
			solutions: 'page/getSolutions',
			apps: 'page/getApps',
			clientes: 'page/getClientes',
			planos: 'page/getPlanos'
		})
	},

}
</script>
