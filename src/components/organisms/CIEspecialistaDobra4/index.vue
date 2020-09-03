<template>
  <div class="ci-especialistadobra4">   
    <div class="ci-especialistadobra4__container">
      <div class="content">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <button>Criar sua conta</button>
      </div>
      <div class="figure">
        <img :src="publicPath + 'images/esp_dobra4.svg'" />
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
      default: "Tenha mais controle na gestão dos atendimentos",
    },
    content: {
      type: String,
      default: "Facilitamos o seu trabalho com uma área destinada a inserir suas anotações e observações dos seus pacientes e atendimentos realizados. Assim você se mantém organizado e consegue visualizar de forma rápida e prática as informações importantes.",
    },
  },
};
</script>

<style lang="scss">
.ci-especialistadobra4 {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  @include grid-container;
  background: #cee1f2;

  .dobra {
    width: 100%;
    padding: 4vh 0;
    background: #ea3c70;
    text-align: center;
    color: #fff;
    font-weight: 400;

    h2 {
      font-size: 14px;
      width: 83%;
      font-weight: 300;
      margin: 0 auto;
      line-height: 157%;
    }
    .container {
      @include outer-container;
    }
  }

  &__container {
    width: 100%;
    @include outer-container;
    padding: 5vh 15px 0;
    display: flex;
    flex-flow: row;

    .content {
      @include grid-column(6);
      display: flex;
      flex-flow: column;
      align-self: center;
      h2 {
        margin: 16px 0;
        font-size: 28px;
        line-height: 115%;
        text-align: left;
        font-weight: bold;
        color: #ea3c70;
        letter-spacing: -0.2px;
      }
      p {
        color: #384c73;
        font-size: 16px;
        font-weight: 400;
        max-width: 393px;
        line-height: 152%;
        margin-bottom: 24px;
        text-align: left;

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
        width: 125px;

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
      display: flex;
      flex-flow: row;

      .content {
        @include grid-column(6);

        h2 {
          margin: 0 0;
          font-size: 23px;
          line-height: 115%;
          text-align: left;
          font-weight: bold;
          color: #ea3c70;
          letter-spacing: 0;
          width: 317px;
        }
      }
      .figure {
        @include grid-column(6);
      }
    }
  }

  @include grid-media($g-desktop-up) {
    .content {
      @include grid-column(5);
      @include grid-push(1);
      text-align: left;
    }
    .title {
      margin: 16px 0;
      font-size: 27px;
      line-height: 115%;
      text-align: center;
      font-weight: bold;
      color: #ea3c70;
      letter-spacing: -0.2px;
      margin-bottom: 4vh;
    }
  }
}
</style>
