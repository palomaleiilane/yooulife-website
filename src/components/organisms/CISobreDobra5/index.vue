<template>
  <div class="ci-sobredobra5">
    <div class="imgbg">
      <img :src="publicPath + 'images/dobra5.jpg'" />
    </div>
    <div class="content">
      <h2 class="title">{{title}}</h2>
      <p>{{content}}</p>
      <button>Saiba mais</button>
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
      default: "Carreira",
    },
    content: {
      type: String,
      default:
        "Venha fazer parte do nosso time de profissionais dispostos a utilizar a inovação para mudar a vida das pessoas. Trabalhe conosco. ",
    },
  },
};
</script>

<style lang="scss">
.ci-sobredobra5 {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  background: #ffffff;
  @include grid-container;

  .content {
    text-align: center;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
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
    max-width: 389px;
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
  button {
    border: solid 2px #ea3c70;
    border-radius: 6px;
    margin: 0 auto;
    display: block;
    background: transparent;
    color: #ea3c70;
    padding: 12px 20px;
    font-size: 11px;
    letter-spacing: 0.2px;
    cursor: pointer;
    font-family: "Montserrat";
    outline: none;

    &:hover {
      background: #ea3c70;
      color: #fff;
    }
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
  .content {
    text-align: center;
    width: 50%!important;
    padding: 15px 0!important;
    margin-bottom: 0;
  }
  .imgbg {
    width: 50%;
    line-height: 0;
    padding: 0;
    margin: 0;
    height: auto!important;

    img {
      width: 100%;
    }
  }

  @include grid-media($g-desktop-up) {
  }
}
</style>
