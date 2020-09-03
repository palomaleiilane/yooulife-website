import { storiesOf } from '@storybook/vue'
import CILoading from './index'

const style = {
}

storiesOf('Molecule - ci-loading', module)
	.add('default', () => ({
		components: { 'ci-loading': CILoading },
		data: () => ({
			style: style,
			state: 'idle'
		}),
		mounted() {
			setTimeout(() => this.state = 'loading', 2000)
			setTimeout(() => this.state = 'done', 5000)
			setTimeout(() => this.state = 'idle', 10000)
		},
		template: `
			<div :style="style">
				<ci-loading :style="style" :state="state" :progress="50" />
			</div>
		`
	}))

