<template>
	<div class="ci-landing">
		<ci-hero
			ref="home"
			id="about"
			class="ci-landing__hero"
			:initialized="true"
			:title="hero.title"
			:content="hero.content"
		/>
		<ci-solutions
			ref="solutions"
			id="solutions"
			class="ci-landing__solutions"
			:title="solutions.title"
			:content="solutions.content"
			:solutions="solutions.items"
		/>
		<ci-apps
			ref="apps"
			id="apps"
			class="ci-landing__apps"
			:title="apps.title"
			:content="apps.content"
			:apps="apps.items"
		/>
		<ci-clientes
			ref="clientes"
			id="clientes"
			class="ci-clientes__apps"
			:title="clientes.title"
			:content="clientes.content"
			:items="clientes.items"
		/>
		<ci-planos
			ref="planos"
			id="planos"
			class="ci-planos__landing"
			:title="planos.title"
			:content="planos.content"
			:mensais="planos.mensal"
			:trimestral="planos.trimestral"
		/>
		<ci-paraespecialista
			ref="especialista_home"
			id="especialista_home"
			class="ci-especialista_home"
		/>
		<ci-newsletter
			ref="newsletter"
			id="newsletter_home"
		/>
	</div>
</template>

<script>
import CIHero from '@/components/organisms/CIHero'
import CISolutions from '@/components/organisms/CISolutions'
import CIApps from '@/components/organisms/CIApps'
import CIClientes from '@/components/organisms/CIClientes'
import CIPlanos from '@/components/organisms/CIPlanos'
import CIEspecialistaHome from '@/components/organisms/CIEspecialistaHome'
import CINewsletterHome from '@/components/organisms/CINewsletterHome'

export default {
	components: {
		'ci-hero': CIHero,
		'ci-solutions': CISolutions,
		'ci-apps': CIApps,
		'ci-clientes': CIClientes,
		'ci-planos': CIPlanos,
		'ci-paraespecialista': CIEspecialistaHome,
		'ci-newsletter': CINewsletterHome
	},

	props: {
		sending: {
			type: Boolean,
			default: false
		},
		hero: {
			type: Object,
			default: () => ({})
		},
		solutions: {
			type: Object,
			default: () => ({})
		},
		apps: {
			type: Object,
			default: () => ({})
		},
		clientes: {
			type: Object,
			default: () => ({})
		},
		planos: {
			type: Object,
			default: () => ({})
		},
	},

	data: () => ({
		active: null,
		previous: null,
		initialized: []
	}),

	watch: {
		
	},

	mounted() {
		this.active = this.selected
	}
}
</script>

<style lang="scss">

</style>
