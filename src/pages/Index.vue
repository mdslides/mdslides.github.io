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
      <div v-for="edge in $page.features.edges" :key="edge.node.id">
        <h4>
          <component :is="icons[edge.node.icon]" />
          {{ edge.node.title }}
        </h4>

        <div v-html="edge.node.content" />
      </div>
    </section>
  </Layout>
</template>

<script>
import accessibility_new from '@material-design-icons/svg/sharp/accessibility_new.svg'
import code from '@material-design-icons/svg/sharp/code.svg'
import devices from '@material-design-icons/svg/sharp/devices.svg'
import install_desktop from '@material-design-icons/svg/sharp/install_desktop.svg'
import task_alt from '@material-design-icons/svg/sharp/task_alt.svg'
import verified_user from '@material-design-icons/svg/sharp/verified_user.svg'

import BrowserFrame from '~/components/BrowserFrame.vue'

export default {
  components: {
    BrowserFrame,
  },
  data() {
    return {
      icons: {
        accessibility_new,
        code,
        devices,
        install_desktop,
        task_alt,
        verified_user,
      },
    }
  },
  metaInfo() {
    return {
      title: this.$t('routeHome'),
    }
  },
}
</script>

<page-query>
query($locale: String = "en") {
  features: allFeature(
    filter: { language: { eq: $locale } }
    sortBy: "fileInfo.name"
    order: ASC
  ) {
    edges {
      node {
        content
        icon
        id
        title
      }
    }
  }
}
</page-query>

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

      svg {
        display: inline-block;
        margin-right: 0.25rem;
        vertical-align: text-bottom;
      }
    }

    a {
      text-decoration: underline;
      text-decoration-color: var(--color-border);
      transition: text-decoration 0.1s;

      &:hover {
        text-decoration-color: var(--text);
      }
    }

    strong {
      font-weight: 600;
    }
  }

  @media (max-width: 400px) {
    &__features {
      grid-template-columns: 1fr;
    }
  }
}
</style>
