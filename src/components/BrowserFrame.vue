<template>
  <div class="browser-frame">
    <slot />
  </div>
</template>

<style lang="scss">
.browser-frame {
  position: relative;
  padding: 24px 0px 0px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-border);
    box-shadow: 12px 0 var(--color-border), 24px 0 var(--color-border);
  }

  img {
    display: block;
    border-top: 1px solid var(--color-border);
    user-select: none;
  }
}
</style>
