<template>
    <div>
        <v-row style="background-color: #60c1c8;" class="justify-center pa-10">
            <v-col cols="6" align-self="center" sm="4">
                <v-img
                  :src="require('@/assets/6056e4de7156326ff560b1a1_6.png')"
                  contain
                /> 

            </v-col>    
            <v-col cols="12" align-self="center" sm="6" class="pl-10">
                <base-subheading>MIHOSHIMA</base-subheading>
                <base-text>
                  都内で5年ほどエンジニアをしつつ、趣味で動画を作ったりしています。
                  地味にフルスタックなエンジニアを目指しています。<br>           
                </base-text>          
            </v-col>  
        </v-row>
    </div>                     
</template>

<script>
  export default {
    name: 'AboutMe',

    components: {
      BaseSubheading: () => import('@/components/Subheading.vue'),
      BaseText: () => import('@/components/Text.vue'),
    },
  }
</script>