<template>
  <div class="default-layout">
    <div class="container-l">
      <NavigationBar />
    </div>

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
  padding-bottom: calc(var(--gap) * 3);
}
</style>
