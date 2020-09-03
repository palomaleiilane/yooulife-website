<template>
	<div class="ci-clientes">
	
		
		<div class="contents">
			<h2>{{descri}}</h2>
			<h3>{{content}}</h3>
		</div>	
	
	

	</div>


</template>

<script>

export default {
	components: {
	},

	props: {
		descri: {
			type: String,
			default: ''
		},
		content: {
			type: String,
			default: 'Curabitur porttitor eros vel mauris vulputate fringilla. Maecenas posuere libero ac purus mattis, non vulputate leo dictum. Phasellus id quam molestie, mattis magna vel, porttitor eros.'
		},
		description: {
			type: String,
			default: 'Some coming from CMS'
		},
		products: {
			type: Array,
			default: () => [
				{}, {}, {}
			]
		},
		inline: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.ci-application{
	margin-left: 0px;
	display: flex;
	flex-flow: column;

	&__brands{
		width: 50%;
    margin: 0;
    padding: 0;
    line-height: 0;
		img{
			width: 100%;
			margin: 0;
			padding: 0;
			line-height: 0;
		}
	}
	.contents{
		width: 50%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;

		h2{
			width: 75%;
		}
		h3{
			width: 75%;
		}
	}
}
</style>
