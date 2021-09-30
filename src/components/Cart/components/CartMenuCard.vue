<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="px-3 my-6 flex flex-row justify-between items-center">
        
        <div class="flex flex-row space-x-4">
            <div class="w-16 h-20">
                <img v-if="product.image" :src="product.image" :alt="product.title" class="w-full h-full object-cover">
                <span v-else class="w-full h-full object-cover"></span>
            </div>
            <div class="flex flex-col w-32">
                <h1 class="text-base font-bold text-gray-500">{{product.title}}</h1>
                <div class="w-24 flex flex-row justify-between items-center">
                    <span>{{product.cartAmount}}</span>
                    <span>X</span>
                    <span class="font-bold ">${{product.price.toFixed(2)}}</span>
                </div>
            </div>
        </div>
        
        <XCircleIcon class="w-5 h-5 mb-6 cursor-pointer" @click="removeStore(product.id)"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { XCircleIcon } from '@heroicons/vue/solid'
import {useStore} from 'vuex'

export default defineComponent({
    name: 'ShoppingCard' ,
    components: {XCircleIcon},
    props: ['product'],
    setup() {
        const store = useStore();

        const removeStore = () =>{
            store.commit('removeProduct', id)
        }

        return{removeStore}

  }
})
</script>