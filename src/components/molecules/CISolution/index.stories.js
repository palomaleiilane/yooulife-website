import { storiesOf } from '@storybook/vue'
import CISolution from './index'

const style = {
	background: 'white',
	padding: '24px'
}

storiesOf('Molecule - ci-solution', module)
	.add('primary', () => ({
		components: { 'ci-solution': CISolution },
		data: () => ({ style}),
		template: `
			<ci-solution
				:style="style"
				theme="primary"
			/>
		`
	}))
	.add('accent', () => ({
		components: { 'ci-solution': CISolution },
		data: () => ({ style}),
		template: `
			<ci-solution
				:style="style"
				theme="accent"
			/>
		`
	}))
	.add('warn', () => ({
		components: { 'ci-solution': CISolution },
		data: () => ({ style}),
		template: `
			<ci-solution
				:style="style"
				theme="warn"
			/>
		`
	}))
