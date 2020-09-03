import { storiesOf } from '@storybook/vue'
import CIApplication from './index'

const style = {
	background: 'white',
	padding: '24px'
}

storiesOf('Molecule - ci-application', module)
	.add('default', () => ({
		components: { 'ci-application': CIApplication },
		data: () => ({ style: style }),
		template: `
			<ci-application :style="style" />
		`
	}))
	.add('inline', () => ({
		components: { 'ci-application': CIApplication },
		data: () => ({ style: style }),
		template: `
			<ci-application :inline="true" :style="style" />
		`
	}))

