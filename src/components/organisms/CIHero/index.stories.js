import { storiesOf } from '@storybook/vue'
import CIHero from './index'

const style = {
	hero: {
	}
}

storiesOf('Organism - ci-hero', module)
	.add('primary', () => ({
		components: { 'ci-hero': CIHero },
		data: () => ({ style}),
		template: `
			<ci-hero :style="style.hero" theme="primary">
			</ci-hero>
		`
	}))
