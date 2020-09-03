<template>
  <div class="ci-planos">
    <div class="ci-planos__container">
      <div class="ci-planos__content ci-planos__animate">
        <h2 v-html="title"></h2>
        <div class="description" v-html="content"></div>
      </div>
      <div class="header_faixas">
        <div class="text-group-field pickup-day choose-time">
          <input
            id="mensal"
            checked="checked"
            name="radio-group"
            type="radio"
            value="faixas_de_precos_mensais"
            class="radio-custom input-group-field"
          />
          <label for="mensal" class="label mensal">Mensal</label>
        </div>
        <div class="text-group-field pickup-day choose-time">
          <input
            id="trimestral"
            name="radio-group"
            type="radio"
            value="faixas_de_precos_trimestrais"
            class="radio-custom input-group-field"
          />
          <label for="trimestral" class="label trimestral">Trimestral</label>
        </div>
      </div>
      <div class="faixas_de_precos_mensais box w-100">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="p in mensais" class="plano" >
            <h3>{{p.titlemensal}}</h3>
            <p>{{p.description}}</p>
            <ul>
              <li>Remarcações ilimitadas</li>
              <li>Chat ilimitado com seu especialista</li>
              <li v-if="p.titlemensal != 'Consulta Individual'">Renovação mensal automática</li>
            </ul>
            <h4 class="preco" v-if="p.preco != ''">
              <small>R$</small>
              {{p.preco}}<span>,00/mês</span>
            </h4>
            <p class="desconto" v-if="p.titlemensal == 'Clássico' ">10% de desconto</p>
            <p class="desconto" v-if="p.titlemensal == 'Essencial' ">12% de desconto</p>
            <p class="desconto" v-if="p.titlemensal == 'Ideal' ">15% de desconto</p>
            
            <div v-if="p.titlemensal != 'Consulta Individual'">
              <a href=""><button>Contrate agora</button></a>
            </div>
            <div v-if="p.titlemensal == 'Consulta Individual'">
              <a href=""><button>Experimente grátis</button></a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="faixas_de_precos_trimestrais box w-100">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="p in trimestral" class="plano">
           <h3>{{p.titletrimestral}}</h3>
            <p>{{p.description}}</p>
            <ul>
              <li>Remarcações ilimitadas</li>
              <li>Chat ilimitado com seu especialista</li>
              <li v-if="p.titletrimestral != 'Consulta Individual'">Renovação mensal automática</li>
            </ul>
            <h4 class="preco" v-if="p.preco != ''">
              <small>R$</small>
              {{p.preco}}<span>,00/mês</span>
            </h4>
            <p class="desconto" v-if="p.titletrimestral == 'Clássico' ">10% de desconto</p>
            <p class="desconto" v-if="p.titletrimestral == 'Essencial' ">12% de desconto</p>
            <p class="desconto" v-if="p.titletrimestral == 'Ideal' ">15% de desconto</p>
            
            <div v-if="p.titletrimestral != 'Consulta Individual'">
              <a href=""><button>Contrate agora</button></a>
            </div>
            <div v-if="p.titletrimestral == 'Consulta Individual'">
              <a href=""><button>Experimente grátis</button></a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { TweenMax, Power2, Elastic } from "gsap/TweenMax";
import $ from "jquery";

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
    mensais: {
      type: Array,
      default: () => [{}, {}, {}, {}, {}, {}],
    },
    trimestral: {
      type: Array,
      default: () => [{}, {}, {}, {}],
    },
    initialized: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            edgeFriction: true,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },

  mounted() {
    $('input[type="radio"]').click(function () {
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".box").not(targetBox).hide();
      $(targetBox).fadeIn("fast").css("display", "block");
    });
  },
};
</script>

