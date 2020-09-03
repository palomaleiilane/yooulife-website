<template>
  <div class="ci-sobredobra2">
    <div class="ci-sobredobra2__container">
      <h3 class="title">{{title}}</h3>
      <!-- <p>{{content}}</p> -->
      <p>
        O Brasil é o país mais ansioso do mundo e possui o maior número de pessoas com depressão da América Latina (OMS).
        Além disso, 72% dos brasileiros que estão no mercado de trabalho lidam com o estresse, dos quais 32% deles sofrem de burnout (ISMA-BR).
        A alta pressão da sociedade por uma alta performance, atrelada à falta de um tempo para o autocuidado estão levando as pessoas a um colapso emocional.
        Algo precisa ser feito e estamos aqui para isso.
        A YoouLife existe para auxiliar você na busca de uma saúde emocional estável, com autoconhecimento e autoconfiança.
        Somos mais que uma empresa de tecnologia, nascemos com o propósito de transformar a vida das pessoas democratizando o acesso a psicoterapia. Afinal, cuidar da saúde emocional é uma necessidade de todos.
        É sobre equilíbrio, qualidade de vida, longevidade. É sobre o nosso futuro.
        No final das contas, acreditamos que todos merecem uma vida mais leve para experimentar cada momento de forma especial.
        E você não está sozinho. Nós estamos aqui, lado a lado com você.
      </p>
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
      default: "Saúde Emocional para todas as pessoas",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.ci-sobredobra2 {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  padding: 6vh 0;
  @include grid-container;

  &__container {
    width: 100%;
    @include outer-container;
    padding: 0 15px;
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
    p {
      max-width: 765px;
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
  }

  @include grid-media($g-tablet-up) {
  }

  @include grid-media($g-desktop-up) {
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
