<template>
	<div class="ci-especialistahome">
		
		<div class="ci-especialistahome__container">
			<div class="ci-especialistahome__content">
				<h2>Você é um especialista?</h2>
				<p>Venha fazer parte da nossa plataforma e atenda diversos clientes com total segurança. Cadastre-se agora e monte seu consultório virtual na <br> <strong>YoouLife</strong>.</p>
				<router-link to="/sou-especialista">
					<button>
						Saiba mais
					</button>
				</router-link>
			</div>
			<img class="ci-especialistahome__screen" :src="publicPath + 'images/souespecialista.png'" alt="">
			
			
		</div>
	</div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.ci-especialistahome{
	background: #ffeff4!important;
	position: relative;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	position: relative;
	transition: opacity .6s;
	z-index: 30;
	@include grid-container;

	&__container{
		width: 100%;
		@include outer-container;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5vh 0;
	}
	&__content{
		@include grid-column(6);	

		h2{
			margin: 16px 0;
			font-size: 28px;
			line-height: 115%;
			text-align: left;
			font-weight: bold;
			color: #ea3c70;
			letter-spacing: -0.2px;
		}
		p{
			color: #384c73;
			font-size: 16px;
			font-weight: 400;
			max-width: 314px;
			line-height: 152%;
			margin-bottom: 24px;

			strong{
				color: #ea3c70;
			}
		}
		button{
			border: solid 2px #ea3c70;
			font-size: 11px;
			color: #ea3c70;
			cursor: pointer;
			padding: 9px 14px;
			border-radius: 4px;
			background: transparent;

			&:hover{
				background: #ea3c70;
				color: #ffffff;
			}
		}
	}
	&__screen{
		@include grid-column(6);
		pointer-events: none;
	}

	@include grid-media($g-tablet-up){

	}
	@include grid-media($g-desktop-up) {
		.ci-especialistahome{
			&__content{
				@include grid-column(5);
				@include grid-push(1);
			}
			&__screen{
				@include grid-column(6);
			}
		}
	}
}
</style>
