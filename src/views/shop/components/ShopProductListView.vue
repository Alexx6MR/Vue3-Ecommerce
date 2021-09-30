<template>
    <div class="flex flex-col my-10 space-x-5">
        <TabGroup :defaultIndex="0">

            <!--//* PRODUCT GALERIA -->
            <TabPanels>
                <TabPanel class="grid grid-cols-1 gap-4 w-full h-auto">      
                    <HorizontalProductCard v-for="(i, index) in shopProducts.slice(0,minProductShow)" :key="index" :product="i" :horizontal="true"/>
                </TabPanel>
                <TabPanel class="grid grid-cols-3 gap-4 w-full h-auto">
                    <HorizontalProductCard v-for="(i, index) in shopProducts.slice(minProductShow, maxProductShow)" :key="index" :product="i"/>
                </TabPanel>
                <TabPanel class="grid grid-cols-3 gap-4 w-full h-auto">
                    Content 2
                </TabPanel>
            </TabPanels>
                
           <!--//* SEPARATOR -->
            <hr class="w-full h-px bg-gray-500" />

            <!--//* PAGINATOR -->
            <TabList 
                class="relative z-0 py-4 inline-flex justify-between items-end w-full rounded-md shadow-sm -space-x-px cursor-pointer" aria-label="Pagination">
          
                    <!--//* RESPONSIVE PAGINATOR -->
                    <div class="flex-1 flex justify-between sm:hidden">
                        <a  class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium
                        rounded-mdtext-gray-700 bg-white hover:bg-gray-50">
                            Previous
                        </a>
                        <a class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300  text-sm
                        font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Next
                        </a>
                    </div>

                        <!--//* SHOW PAGINATOR AMOUNT -->
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                {{ ' ' }}
                                <span class="font-medium">1</span>
                                {{ ' ' }}
                                to
                                {{ ' ' }}
                                <span class="font-medium">12</span>
                                {{ ' ' }}
                                of
                                {{ ' ' }}
                                <span class="font-medium">97</span>
                                {{ ' ' }}
                                results
                            </p>
                        </div>
                    </div>

                    <!--//* PAGINATOR TAB -->
                    <div class="flex flex-row">
                    <div class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm 
                    font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        <ArrowLeftIcon class="h-5 w-5" />
                    </div>

                    <Tab as="template" v-for="(x, index) in ['1', '2' , '3']" :key="index" v-slot="{ selected }">
                        <span class="w-full h-full bg-white text-gray-800 hover:bg-primary
                        relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        :class="[ selected ? 'bg-primary': '']">
                            {{x}}
                        </span>
                    </Tab>

                    <div class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm 
                    font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Next</span>
                        <ArrowRightIcon class="h-5 w-5" />
                    </div>
                    </div>

            </TabList>
           
           
        </TabGroup>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watchEffect} from 'vue'
import HorizontalProductCard from '../../../components/card/horizontalProductCard.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ArrowRightIcon, ArrowLeftIcon} from '@heroicons/vue/solid'


export default defineComponent({
  components: { HorizontalProductCard, TabGroup, TabList, Tab, TabPanels, TabPanel, ArrowLeftIcon, ArrowRightIcon},
  name: 'productgridView',
  props:  ['ProductShow', 'shopProducts', 'ProductSorting'],

  setup(props) {
        const minProductShow:any = ref(9);
        const maxProductShow = minProductShow.value * 2;
        const sortingBy = ref('default sorting'); 
        watchEffect(() =>{
            minProductShow.value = parseInt(props.ProductShow),
            sortingBy.value = props.ProductSorting
            // console.log("showamount: ", minProductShow.value, "sorting: ", sortingBy.value);
        })

    

        
   
    return {
        minProductShow, maxProductShow, sortingBy
    
      
    }
  },
})
</script>
