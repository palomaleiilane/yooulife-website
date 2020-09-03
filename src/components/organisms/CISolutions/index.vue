<template>
  <div class="ci-solutions">
    <div class="dobra">
      <div class="container">
        <h2>
          A
          <strong>YoouLife</strong> é uma plataforma que conecta pessoas e especialistas com o objetivo de ampliar o acesso aos cuidados da mente, de forma prática, segura e confiável.
        </h2>
      </div>
    </div>
    <div class="ci-solutions_con">
      <div class="ci-solutions__container">
        <div class="ci-solutions__content ci-solutions__animate">
          <h1>{{ title }}</h1>
        </div>

        <div class="ci-solutions__items">
          <ci-solution
            class="ci-solutions__solution ci-solutions__animate"
            v-for="(solution, index) in solutions"
            :icon="solution.icon"
            :title="solution.title"
            :content="solution.content"
            :bla="index"
          />
        </div>
      </div>
    </div>
    <button class="pattern_bt mx-auto">Quero experimentar</button>
  </div>
</template>

<script>
import CISolution from "@/components/molecules/CISolution";
import { TweenMax, Power2 } from "gsap/TweenMax";

export default {
  components: {
    "ci-solution": CISolution,
  },
  props: {
    icon: {
      type: String,
      default: "/images/icon-finance.png",
    },
    title: {
      type: String,
      default: "Curabitur libero augue, convallis ac elit non",
    },
    content: {
      type: String,
      default:
        "A YoouLife é uma plataforma que conecta pessoas e especialistas com o objetivo de ampliar o acesso aos cuidados da mente, de forma prática, segura e confiável.",
    },
    solutions: {
      type: Array,
      default: () => [{}, {}, {}],
    },
  },
};
</script>

<style lang="scss">
.ci-solutions {
  padding-bottom: 50px;

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
  .ci-solutions_con {
    display: flex;
    align-items: center;
    position: relative;
    transition: opacity 0.6s;
    z-index: 20;
    padding: 4vh 0;
    @include grid-container;
  }
  &__container {
    @include outer-container;
  }
  &__content {
    @include grid-column(6);
    text-align: center;
    color: #eb3c70;
  }
  &__items {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-top: 16px;
  }
  &__solution {
    padding: 16px 0;
    @include grid-column(5);
    margin-left: 0;
  }

  @include grid-media($g-tablet-up) {
    .dobra {
      width: 100%;
      padding: 5vh 0;
      background: #ea3c70;
      text-align: center;
      color: #fff;
      font-weight: 400;

      h2 {
        font-size: 16px;
        width: 59%;
        font-weight: 300;
        margin: 0 auto;
        line-height: 157%;
      }
      .container {
        @include outer-container;
      }
    }
    .ci-solutions_con {
      padding: 8vh 0;
    }
    &__solution {
      @include grid-column(6);
    }
  }

  @include grid-media($g-desktop-up) {
    .ci-solutions {
      &__items {
        padding-top: 0;
        justify-content: center;
      }
      &__content {
        @include grid-column(12);
      }
      &__items {
        @include grid-column(10);
        margin: 0 auto;
        float: none;
        justify-content: space-between;
      }
      &__solution {
        @include grid-column(4);
      }
    }
  }
}
</style>
