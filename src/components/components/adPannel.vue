<template>
    <div class="w-full h-96 flex justify-start items-center font-bold text-white bg-cover bg-center bg-gray-600" 
        :style="{backgroundImage: `url('${product.image}')`}">
            
            <div class="mx-20 space-y-6 flex flex-col">

                <span class="text-2xl text-primary">{{product.class}}</span>
                
                <div>
                <h3 class="text-4xl">{{product.title}}</h3>
                <h2 class="text-2xl">{{product.desc}}</h2>

                </div>

                <span class="text-3xl">START AT ${{product.price}} </span>    
                <button class="rounded bg-primary text-center mt-10 font-bold w-2/4 px-2 py-2">
                    SHOP NOW
                </button>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AdPannel',
    props: { product : Object },
    setup() {
        return{ }
    },
})
</script>
