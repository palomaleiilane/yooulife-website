import { storiesOf } from '@storybook/vue'
import CINavigation from './index'

const options = [
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

const style = {
	margin: '24px'
}

storiesOf('Molecule - ci-navigation', module)
	.add('default', () => ({
		components: { 'ci-navigation': CINavigation },
		data: () => ({
			active: '#home',
			options: options,
			style: style
		}),
		methods: {
			onChange(value) {
				console.log(value)
			}
		},
		template: `
			<ci-navigation :style="style" v-model="active" :options="options" @selected="onChange">
			</ci-navigation>
		`
	}))

	.add('inline', () => ({
		components: { 'ci-navigation': CINavigation },
		data: () => ({
			active: '#home',
			options: options,
			style: style
		}),
		methods: {
			onChange(value) {
				console.log(value)
			}
		},
		template: `
			<ci-navigation v-model="active" :inline="true" :style="style" :options="options" @selected="onChange">
			</ci-navigation>
		`
	}))
