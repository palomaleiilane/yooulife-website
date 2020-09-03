<template>
  <div class="ci-step">
    <img class="ci-step__icon" :src="icon" :alt="title" />

    <div class="ci-step__content">
      <h4>{{ title }} - {{bla}}</h4>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    icon: {
      type: String,
      default: "images/icon-finance.png",
    },
    title: {
      type: String,
      default: "Lorem ipsum",
    },
    content: {
      type: String,
      default: ".",
    },
    theme: {
      type: String,
      default: "primary",
    },
    bla: {
      type: Number,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.ci-step {
  display: flex;
  flex-flow: column;
  align-items: center;

  &__icon {
    width: 110px;
  }
  &__content {
    margin: 10px;
    padding: 8px 24px 15px;
    border: solid 2px #384c73;
    border-radius: 17px;
    text-align: center;
    color: #384c73;
    width: 75%;

    h4 {
      font-weight: 600;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 149%;
    }
  }
}
</style>
