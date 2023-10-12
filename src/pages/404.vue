<template>
  <Layout class="not-found-page">
    <div class="container-s">
      <h1>{{ $t('pageNotFound') }}</h1>

      <p>{{ $t('pageNotFoundDescription') }}</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('pageNotFound'),
    }
  },
}
</script>

<style lang="scss">
.not-found-page {
  text-align: center;

  h1 {
    margin-top: calc(var(--gap) * 1.5);
  }
}
</style>
