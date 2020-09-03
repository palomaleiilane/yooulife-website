<template>
  <div class="ci-application">
    <div class="contents">
      <h2>{{descri}}</h2>
      <h3>{{content}}</h3>
    </div>

    <div class="ci-application__brands">
      <img class="ci-application__brand" v-for="(brand, index) in brands" :key="index" :src="brand" />
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  props: {
    brands: {
      type: Array,
      default: () => [],
    },
    descri: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default:
        "Curabitur porttitor eros vel mauris vulputate fringilla. Maecenas posuere libero ac purus mattis, non vulputate leo dictum. Phasellus id quam molestie, mattis magna vel, porttitor eros.",
    },
    description: {
      type: String,
      default: "Some coming from CMS",
    },
    products: {
      type: Array,
      default: () => [{}, {}, {}],
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.ci-application {
  margin-left: 0px;
  display: flex;
  flex-flow: column-reverse;

  &__brands {
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: 0;
    img {
      width: 100%;
      margin: 0;
      padding: 0;
      line-height: 0;
      height: 30vh;
      object-fit: cover;
      object-position: top;
    }
  }
  .contents {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

    h2 {
      width: 75%;
      font-weight: 600;
      max-width: 400px;
      font-size: 29px;
    }
    h3 {
      width: 75%;
      font-weight: 300;
      line-height: 145%;
      max-width: 402px;
      font-size: 18px;
    }
  }
}
@include grid-media($g-tablet-up) {
  .ci-application {
    flex-flow: column;
    &__brands {
      width: 50%;
      margin: 0;
      padding: 0;
      line-height: 0;
      img {
        width: 100%;
        margin: 0;
        padding: 0;
        line-height: 0;
        height: 100%;
      }
    }
    .contents {
      width: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;

      h2 {
        width: 75%;
        font-weight: 600;
        max-width: 400px;
        font-size: 29px;
      }
      h3 {
        width: 75%;
        font-weight: 300;
        line-height: 145%;
        max-width: 402px;
        font-size: 18px;
      }
    }
  }
}
</style>
