import { storiesOf } from '@storybook/vue'
import CIAside from './index'

const style = {
	container: {}
}

storiesOf('Organism - ci-aside', module)
	.add('default', () => ({
		components: { 'ci-aside': CIAside },
		data: () => ({ style: style }),
		template: `
			<ci-aside />
		`
	}))
