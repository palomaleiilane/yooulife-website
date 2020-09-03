import { storiesOf } from '@storybook/vue'
import CIHamburger from './index'

const style = {}

storiesOf('Atom - ci-hamburger', module)
	.add('default', () => ({
		components: { 'ci-hamburger': CIHamburger },
		data: () => ({ style}),
		template: `
			<ci-hamburger>
			</ci-hamburger>
		`
	}))
