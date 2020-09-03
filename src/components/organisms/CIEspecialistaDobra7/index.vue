<template>
  <div class="ci-especialistadobra7">
    <div class="ctnr">
      <h1>Funcionalidades do seu Consultório Virtual</h1>
      <h2>Confira os principais recursos que temos disponíveis em nossa plataforma.</h2>

      <div class="column column-left">
        <div class="item">
          <img :src="publicPath + 'images/cam4.svg'" />
          <p>Videochamadas <br> Seguras</p>
        </div>
        <div class="item">
          <img :src="publicPath + 'images/cam3.svg'" />
          <p>Emissão de <br> Recibos</p>
        </div>
        <div class="item">
          <img :src="publicPath + 'images/cam1.svg'" />
          <p>Agenda de Atendimentos Integrada</p>
        </div>
        <div class="item">
          <img :src="publicPath + 'images/cam2.svg'" />
          <p>Perfil Profissional Exibido na Plataforma</p>
        </div>
      </div>
      <div class="column centering">
        <button>Crie seu consultório agora</button>
        <img :src="publicPath + 'images/hands.svg'" />
      </div>
      <div class="column column-right">
        <div class="item">
          <img :src="publicPath + 'images/cam5.svg'" />
          <p>Registro de Informações dos Pacientes</p>
        </div>
        <div class="item">
          <img :src="publicPath + 'images/cam6.svg'" />
          <p>Relatórios de<br> Desempenho</p>
        </div>
        <div class="item">
          <img :src="publicPath + 'images/cam7.svg'" />
          <p>Avaliação dos<br> Pacientes</p>
        </div>
        <div class="item">
          <img :src="publicPath + 'images/cam8.svg'" />
          <p>Página Profissional Personalizada</p>
        </div>
      </div>
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
.ci-especialistadobra7 {
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  @include grid-container;
  background: #ea3c70 url(images/esp_bg.svg) no-repeat;
  background-size: cover;
  width: 100%;
  flex-flow: row;
  color: #fff;
  padding-top: 12vh;

  .ctnr {
    width: 100%;
    @include outer-container;

    button {
      border: solid 2px #fff;
      font-size: 12px;
      color: #ffff;
      cursor: pointer;
      padding: 12px 13px;
      border-radius: 4px;
      background: transparent;
      font-family: "Montserrat";
      letter-spacing: 0;
      font-weight: 500;

      &:hover {
        background: #fff;
        color: #ea3c70;
      }
    }

    h1 {
      text-align: center;
      font-size: 27px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 14px;
      text-align: center;
      font-weight: unset;
      margin: 0;
    }
    .centering {
      img {
        width: 100%;
        margin: 0;
        letter-spacing: 0;
        line-height: 0;
      }
      button {
        margin: 40px 0;
      }
    }
    .column-left {
      padding-top: 15vh;
      .item {
        display: flex;
        flex-flow: row;

        img {
          width: 30px;
          margin-right: 26px;
        }

        p {
          text-align: left;
          font-weight: 500;
          font-size: 16px;
          max-width: 300px;
        }
      }
    }
    .centering {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .column-right {
      padding-top: 15vh;

      .item {
        display: flex;
        flex-flow: row-reverse;

        img {
          width: 30px;
          margin-left: 26px;
        }

        p {
          text-align: right;
          font-weight: 500;
          font-size: 16px;
          max-width: 300px;
        }
      }
    }
  }

  @include grid-media($g-tablet-up) {
    .column {
    }
  }

  @include grid-media($g-desktop-up) {
    .column {
      @include grid-column(4);
    }
    .column-left {
      @include grid-column(3);
      @include grid-push(1);
    }
    .column-right{
       @include grid-column(3);
       margin-right: calc(8.33333% - 17.33333px + 32px);
    }
  }
}
</style>
