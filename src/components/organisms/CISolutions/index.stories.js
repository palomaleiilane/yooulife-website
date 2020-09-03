import { storiesOf } from '@storybook/vue'
import CISolutions from './index'

const style = {}

storiesOf('Organism - ci-solutions', module)
	.add('primary', () => ({
		components: { 'ci-solutions': CISolutions },
		data: () => ({ style}),
		template: `
			<ci-solutions
				theme="primary"
			/>
		`
	}))
