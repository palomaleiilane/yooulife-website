import { storiesOf } from '@storybook/vue'
import CIApps from './index'

const style = {
	container: {}
}

storiesOf('Organism - ci-apps', module)
	.add('default', () => ({
		components: { 'ci-apps': CIApps },
		data: () => ({ style: style }),
		template: `
			<ci-apps />
		`
	}))
