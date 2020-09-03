import Vue from 'vue'
import Router from 'vue-router'
import CIHome from '@/components/pages/CILanding'
import CISobre from '@/components/pages/CISobre'
import CISouEspecialista from '@/components/pages/CISouEspecialista'
import CIFaq from '@/components/pages/CIFaq'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: CIHome
		},
		{
			path: '/sobre',
			name: 'Sobre',
			component: CISobre
		},
		{
			path: '/sou-especialista',
			name: 'SouEspecialista',
			component: CISouEspecialista
		}, {
			path: '/faq',
			name: 'FAQ',
			component: CIFaq
		}
	],
	scrollBehavior(to, from, savedPosition) {
		const container = document.querySelector('.ci-app__body')

		container.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
})

export default router
