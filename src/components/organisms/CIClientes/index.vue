<template>
  <div class="ci-clientes">
    <div class="ci-clientes__container">
      <div class="ci-clientes__content ci-clientes__animate">
        <h2 v-html="title"></h2>
      </div>
      <div class="ci-clientes__items">
        <VueSlickCarousel :arrows="true">
          	<div v-for="c in items" class="depoimento" v-bind:key="c.index">
			  <h3>{{c.title}}</h3>
			  <p>{{c.description}}</p>
			</div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { TweenMax, Power2, Elastic } from "gsap/TweenMax";

export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    title: {
      type: String,
      default: "Default",
    },
    content: {
      type: String,
      default: "Default",
    },
    items: {
      type: Array,
      default: () => [{}, {}, {}, {}, {}, {}],
    },
    initialized: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    animated: true,
  }),

  methods: {
    
  },
};
</script>

<style lang="scss">
.ci-clientes {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  padding: 12vh 0 14vh 0;

  @include grid-container;

  &__container {
    width: 100%;
    @include outer-container;
  }
  &__content {
    @include grid-column(6);
    margin: 0 auto !important;
    float: none !important;
  }
  h2 {
    margin: 16px 0;
    font-size: 28px;
    line-height: 115%;
    text-align: center;
    font-weight: bold;
    color: #ea3c70;
    letter-spacing: -0.2px;
	margin-bottom: 7vh;
  }
	.depoimento{
		max-width: 600px;
		background: #ea3c70;
		border-radius: 17px;
		outline: none;
		text-align: center;
		padding: 10px 30px;
		color: #fff;

		h3{
			font-size: 20.8px;
			font-weight: 500;
			margin-top: 12px;
		}
		p{
			line-height: 151%;
			font-size: 15px;
		}
	}
	.slick-initialized .slick-slide {
		display: flex!important;
		justify-content: center;
	}
	.slick-prev{
		left: 0;
		z-index: 9999;
	}
	.slick-next{
		right: 0;
	}
	.slick-prev:before {
		background-image: url('images/arrow.png');
		background-size: 40px 40px;
		display: inline-block;
		width: 40px; 
		height: 40px;
		content:"";
		transform: rotate(180deg);
	}
	.slick-next:before {
		background-image: url('images/arrow.png');
		background-size: 40px 40px;
		display: inline-block;
		width: 40px; 
		height: 40px;
		content:"";
	}
  @include grid-media($g-tablet-up) {
    .ci-clientes {
      &__container {
      }
      &__content {
        @include grid-column(10);
      }
    }
  }

  @include grid-media($g-desktop-up) {
    .ci-clientes {
    }
  }
}
</style>
