<template>
    <div>
        <v-row class="pa-8">
            <v-col cols="12" align-self="center" sm="6">
                <base-heading class="pt-16 pl-16">MIHOSHIMA</base-heading>
                <base-text class="py-7 pl-16">
                  MIHOSHIMA is a IT Engineer and<br>
                  Motion Designers based in Tokyo.<br>
                  She is absorbed in design and engineering.            
                </base-text>
                <div class="pt-3 pd-6 pl-16">
                <base-button>Let's Check Work!</base-button>
                </div>
            </v-col>  
            <v-col cols="12" align-self="center" sm="6">
                <v-img
                  :src="require('@/assets/6103e9c687aadb4528b5f9c9.png')"
                  contain
                />                
            </v-col>  
        </v-row>             
    </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      BaseHeading: () => import('@/components/Heading.vue'),
      BaseText: () => import('@/components/Text.vue'),
      BaseButton: () => import('@/components/Btn.vue'),
    },
  }
</script>