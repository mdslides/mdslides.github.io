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

export default {
  components: {
    NavigationBar,
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
