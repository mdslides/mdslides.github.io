<template>
  <Layout class="index-page">
    <div class="container-s index-page__lead">
      <h1>Markdown slides editor</h1>

      <p>Create your next presentation with Markdown</p>
    </div>

    <div class="container-l index-page__frames">
      <g-image
        src="~/assets/app-cover.png"
        alt="MdSlides - App cover image"
        width="1140"
        quality="95"
      />

      <g-image
        src="~/assets/app-cover-mobile.png"
        alt="MdSlides - Mobile app cover image"
        width="300"
        quality="95"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style lang="scss">
.index-page {
  text-align: center;

  &__lead {
    margin-top: calc(var(--gap) * 1.5);
    margin-bottom: calc(var(--gap) * 1.5);
  }

  &__frames {
    position: relative;

    img {
      border: 1px solid var(--color-border);
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.025);
      user-select: none;

      &:last-of-type {
        position: absolute;
        bottom: -2.5%;
        right: 7.5%;
        width: 25%;
      }
    }
  }
}
</style>
