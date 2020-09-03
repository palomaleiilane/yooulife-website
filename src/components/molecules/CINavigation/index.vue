<template>
  <div class="ci-navigation" :class="[
			{
				'is-inline': inline
			}
		]">
    <div
      class="ci-navigation__option"
      :class="{ 'is-active': item.link == value }"
      v-for="(item, index) in options"
      @click.stop="$emit('input', item.link)"
      v-bind:key="index"
    >{{ item.label }}</div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    value: {
      type: String | Number,
      default: "home",
    },
    inline: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.ci-navigation {
  display: flex;
  flex-flow: column;

  &__option {
    padding: 8px 16px;
    background: transparent;
    border: 0;
    text-align: center;
    font-weight: 600;
    font-size: 500;
    outline: none;
    cursor: pointer;
    position: relative;
    color: #fff;
    font-size: 14px;
    -webkit-transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    font-family: "Montserrat";
    font-weight: 500;
  }

  &.is-inline {
    flex-flow: row;
    align-items: center;
    .ci-navigation {
      &__tooltip {
        top: initial;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, -4px);
        animation-name: nav-tooltip-inline;
        &:before {
          top: 100%;
          left: 50%;
          transform: translate(-50%, 0);
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid $t-accent;
        }
      }
      &__option {
        color: #22262a;
        font-weight: 600;
        font-size: 14px;

        &:hover {
          color: #eb3c70;
        }
        &:after {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  @keyframes nav-tooltip {
    0% {
      transform: translate(16px, -50%);
    }
    60% {
      transform: translate(20px, -50%);
    }
    100% {
      transform: translate(16px, -50%);
    }
  }

  @keyframes nav-tooltip-inline {
    0% {
      transform: translate(-50%, -4px);
    }
    60% {
      transform: translate(-50%, 0);
    }
    100% {
      transform: translate(-50%, -4px);
    }
  }
}
</style>
