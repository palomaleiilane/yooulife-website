<template>
  <aside class="ci-aside">
    <button class="ci-aside__close" @click="$emit('close')" />
    <img class="brnd" :src="publicPath + 'images/yooulifewt.svg'" />
    <ci-navigation
      class="ci-aside__navigation"
      size="lg"
      :options="navigation"
      @input="$emit('update:selected', $event)"
    />
    <button class="bt_1">Login</button>
    <button class="bt_2">Cadastre-se grátis</button>
    <ul>
      <li>
        <img :src="publicPath + 'images/linkedin.svg'" />
      </li>
      <li>
        <img :src="publicPath + 'images/instagram.svg'" />
      </li>
      <li>
        <img :src="publicPath + 'images/facebook.svg'" />
      </li>
    </ul>
  </aside>
</template>

<script>
import CINavigation from "@/components/molecules/CINavigation";

export default {
  components: {
    "ci-navigation": CINavigation,
  },

  props: {
    navigation: {
      type: Array,
      default: undefined,
    },
  },
};
</script>

<style lang="scss">
.ci-aside {
  background: #384c73;
  -webkit-box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
  padding: 12vh 0px 3vh;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  flex-flow: column;
  .brnd {
    width: 116px;
    position: absolute;
    top: 18px;
    left: 22px;
  }
  .bt_1 {
    margin: 20px auto 0;
    background: #cee1f226;
    border: none;
    padding: 17px 0;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    width: 175px;
    border-radius: 4px;
  }
  .bt_2 {
    margin: 20px auto 0;
    background: #eb3c70;
    border: none;
    padding: 17px 0;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
	width: 175px;
    border-radius: 4px;
  }
  ul {
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
	margin-top: 30px;

    li {
      margin: 0 8px;
      display: inline-block;
    }
  }
  &__navigation {
    width: 100%;
  }
  &__close {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 4px;
      background: #fff;
      border-radius: 4px;
    }
    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
