<template>
  <Layout class="index-page">
    <section class="container-s">
      <h1>{{ $t('appDescription') }}</h1>

      <p>{{ $t('appMotto') }}</p>
    </section>

    <section class="container-m">
      <BrowserFrame>
        <g-image
          src="~/assets/app-cover.png"
          alt="MdSlides - App cover image"
          width="1800"
          quality="95"
        />
      </BrowserFrame>
    </section>

    <section class="container-l index-page__features">
      <div>
        <h4>
          <span class="fa fa-bullseye" />
          {{ $t('feature1Heading') }}
        </h4>

        <p>{{ $t('feature1Text') }}</p>
      </div>

      <div>
        <h4>
          <span class="fa fa-mobile-screen-button" />
          {{ $t('feature2Heading') }}
        </h4>

        <p>{{ $t('feature2Text') }}</p>
      </div>

      <div>
        <h4>
          <span class="fa fa-circle-down" />
          {{ $t('feature3Heading') }}
        </h4>

        <p>{{ $t('feature3Text') }}</p>
      </div>

      <div>
        <h4>
          <span class="fa fa-universal-access" />
          {{ $t('feature4Heading') }}
        </h4>

        <p>{{ $t('feature4Text') }}</p>
      </div>

      <div>
        <h4>
          <span class="fa fa-shield-halved" />
          {{ $t('feature5Heading') }}
        </h4>

        <p>{{ $t('feature5Text') }}</p>
      </div>

      <div>
        <h4>
          <span class="fa fa-unlock" />
          {{ $t('feature6Heading') }}
        </h4>

        <p>{{ $t('feature6Text') }}</p>
      </div>
    </section>
  </Layout>
</template>

<script>
import BrowserFrame from '~/components/BrowserFrame.vue'

export default {
  components: {
    BrowserFrame,
  },
  metaInfo() {
    return {
      title: this.$t('routeHome'),
    }
  },
}
</script>

<style lang="scss">
.index-page {
  text-align: center;

  section {
    &:first-child {
      margin-top: calc(var(--gap) * 1.5);
    }

    margin-bottom: calc(var(--gap) * 1.5);
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    & > * {
      margin: calc(var(--gap) / 2);
      padding: var(--gap);
      border: 1px solid var(--color-border);
      text-align: left;
    }

    h4 {
      margin-top: 1rem;

      span {
        margin-right: 0.25rem;
      }
    }
  }

  @media (max-width: 400px) {
    &__features {
      grid-template-columns: 1fr;
    }
  }
}
</style>
