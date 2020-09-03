import { storiesOf } from '@storybook/vue'
import CIHeader from './index'

storiesOf('Organism - ci-header', module)
	.add('default', () => ({
		components: { 'ci-header': CIHeader },
		data: () => ({
			nav: [
				{
					label: 'Home',
					link: '#home',
					classes: [],
					description: ''
				},
				{
					label: 'Suite',
					link: '#suite',
					classes: [],
					description: ''
				},
				{
					label: 'Lemonade',
					link: 'http://google.com',
					classes: ['hot'],
					description: 'Seja um franqueado'
				},
				{
					label: 'Apps',
					link: '#apps',
					classes: [],
					description: ''
				}
			]
		}),
		template: `
			<ci-header :navigation="nav">
			</ci-header>
		`
	}))


