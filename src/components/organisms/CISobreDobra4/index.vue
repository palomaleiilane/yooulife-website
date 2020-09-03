<template>
  <div class="ci-sobredobra4">
    <div class="content">
      <h2 class="title">{{title}}</h2>
      <p>{{content}}</p>
    </div>

    <div class="imgbg">
      <img :src="publicPath + 'images/dobra4.jpg'" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Power2, Elastic } from "gsap/TweenMax";

export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "Contamos com você",
    },
    content: {
      type: String,
      default:
        "Somos uma plataforma que conecta pessoas a psicóloga(o)s por meio de uma plataforma de psicoterapia online com toda segurança, inteligência e confiabilidade. Nossa missão é transformar a vida das pessoas criando oportunidades para desenvolver uma saúde emocional. ",
    },
  },
};
</script>

<style lang="scss">
.ci-sobredobra4 {
  position: relative;
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  background: #ffffff;
  @include grid-container;

  .content {
    text-align: center;
    padding:15px;
  }

  .title {
    margin: 16px 0;
    font-size: 25px;
    line-height: 115%;
    text-align: center;
    font-weight: bold;
    color: #ea3c70;
    letter-spacing: -0.2px;
    margin-bottom: 4vh;
  }
  p {
    max-width: 462px;
    width: 100%;
    font-weight: 300;
    line-height: 175%;
    margin: 0 auto;
    text-align: center;
    font-size: 15px;
    font-family: "Montserrat";
    font-weight: 400;
    color: #333;
    margin-bottom: 20px;
  }
  .imgbg {
    height: 43vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
  }
}

@include grid-media($g-tablet-up) {
  .ci-sobredobra4 {
    flex-flow: row;
    .content {
      width: 50%;
      padding: 0;
    }
    .imgbg {
      width: 50%;
      line-height: 0;
      padding: 0;
      margin: 0;
      height:  auto;

      img {
        width: 100%;
      }
    }
  }
  @include grid-media($g-desktop-up) {
  }
}
</style>
