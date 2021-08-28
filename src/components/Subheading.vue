<template>
  <component
    :is="tag"
    class="display-1 v-heading mb-3 font-weight-medium"
    style="line-height: 1.7 !important;color: #272343;"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'BaseSubheading',

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>
