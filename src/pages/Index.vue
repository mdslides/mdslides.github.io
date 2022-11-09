<template>
  <Layout class="index-page">
    <section class="container-s">
      <h1>Markdown slides editor</h1>

      <p>Create your next presentation with Markdown</p>
    </section>

    <section class="container-m index-page__frames">
      <g-image
        src="~/assets/app-cover.png"
        alt="MdSlides - App cover image"
        width="1400"
        quality="95"
      />

      <g-image
        src="~/assets/app-cover-mobile.png"
        alt="MdSlides - Mobile app cover image"
        width="400"
        quality="95"
      />
    </section>

    <section class="container-l index-page__features">
      <div>
        <h4>
          <span class="fa fa-bullseye" />
          Goal-Oriented
        </h4>

        <p>
          Unlike many other presentation editors, MdSlides is designed to focus
          on the content rather than moving text blocks back and forth.
        </p>
      </div>

      <div>
        <h4>
          <span class="fa fa-universal-access" />
          Accessible
        </h4>

        <p>
          Creating presentations in MdSlides is declarative in nature. It
          requires no extra interaction other than writing down one's thoughts.
        </p>
      </div>

      <div>
        <h4>
          <span class="fa fa-mobile-screen-button" />
          Mobile First
        </h4>

        <p>
          The device used does not affect the process of creating presentations,
          nor the final result.
        </p>
      </div>

      <div>
        <h4>
          <span class="fa fa-circle-down" />
          Exporting
        </h4>

        <p>
          The one's progress can be saved as a Markdown file or exported as a
          PDF document.
        </p>
      </div>

      <div>
        <h4>
          <span class="fa fa-rotate" />
          Autosaving
        </h4>

        <p>
          The progress is continuously autosaved as a draft, so that it isn't
          lost when quitting.
        </p>
      </div>
    </section>
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

  section {
    &:first-child {
      margin-top: calc(var(--gap) * 1.5);
    }

    margin-bottom: calc(var(--gap) * 1.5);
  }

  &__frames {
    position: relative;

    img {
      display: block;
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

  &__features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    & > * {
      margin: calc(var(--gap) / 2);
      padding: var(--gap);
      border: 1px solid var(--color-border);
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.025);
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
