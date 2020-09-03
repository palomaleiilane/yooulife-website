<template>
  <div class="ci-herosobre">
    <div class="ci-herosobre__container">
      <div class="ci-herosobre__content">
        <h2 class="ci-herosobre__title ci-herosobre__animate" type="title">{{ title }}</h2>
        <h3 class="ci-herosobre_text ci-herosobre__animate" type="lead" v-html="content"></h3>
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
      default: "Queremos ajudar você a ter mais…",
    },
    content: {
      type: String,
      default: "saúde emocional",
    },
  },
};
</script>

<style lang="scss">
.ci-herosobre {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  background: url(images/hero2.jpg) no-repeat;
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
      font-size: 20px;
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      background: #e93c70;
      display: block;
      max-width: 260px;
      margin: 12px auto;
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
    .ci-herosobre {
      &__container {
        padding: 17vh 0;
      }
      &__title {
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
    .ci-herosobre {
      &__container {
        padding: 35.5vh 0;
      }
      .scrolldown {
        display: block!important;
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
          font-size: 26px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
          background: #e93c70;
          display: block;
          max-width: 260px;
          margin: 12px auto;
        }
      }
    }
  }
}
</style>
