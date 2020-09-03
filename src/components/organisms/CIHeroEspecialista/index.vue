<template>
  <div class="ci-heroespecialista">
    <div class="ci-heroespecialista__container">
      <div class="ci-heroespecialista__content">
        <h2 class="ci-heroespecialista__title ci-heroespecialista__animate" type="title">{{ title }}</h2>
        <h3 class="ci-hero__text ci-hero__animate" type="lead" v-html="content"></h3>
        <button>Cadastre-se gratuitamente</button>
      </div>
    </div>
    <div class="scrolldown">
      <img :src="publicPath + 'images/scrolldown.svg'" />
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
      default:
        "Transforme a vida de pessoas que buscam diariamente por saúde emocional.",
    },
    content: {
      type: String,
      default: "Crie seu consultório virtual e conquiste mais clientes.",
    },
  },
};
</script>

<style lang="scss">
.ci-heroespecialista {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  background: url(images/hero3.jpg) no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  @include grid-container;
  background-size: cover;
  background-position: 42%;

  .scrolldown {
    width: 23px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    display: none;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
    @include outer-container;
    text-align: center;
    padding: 13vh 0;
    color: #fff;

    h2 {
      font-size: 22px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }

    h3 {
      color: #ffffff;
      font-size: 13px;
      font-weight: 400;
      width: 71%;
      line-height: 150%;
      margin: 17px auto;
    }
    button {
      padding: 13px 20px;
      border-radius: 4px;
      background: #eb3c70;
      color: #fff;
      border: none;
      outline: none;
      font-family: "Montserrat";
      font-size: 12px;
      cursor: pointer;

      &:hover{
        color: #eb3c70;
        background: #fff;
      }
    }
  }

  &__content {
    @include grid-column(6);
    margin-left: 0 !important;
  }
  &__title {
    margin: 0;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
  }
  &__text {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    width: 71%;
    line-height: 150%;
    margin: 17px auto;
  }

  @include grid-media($g-tablet-up) {
    .ci-heroespecialista {
      &__container {
        padding: 17vh 0;
      }
      &__title {
      }
      &__content {
        @include grid-column(7);
      }
      .searching {
        max-width: none;
        margin: 0 auto;
      }
    }
  }

  @include grid-media($g-desktop-up) {
    .scrolldown {
      display: block;
    }
    .ci-heroespecialista {
      &__container {
        padding: 30.5vh 0;
      }
      &__content {
        h2 {
          font-size: 27px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }

        h3 {
          font-size: 15px;
          width: auto;
          font-weight: lighter;
          font-stretch: normal;
          font-style: normal;
          line-height: 140%;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
