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
      <div v-for="feature in features" :key="feature.key">
        <h4>
          <component :is="feature.icon" />
          {{ $t(`feature${feature.key}Heading`) }}
        </h4>

        <i18n :path="`feature${feature.key}Text`" tag="p">
          <template #link>
            <a :href="feature.href" target="_blank">{{
              $t(`feature${feature.key}TextLink`)
            }}</a>
          </template>
        </i18n>
      </div>
    </section>
  </Layout>
</template>

<script>
import AccessibilityNewIcon from '@material-design-icons/svg/sharp/accessibility_new.svg'
import CodeIcon from '@material-design-icons/svg/sharp/code.svg'
import DevicesIcon from '@material-design-icons/svg/sharp/devices.svg'
import InstallDesktopIcon from '@material-design-icons/svg/sharp/install_desktop.svg'
import TaskAltIcon from '@material-design-icons/svg/sharp/task_alt.svg'
import VerifiedUserIcon from '@material-design-icons/svg/sharp/verified_user.svg'

import BrowserFrame from '~/components/BrowserFrame.vue'

export default {
  components: {
    BrowserFrame,
  },
  data() {
    return {
      features: [
        {
          key: 1,
          icon: TaskAltIcon,
        },
        {
          key: 2,
          icon: DevicesIcon,
        },
        {
          key: 3,
          icon: InstallDesktopIcon,
          href: 'https://web.dev/progressive-web-apps/',
        },
        {
          key: 4,
          icon: AccessibilityNewIcon,
        },
        {
          key: 5,
          icon: VerifiedUserIcon,
        },
        {
          key: 6,
          icon: CodeIcon,
          href: 'https://github.com/mdslides',
        },
      ],
    }
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
  }

  @media (max-width: 400px) {
    &__features {
      grid-template-columns: 1fr;
    }
  }
}
</style>
