<template>
    <div>
        <v-row class="pa-16">
            <v-col cols="12" align-self="center">
                <base-heading>Skill</base-heading>
            </v-col>  
            <v-col 
                cols="12" sm="4"
                v-for="(skill,index) in skills"
                :key="index">                
                    <v-card class="ma-3" flat>
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-card-title 
                                 class="text-h5 v-heading 
                                 font-weight-medium justify-center"
                                 style="color: #272343;">
                                  {{skill.category}}
                                </v-card-title>
                            </v-col>                        
                            <v-col cols="12">                                                          
                                <v-img 
                                 v-bind:src="skill.img"
                                 contain
                                 max-height="150">
                                </v-img>
                            </v-col>
                            <v-col cols="12">                    
                                <v-card-text
                                 class="text-h6 v-heading 
                                 font-weight-light px-10 text-center"
                                 style="color: #272343;">
                                  <p v-html="skill.description"></p>
                                </v-card-text> 
                            </v-col>
                        </v-row>
                    </v-card>
            </v-col>            
        </v-row>             
    </div>
</template>

<script>
  export default {
    name: "Skill",

    components: {
      BaseHeading: () => import("@/components/Heading.vue"),
    },
    data(){
      return{
          skills: [
              { category:"Programming",
                img: require("@/assets/Program.png"),
                description: "Python,C#,Powershell,<br>Bash,Vue.js,HTML/CSS"
              },
              { category:"Environment",
                img: require("@/assets/Env.png"),
                description:"AWS,Windows,<br>Linux,Docker,Kubernetes"
              },
              { category:"Database",
                img: require("@/assets/DB.png"),
                description:"SQL Server,PostgreSQL"
              },   
              { category:"Tool",
                img: require("@/assets/Tools.png"),
                description:"Git,markdown,mkdocs,<br>Redmine,VS Code"
              }, 
              { category:"Design",
                img: require("@/assets/Design.png"),
                description:"Photoshop,Ilustrator,<br>After Effects,Premire Pro"
              },             
            ],
      }
    }
  }
</script>