<template>
  <div class="ci-hero">
    <div class="ci-hero__container">
      <div class="ci-hero__content">
        <h2 class="ci-hero__title ci-hero__animate" type="title">{{ title }}</h2>
        <h3 class="ci-hero__text ci-hero__animate" type="lead" v-html="content"></h3>
        <div class="searching">
          <input type="text" placeholder="Digite o seu motivo ou nome de algum especialista." />
          <button class="doit">Procurar</button>
        </div>
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
      default: "O melhor momento para cuidar da sua mente é agora",
    },
    content: {
      type: String,
      default: "Encontre psicólogos, psicanalistas e agende sua sessão online.",
    },
    theme: {
      type: String,
      default: "accent",
    },
    initialized: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    animated: false,
  }),

  mounted() {
    if (this.initialized) this.init();
  },

  watch: {
    initialized(value) {
      if (value && !this.animated) this.init();
    },
  },

  methods: {
    init() {
      this.animated = true;

      TweenMax.staggerFrom(
        this.$el.querySelectorAll(".ci-hero__animate"),
        1.5,
        {
          x: "-=80",
          opacity: 0,
          ease: Power2.easeOut,
        },
        0.4
      );
    },
  },
};
</script>

<style lang="scss">
.ci-hero {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  background: url(images/hero1.png) no-repeat;
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
  }

  &__content {
    @include grid-column(6);
    margin-left: 0 !important;

    .searching {
      display: flex;
      flex-flow: row;
      max-width: 90%;
      margin: 0 auto;
      input {
        width: calc(100% - 100px);
        padding: 13px 10px;
        border-radius: 4px 0 0 4px;
        border: none;
        outline: none;
        font-family: "Montserrat";
      }
      button {
        width: 100px;
        background: #eb3c70;
        color: #fff;
        border: none;
        font-size: 13px;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
      }
    }
  }
  &__title {
    margin: 16px 0;
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
    .ci-hero {
      &__container {
        padding: 17vh 0;
      }
      &__title {
        margin: 0 0 24px;
      }
      &__content {
        @include grid-column(6);
      }
      .searching {
        max-width: none;
        margin: 0 auto;
      }
    }
  }

  @include grid-media($g-desktop-up) {
    .ci-hero {
      &__container {
        padding: 27.5vh 0;
      }
      .scrolldown {
       display: block;
      }
      &__content {
        h2 {
          font-size: 34px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.2;
          letter-spacing: normal;
          text-align: center;
          margin-bottom: 10px;
          color: #ffffff;
        }

        h3 {
          font-size: 16px;
          width: auto;
          font-weight: 400;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.73;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
