<template>
  <component
    :is="tag"
    class="display-2 v-heading pa-3 mx-lg-auto font-weight-bold"
    style="color: #272343;"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'BaseHeading',

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style lang="sass">
  .v-heading
    letter-spacing: 10px !important
</style>
