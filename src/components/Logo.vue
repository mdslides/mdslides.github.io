<template>
  <div class="logo">
    <div class="logo__icon">
      <span>Md</span>
    </div>

    <div class="logo__text">
      <span>Slides</span>
    </div>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  line-height: 1rem;
  font-size: 1rem;
  font-weight: 700;
  user-select: none;

  &__icon {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.5rem 0.3rem;
    width: 4rem;
    height: 3rem;
    background-color: var(--color-text);
    color: var(--color-bg);
  }

  &__text {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0.5rem 0.2rem;
    width: 4rem;
    height: 3rem;
    letter-spacing: -0.025em;
  }
}
</style>
