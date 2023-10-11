<template>
  <div class="default-layout">
    <header class="container-l">
      <NavigationBar />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

const langAliases = {
  be: 'be-Latn',
}

export default {
  components: {
    NavigationBar,
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: langAliases[this.$i18n.locale] || this.$i18n.locale,
      },
    }
  },
}
</script>

<style lang="scss">
.default-layout {
  header {
    position: sticky;
    top: 0;
    z-index: 10;
  }
}
</style>
