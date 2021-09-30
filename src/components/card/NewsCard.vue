<template>
    <div v-for="(item, index) in News" :key="index"
    class="w-full h-64 flex justify-start items-end rounded text-white bg-cover bg-center"
    :style="{backgroundImage: `url('https://picsum.photos/id/100/200/300')`}">
            
        <div class="mx-10 my-4 flex flex-col space-y-4">
            <div class="container">
                <h3 class="text-xs">on {{item.date}} | {{item.comment}} comment</h3>
                <h2 class="text-lg font-bold">{{item.title}}</h2>
            </div>
                    
            <!-- animated button// CREAR EFECTO DE ENTRADA -->  
            <div class="flex flex-col" v-if="false">
                <!-- text and icon -->
                <div class="flex flex-row items-center space-x-2 ">
                    <a href="#">READ MORE</a>
                    <ArrowRightIcon class="h-5 w-5" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: 'News Card',
    components: {ArrowRightIcon},
    props: { news : Object},
    setup() {
        const  News = [
        {title: 'Sed adipiscing ornare risus', comment: 2, date: 'september 6, 2020'},
        {title: 'appnexo,the biggest company', comment: 99, date: 'october 6, 2021'},
        {title: 'the world is safe', comment: 50, date: 'october 10, 2020'}
    ]

        return{ News}
    },
})
</script>
