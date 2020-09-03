<template>
  <div class="ci-especialistasteps">
    <div class="ci-especialistasteps_con">
      <div class="ci-especialistasteps__container">
        <div class="ci-especialistasteps__content ci-especialistasteps__animate">
          <h1>{{ title }}</h1>
          <p>{{content}}</p>
        </div>

        <div class="ci-especialistasteps__items">
          <ci-step
            class="ci-especialistasteps__step ci-especialistasteps__animate"
            v-for="(step, index) in items"
            :icon="step.icon"
            :title="step.title"
            :content="step.content"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CIStep from "@/components/molecules/CIStep";
import { TweenMax, Power2 } from "gsap/TweenMax";

export default {
  components: {
    "ci-step": CIStep,
  },
  props: {
    icon: {
      type: String,
      default: "/images/icon-finance.png",
    },
    title: {
      type: String,
      default: "Veja como é fácil ter o seu consultório virtual",
    },
    content: {
      type: String,
      default:
        "Siga os passos abaixo e faça parte da comunidade de especialistas da YoouLife.",
    },
    items: {
      type: Array,
      default: () => [{}, {}, {}, {}],
    },
  },
};
</script>

<style lang="scss">
.ci-especialistasteps {
  padding-bottom: 50px;

  .dobra {
    width: 100%;
    padding: 4vh 0;
    background: #ea3c70;
    text-align: center;
    color: #fff;
    font-weight: 400;

    h2 {
      margin: 0 0;
      font-size: 23px;
      line-height: 115%;
      font-weight: bold;
      color: #ea3c70;
      letter-spacing: 0;
    }
    p {
      color: #384c73;
    }
    .container {
      @include outer-container;
    }
  }
  .ci-especialistasteps_con {
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
    text-align: center;
    color: #384c73;
    font-size: 15px;
    font-weight: 400;
  }
  &__items {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-top: 16px;
  }
  &__step {
    padding: 16px 0;
    @include grid-column(5);
    margin-left: 0;
  }

  @include grid-media($g-tablet-up) {
    .ci-especialistasteps_con {
      padding: 8vh 0;
    }
    &__step {
      @include grid-column(6);
    }
  }

  @include grid-media($g-desktop-up) {
    h1 {
      margin: 0 0;
      font-size: 23px;
      line-height: 115%;
      font-weight: bold;
      color: #ea3c70;
      letter-spacing: 0;
    }
    &__items {
      padding-top: 0;
      justify-content: center;
    }
    &__content {
      @include grid-column(12);
    }
    &__items {
      @include grid-column(12);
      margin: 0 auto;
      float: none;
      justify-content: space-between;
    }
    &__step {
      @include grid-column(3);
    }
  }
}
</style>
