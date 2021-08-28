<template>
    <div>
            <v-row>
                <v-col cols="6">
                    <v-text-field
                    label="本のタイトルを検索"
                    v-model="keyword">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn
                        color="primary"
                        @click="search(keyword)">
                        検索する
                    </v-btn>
                </v-col>                    
                <v-col cols="2">                    
                    <v-btn
                        color="secondary"
                        to="/">
                        一覧に戻る
                    </v-btn>                      
                </v-col>
            </v-row>
            <v-row>
                <v-col 
                    cols="12" md="4"
                    v-for="(book,index) in searchResults"
                    :key="index">

                    <v-card class="ma-3">
                        <v-row>
                            <v-col cols="5" md="5" xs="5" align-self="center">
                                <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                                >                                                              
                                <v-img :src="book.img"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="7" md="7" xs="7">
                                    <v-card-title>{{book.title}}</v-card-title>
                            </v-col>
                        </v-row>
                        <v-row>                         
                            <v-col cols="8">                    
                                <v-card-text>{{book.description}}</v-card-text> 
                             </v-col>
                            <v-col cols="4">                                                        
                                <v-card-actions>
                                    <v-btn fab dark color="indigo" @click="addBookList(index)">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-spacer></v-spacer>
                             </v-col>
                        </v-row>                         
                    </v-card>

                </v-col>
            </v-row>
    </div>

</template>

<script>

export default {
    data(){
        return{
            keyword: '',
            searchResults:[],
            show: false,
        }
    },
    methods:{
        async search(keyword){
            this.searchResults = []
            const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
            const params= {
                q: `intitle:${keyword}`,
                maxResults:40
            }

            const queryParams = new URLSearchParams(params)
            console.log(baseUrl + queryParams)

            //fetchでJson取得
            const response = await fetch(baseUrl + queryParams)
            .then(response => response.json())
            console.log(response.items)
            for(const book of response.items){
                const title = book.volumeInfo.title
                const img = book.volumeInfo.imageLinks
                const description = book.volumeInfo.description
                this.searchResults.push({
                    title: title ? title : '',
                    img: img ? img.thumbnail : '',
                    description: description ? description.slice(0,40) : ''
                })
            }
        },
        addBookList(index){
            this.$emit('add-book-list',this.searchResults[index])
        }
    }
}
</script>

<style>
</style>