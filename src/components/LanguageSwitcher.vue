<template>
  <div
    role="button"
    :class="['language-switcher', { active: isActive }]"
    @click="handleToggle"
  >
    {{ $i18n.locale }}

    <ul>
      <template v-for="locale in $i18n.availableLocales">
        <li
          v-if="locale !== $i18n.locale"
          :key="locale"
          role="button"
          @click="$router.push($tp($route.path, locale, true))"
        >
          <span>{{ locale }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    handleToggle() {
      if (this.isActive) {
        return
      }

      const listener = () => {
        document.body.removeEventListener('click', listener)
        this.isActive = false
      }

      setTimeout(() => {
        document.body.addEventListener('click', listener)
        this.isActive = true
      })
    },
  },
}
</script>

<style lang="scss">
.language-switcher {
  position: relative;
  padding: 0 16px;
  line-height: 32px;
  font-weight: 500;
  color: var(--color-text);
  border: 1px solid transparent;
  text-transform: capitalize;
  transition: border 0.1s;
  z-index: 101;
  cursor: pointer;

  &:hover {
    border-color: var(--color-border);
  }

  &.active {
    border-color: var(--color-border);

    ul {
      opacity: 1;
      pointer-events: all;
    }
  }

  ul {
    position: absolute;
    top: 100%;
    right: -1px;
    left: -1px;
    margin: 0;
    padding: 0;
    border: 1px solid var(--color-border);
    background-color: var(--color-bg);
    list-style: none;
    opacity: 0;
    transition: opacity 0.1s;
    pointer-events: none;
  }

  li {
    margin: 0;
    padding: 0 16px;
    line-height: 32px;
    font-weight: 500;
    color: var(--color-text);
    cursor: pointer;

    &:first-child {
      padding-top: 8px;
    }

    &:last-child {
      padding-bottom: 8px;
    }

    &:hover {
      span {
        border-color: var(--color-text);
      }
    }

    span {
      border-bottom: 1px solid transparent;
      transition: border 0.1s;
    }
  }
}
</style>
