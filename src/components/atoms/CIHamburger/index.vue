<template>
	<button class="ci-hamburger"
		:class="{
			'is-active': value
		}"
		@click="$emit('click', $event)"
	>
		<span class="fas fa-bars">
		</span>
	</button>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.ci-hamburger{
	width: 44px;
	height: 44px;
	color: $c-darkgray;
	background: transparent;
	font-size: 24px;
	border: 0;
	cursor: pointer;
	line-height: 70%;
	outline: none;

	&.is-active{
		background: $t-primary;
	}
}
</style>
