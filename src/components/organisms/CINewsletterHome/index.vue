<template>
  <div class="ci-newsletterhome">
    <div class="ci-newsletterhome__container">
      <div class="ci-newsletterhome__content">
        <h2>Cadastre-se para receber mensagens inspiradoras e novidades da YoouLife.</h2>
        <form name="newsletter">
          <div class="getting">
            <input type="email" placeholder="Insira seu email aqui " />
            <button type="submit" class="doit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
    <div class="wave">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path
          d="M-5.92,128.78 C264.39,176.14 290.34,80.42 500.27,139.63 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none;fill: rgb(56 76 115);"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.ci-newsletterhome {
  background: #384c73 !important;
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
  transition: opacity 0.6s;
  z-index: 30;
  @include grid-container;

  &__container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vh 15px;
  }
  &__content {
    @include grid-column(6);
    margin-left: 0;

    h2 {
      margin: 16px 0;
      font-size: 17px;
      line-height: 155%;
      text-align: center;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 0px;
    }
    .getting {
      display: flex;
      flex-flow: row;
      justify-content: center;

      input {
        width: 100%;
        padding: 13px 10px;
        border-radius: 4px;
        border: none;
        outline: none;
        font-family: "Montserrat";
        max-width: 300px;
        margin-right: 8px;
      }
      button {
        width: 100px;
        background: #eb3c70;
        color: #fff;
        border: none;
        font-size: 13px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  .wave {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    height: 35vh;
  }
  @include grid-media($g-tablet-up) {
  }
  @include grid-media($g-desktop-up) {
    .ci-newsletterhome {
      &__content {
        @include grid-column(12);

        h2 {
          margin: 16px 0;
          font-size: 22px;
          line-height: 115%;
          text-align: center;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0px;
        }
        .getting {
          display: flex;
          flex-flow: row;
          justify-content: center;

          input {
            width: 100%;
            padding: 13px 10px;
            border-radius: 4px;
            border: none;
            outline: none;
            font-family: "Montserrat";
            max-width: 300px;
            margin-right: 8px;
          }
          button {
            width: 100px;
            background: #eb3c70;
            color: #fff;
            border: none;
            font-size: 13px;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
    }
    .wave {
      height: 225px;
    }
  }
}
</style>