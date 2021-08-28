<template>
  <v-btn
    color="yellow darken-2"
    depressed
    v-bind="$attrs"
    v-on="$listeners"
    class="font-weight-bold"
    style="color: #272343;"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',
  }
</script>
