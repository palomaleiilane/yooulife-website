<template>
  <div class="ci-sobredobra3">
    <div class="ci-sobredobra3__container">
      <h3 class="title">{{title}}</h3>
      <p>{{content}}</p>
      <button>Procure um especialista</button>
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
      default: "Quem somos",
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
.ci-sobredobra3 {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  padding: 6vh 0;
  background: #384c73;
  @include grid-container;

  &__container {
    width: 100%;
    @include outer-container;
    padding: 0 15px;

    .title {
      margin: 16px 0;
      font-size: 25px;
      line-height: 115%;
      text-align: center;
      font-weight: 600;
      color: #fff;
      letter-spacing: -0.2px;
      margin-bottom: 4vh;
    }
    p {
      max-width: 765px;
      width: 100%;
      font-weight: 300;
      line-height: 175%;
      margin: 0 auto;
      text-align: center;
      font-size: 15px;
      font-family: "Montserrat";
      color: #fff;
      margin-bottom: 20px;
    }
    button {
      border: solid 2px #fff;
      border-radius: 6px;
      margin: 0 auto;
      display: block;
      background: transparent;
      color: #fff;
      padding: 12px;
      font-size: 11px;
      letter-spacing: 0.2px;
      cursor: pointer;
      font-family: "Montserrat";
      outline: none;

      &:hover {
        background: #fff;
        color: #384c73;
      }
    }
  }

  @include grid-media($g-tablet-up) {
  }

  @include grid-media($g-desktop-up) {
  }
}
</style>
