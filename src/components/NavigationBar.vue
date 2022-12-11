<template>
  <nav class="navbar">
    <g-link :to="$tp('/')">
      <Logo />
    </g-link>

    <div class="navbar__actions">
      <router-link
        :to="{
          path: '/app',
          query: {
            ...($i18n.locale !== $i18n.fallbackLocale && {
              lang: $i18n.locale,
            }),
          },
        }"
      >
        {{ $t('openApp') }}
      </router-link>

      <LanguageSwitcher />
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import Logo from './Logo.vue'

export default {
  components: {
    LanguageSwitcher,
    Logo,
  },
}
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--gap);
  padding: calc(var(--gap) / 2) 0;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg);

  &__actions {
    display: flex;
    gap: 4px;

    & > a {
      padding: 0 16px;
      line-height: 32px;
      border: 1px solid transparent;
      font-weight: 500;
      color: var(--color-text);
      transition: border 0.1s;

      &:hover {
        border-color: var(--color-border);
      }
    }
  }
}
</style>
