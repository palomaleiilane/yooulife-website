<template>
  <div id="app" class="ci-app">
    <!-- <transition name="loading">
      
    </transition> -->

    <ci-header
      v-if="initialized"
      class="ci-app__header"
      :navigation="menu"
      @menu="sidenav = true"
    />

    

    <div class="ci-app__body">
      <transition name="router" mode="out-in">
        <router-view class="ci-app__view" v-if="initialized" :scroll="scroll" :selected="selected" />
      </transition>

      <!-- <ci-footer class="ci-app__footer" v-if="initialized" :social="contact.social" /> -->
    </div>

    <ci-aside
      v-if="initialized"
      class="ci-app__aside"
      :navigation="menu"
      @close="onSidenavClose"
    />

    <transition name="fade">
      <div class="ci-app__overlay" @click="sidenav = false" v-if="sidenav"></div>
    </transition>
  </div>
</template>

<script>
import CIHeader from "@/components/organisms/CIHeader";
import CIFooter from "@/components/organisms/CIFooter";
import CIAside from "@/components/organisms/CIAside";
import CILanding from "@/components/pages/CILanding";
import { disableBodyScroll } from "body-scroll-lock";
import { TweenMax, Power2 } from "gsap/TweenMax";
import { mapGetters } from "vuex";

export default {
  components: {
    "ci-header": CIHeader,
    "ci-footer": CIFooter,
    "ci-aside": CIAside,
    "ci-landing": CILanding
  },

  computed: {
    ...mapGetters({
      menu: "menu/getMenu"
    }),
  },

  data: () => ({
    initialized: false,
    selected: "",
    scroll: 0,
    sidenav: false,
    scrollTimer: null,
  }),

  watch: {
    initialized(value) {
      if (value) this.$nextTick(this.init);
    },
  },

  created() {
    // Fetch pages data
    Promise.all([
      this.$store.dispatch("page/fetch"), //api wp
      this.$store.dispatch("menu/fetch"), //api wp
    ]).then(([pages, menu]) => {
      this.initialized = true;

      this.sections = menu.map((item) => item.link);
      this.sections.push("#solutions");

      // Delay to loading exit
      setTimeout(() => {
        this.loadingState = "done";

        setTimeout(() => (this.loadingState = "hide"), 500);
      }, 100);
    });
  },

  mounted() {
    // Start loading
    this.loadingState = "loading";
  },

  methods: {
    init() {
      disableBodyScroll(this.$el.querySelector(".ci-app__body"));
    },
    onSidenavClose() {
      this.sidenav = false;
    },
  },
};
</script>

<style lang="scss">

body,
html {
  height: 100%;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  padding: 0;
  margin: 0;
  font-weight: 100;
}
.pattern_bt{
  background: #eb3c70;
  color: #fff;
  text-align: center;
  padding: 14px;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  border: solid 2px #eb3c70;
  cursor: pointer;
		transition: all .1s $easeInOutQuad;
    display: block!important;
    margin: 0 auto;
    font-family: 'Montserrat';
    font-weight: 500;

  &:hover{
    background: #fff;
    border-color: #eb3c70;
    color: #eb3c70;
  }
}
.ci-app {
  display: flex;
  flex-flow: column;
  height: 100%;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 100;

  &__loading {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 500;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  &__header {
    position: relative;
    z-index: 40;
    flex-shrink: 0;
  }
  &__body {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -webkit-overflow-scrolling: touch;
  }
  &__aside {
    position: absolute;
    max-width: 100%;
    top: -100%;
    right: 0;
    min-width: 100%;
    z-index: 40;
    transition: 0.2s $easeInOutQuad;
    &.is-active {
      top: 0;
    }
  }
  &__footer {
    flex: 1;
  }
  &__overlay {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#2b2d42, 0.4);
    z-index: 35;
  }
  &__alerts {
    position: absolute;
    top: 96px;
    right: 24px;
    left: 24px;
    z-index: 500;
  }

  @include grid-media($g-tablet-up) {
    .ci-app {
      &__alerts {
        left: initial;
        width: 400px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s $easeInOutQuad;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
a {
  text-decoration: none;
}

.moment {
  font-family: "montserrat";
  font-size: 14px;
  line-height: 30px;
  margin-right: 30px;

  i {
    font-size: 12px !important;
    margin-right: 3px;
  }
}
</style>
