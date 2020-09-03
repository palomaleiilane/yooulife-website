<template>
	<ci-faq
	/>
</template>

<script>
import CIFaq from '@/components/templates/CIFaq'
import { mapGetters } from 'vuex'

export default {
	components: {
		'ci-faq': CIFaq
	},

	computed: {
		...mapGetters({
		})
	}
}
</script>
