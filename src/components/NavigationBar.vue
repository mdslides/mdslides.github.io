<template>
  <nav class="navbar">
    <g-link to="/">
      <Logo />
    </g-link>

    <a class="navbar__link" href="/app">Open App</a>
  </nav>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
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

  &__link {
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
</style>
