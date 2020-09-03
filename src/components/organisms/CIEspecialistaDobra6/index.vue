<template>
  <div class="ci-especialistadobra6">
    <div class="content">
      <img :src="publicPath + 'images/grow.svg'" />
      <p>{{content}}</p>
      <button>Cadastre-se</button>
    </div>
    <div class="figure">
      <img :src="publicPath + 'images/esp_dobra6.jpg'" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Power2, Elastic } from "gsap/TweenMax";

export default {
  components: {},
  props: {
    content: {
      type: String,
      default:
        "Pensando em ajudar no crescimento da sua carreira, desenvolvemos o programa YoouGrow. Com base no desempenho com seus pacientes, consumo de conteúdos de desenvolvimento profissional e outras atividades, você vai ganhando destaque na plataforma e poderá atender nossos pacientes corporativos.",
    },
  },
};
</script>

<style lang="scss">
.ci-especialistadobra6 {
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  @include grid-container;
  background: #ea3c70;

  width: 100%;
  flex-flow: row;

  .content {
    @include grid-column(6);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
      max-width: 350px;
    }
    p {
      color: #ffffff;
      font-size: 16px;
      font-weight: 300;
      max-width: 339px;
      line-height: 164%;
      margin-bottom: 24px;
    }
    button {
      border: solid 2px #fff;
      font-size: 11.8px;
      color: #ea3c70;
      cursor: pointer;
      padding: 9px 25px;
      border-radius: 4px;
      background: #fff;
      font-family: "Montserrat";
      letter-spacing: -0.5px;
      font-weight: 600;
      outline: none;
      &:hover {
        background: transparent;
        color: #ffffff;
      }
    }
  }
  .figure {
    width: 50%;
    margin-bottom: 0;
    padding-bottom: 0;
    line-height: 0;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @include grid-media($g-tablet-up) {
    height: 80vh;

    .content {
      width: 50% !important;

      p {
        margin-top: 33px;
      }
    }
  }

  @include grid-media($g-desktop-up) {
  }
}
</style>
