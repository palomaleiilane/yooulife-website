<template>
  <div class="ci-especialistadobra5">
    <div class="ci-especialistadobra5__container">
      <div class="content">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <button>Criar sua conta</button>
      </div>
      <div class="figure">
        <img :src="publicPath + 'images/esp_dobra5.svg'" alt />
      </div>
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
      default: "Acompanhe seus dados de receita",
    },
    content: {
      type: String,
      default:
        "Criamos um painel interativo onde você consegue visualizar a receita obtida por cada sessão realizada com seus pacientes, dados das sessões (atendidas, reagendadas e canceladas), dentre vários outros indicadores de desempenho.",
    },
  },
};
</script>

<style lang="scss">
.ci-especialistadobra5 {
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  @include grid-container;
  background: #ffeff4;
  padding: 5vh 15px 0;

  &__container {
    width: 100%;
    @include outer-container;
    padding: 0 15px;
    display: flex;
    flex-flow: row-reverse;

    .content {
      @include grid-column(6);
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      justify-content: center;

      h2 {
        margin: 16px 0;
        font-size: 28px;
        line-height: 115%;
        font-weight: bold;
        color: #ea3c70;
        letter-spacing: -0.2px;
      }
      p {
        color: #384c73;
        font-size: 16px;
        font-weight: 400;
        max-width: 337px;
        line-height: 152%;
        margin-bottom: 24px;

        strong {
          color: #ea3c70;
        }
      }
      button {
        border: solid 2px #ea3c70;
        font-size: 11.8px;
        color: #ea3c70;
        cursor: pointer;
        padding: 9px 13px;
        border-radius: 4px;
        background: transparent;
        font-family: "Montserrat";
        letter-spacing: -0.5px;
        font-weight: 600;

        &:hover {
          background: #ea3c70;
          color: #ffffff;
        }
      }
    }
    .figure {
      @include grid-column(6);

      img {
        width: 100%;
      }
    }
  }

  @include grid-media($g-tablet-up) {
    &__container {
      width: 100%;
      @include outer-container;
      padding: 0 15px;
      display: flex;

      .content {
        width: 38%!important;
        margin-right: 7%;
        text-align: right;
        h2 {
          margin: 0 0;
          font-size: 23px;
          line-height: 115%;
          font-weight: bold;
          color: #ea3c70;
          letter-spacing: 0;
          width: 317px;
        }
      }
      .figure {
        @include grid-column(7);
      }
    }
  }

  @include grid-media($g-desktop-up) {
  }
}
</style>
