<template>
  <v-app-bar
    color=transparent
    fixed
    flat
  >
    <div @click="goToReload">
    <v-img
      :src="require('@/assets/logo.png')"
      class="ma-10"
      position=left
      contain
      height="40"
      @click="goToReload()"
    />
    </div>
    <v-spacer />
    <v-app-bar-nav-icon
      style="color: #272343;"
      class="ma-10">
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      goToReload(){
        this.$router.go({path: this.$router.currentRoute.path, force: true})
      }
    }
    
  }
</script>