<style lang="scss">
.ci-planos {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  padding: 5vh 0 8vh 0;
  background: #ea3c70;

  @include grid-container;
  .faixas_de_precos_trimestrais {
    display: none;
  }
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
    color: #fff;
    letter-spacing: -0.2px;
  }
  .description{
    p{
      font-size: 15px;
      color: #fff;
      text-align: center;
      margin-bottom: 33px;
    }
  }
  .slick-slide {
    flex-flow: row;
    text-align-last: center;
    margin-top: 7vh;
    div {
      width: 100%;
      padding: 0;
    }
  }
  .plano {
    color: #ea3c70;
    border-radius: 17px;
    outline: none;
    text-align: center;
    background: #fff;
    position: relative;
    width: 63%!important;
    float: left;
    /* margin-left: 16px; */
    padding: 17px 0 28px !important;
    margin: 0 auto!important;
    float: none;

    &:after {
      content: "";
      position: absolute;
      left: -8px;
      bottom: 8px;
      height: 99%;
      width: 99%;
      border: solid 2px #9eebc2;
      border-radius: 17px;
      background: transparent;
    }

    h3 {
      font-size: 20.8px;
      font-weight: 500;
      margin: 12px 0;
      font-weight: 600;
    }
    p {
      line-height: 151%;
      font-size: 10px;
      width: 74%;
      margin: 0 auto;
      font-weight: 500;
    }
    ul{
      padding: 0;
      font-size: 10px;
      font-weight: 400;
      margin: 22px 0;

      li{
        background: #fff4f7;
        padding: 6px 0;
        margin: 5px 0;
      }
    }
    .preco{
      font-size: 29px;
      margin: 0;
      line-height: 100%;
      small{
        font-size: 19px;
      }
      span{
        font-size: 18px;
      }
    }
    .desconto{
      background: #ffec9a;
      padding: 3px 0;
      margin: 20px 0;
      width: 100%;
    }
    a{
      z-index: 9999;
      position: relative;
      cursor: pointer;

    }
    button{
      background: #9eebc2;
      font-size: 11px;
      border-radius: 3px;
      color: #059046;
      border: none;
      z-index: 9999;
      cursor: pointer;
      padding: 9px;
      line-height: 100%;

      &:hover{
        background: #ea3c70;
        color: #fff;
      }
    }
  }
  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-prev {
    left: 0;
    z-index: 9999;
  }
  .slick-next {
    right: 25px;
  }
  .slick-prev:before {
    background-image: url("images/arrow.png");
    background-size: 40px 40px;
    display: inline-block;
    width: 40px;
    height: 40px;
    content: "";
    transform: rotate(180deg);
    filter: grayscale(1) brightness(0) invert(1) saturate(0);
  }
  .slick-next:before {
    background-image: url("images/arrow.png");
    background-size: 40px 40px;
    display: inline-block;
    width: 40px;
    height: 40px;
    content: "";
    filter: grayscale(1) brightness(0) invert(1) saturate(0);
  }
  // ===

  .header_faixas {
    display: flex;
    align-items: top;
    justify-content: center;
    flex-flow: row;
    margin: 3.5vh auto 0;
    position: relative;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      opacity: 1;
    }
    .radio-custom:checked ~ label {
      background: #fff;
      border-color: #272727;
      color: #ea3c70 !important;
      font-weight: 600;
      border-radius: 6px;
      padding: 11px 21px;
      box-shadow: 0px 0px 4px #90445c;
      z-index: 9999;
    }
    .label {
      display: block;
      flex: 1;
      font-size: 90%;
      cursor: pointer;
      padding: 5px 12px;
    }
    input[type="radio"] {
      position: absolute;
      opacity: 0;
    }
    .input-group {
      display: block;
    }

    .inner-block {
      position: relative;
      display: flex;
      flex-direction: row-reverse;
    }
    .text-group-field {
      border: none !important;
      color: #fff;
      background: #ff7ea6;
      font-size: 11px;

      &:first-child {
        border-radius: 6px 0 0 6px;
      }
      &:last-child {
        border-radius: 0 6px 6px 0;
      }
    }
    .mensal {
      border-radius: 0 3px 3px 0;
      text-align: center;
      padding: 11px 21px;
    }

    .trimestral {
      border-radius: 3px 0 0 3px;
      text-align: center;
      padding: 11px 21px;
    }
  }
  @include grid-media($g-tablet-up) {
    
    padding: 12vh 0 14vh 0;
    .ci-planos {
      &__container {
      }
      &__content {
        @include grid-column(10);
      }
      
    }
  }

  @include grid-media($g-desktop-up) {
    .plano{
      color: #ea3c70;
      border-radius: 17px;
      outline: none;
      text-align: center;
      background: #fff; 
      position: relative;
      width: 89%!important;
      float: left;
      margin-left: 16px;
      padding: 17px 0 28px!important;
    }
  }
}
</style>
