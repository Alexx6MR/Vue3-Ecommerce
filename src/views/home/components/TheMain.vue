<template>
    <div class="px-64 w-full h-auto flex flex-col justify-center items-center mb-10">
        
        <TabGroup>
            <TabList class="h-auto w-full flex-row flex justify-center mb-6 border-b border-gray-500">

                <Tab v-for="(tab, index) in ['Best Sellers','New Arrivals','Our Featured']" :key="index"
                class="flex flex-col justify-center items-center" v-slot="{ selected }">
                    <button class="py-3 px-6 block text-xl font-bold" :class="[selected ? '' : 'text-gray-500']">
                        {{tab}}
                    </button>
                    <div :class="[selected ? 'bg-primary h-1 w-14 rounded' : '']"></div>
                </Tab>

            </TabList>
            <TabPanels class="w-full">

                <!--//* Best Sellers -->
                <TabPanel class="h-auto w-full grid grid-cols-5 gap-6 justify-start">
                    <product-card v-for="(i,index) in bestSellers" :key="index" :product="i"/>
                </TabPanel>

                <!--//* New Arrivals -->
                <TabPanel class="h-auto w-full grid grid-cols-5 gap-6 justify-start">
                    <product-card v-for="(i,index) in newArrivals" :key="index" :product="i"/>
                </TabPanel>

                <!--//* Our Featured -->
                <TabPanel class="h-auto w-full grid grid-cols-5 gap-6 justify-start">
                    <product-card v-for="(i,index) in ourFeatured" :key="index" :product="i"/>
                </TabPanel>
            </TabPanels>
        </TabGroup>

    </div>                   

    <!-- BANNER DE PRODUCTOS RECOMENDADOS -->
    <div class="flex flex-row justify-around space-x-6 items-center w-full h-auto my-10">

        <!-- carta de productos -->
        <div class="w-full h-72 flex justify-start items-center rounded  font-bold text-white bg-cover bg-center" 
        v-for="(banner,index) in bannerProduct " :key="index"
        :style="{backgroundImage: `url('${banner.image}')`}">
            
            <div class="ml-10">
                <h3 class="text-2xl">{{banner.title}}</h3>
                <h2 class="text-4xl">{{banner.class}}</h2>

                <button class="rounded border-2 border-white text-center mt-10 font-bold px-8 py-2">
                    SHOP NOW
                </button>
            </div>
        </div>
    
    </div>
    
</template>


<script lang="ts">
import { computed,defineComponent } from 'vue'
import productCard from '../../../components/card/verticalProductCard.vue'
import {useStore} from 'vuex'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'


export default defineComponent({
    components: { productCard, TabGroup, TabList, Tab, TabPanels, TabPanel},
    name: 'The Main',

    setup(){

        const bannerProduct =[
        {title: "MUST-BUY", class: 'Electronics', image:"https://picsum.photos/id/135/200/300", link: '#'},
        {title: "BRAND SALE", class: 'Fashion Shoes', image:"https://picsum.photos/id/135/200/300", link: '#'},
        {title: "FLASH SALE", class: 'Accessories', image:"https://picsum.photos/id/135/200/300", link: '#'},  
        ]

        const store = useStore();
        const bestSellers = computed(()=>store.getters.bestSellers);
        const newArrivals = computed(()=>store.getters.newArrivals);
        const ourFeatured = computed(()=>store.getters.ourFeatured);
        

        return{
            bannerProduct,newArrivals,
            bestSellers,ourFeatured
        }
    }

})
</script>
