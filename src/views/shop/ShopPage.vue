<template>
  <div class="px-64 flex flex-row my-10 space-x-5">
    
    <!--//* FILTER SIDEMENU -->
    
    <product-filter/>

    <!--//* Ad pannel -->
    <div class="w-full">
      <ad-pannel :product="adProduct" />

      <!--//* MAIN SHOP VIEW  -->
      <div class="w-full h-20 flex flex-row justify-between items-end">
        
        <!--//* SORTING SELECTOR -->
        <Listbox as="div" v-model="sortingSelected">
          <div class="flex flex-row w-96 items-center space-x-2">
            <span class="font-semibold">SORT BY:</span>    
            <div class="mt-1 relative">
              <ListboxButton class="relative w-auto bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 
              text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span class="flex items-center">
                  <span class="ml-3 block truncate">{{ sortingSelected }}</span>
                </span>
                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  <ListboxOption as="template" v-for="(person, index) in sortingSelector" :key="index" :value="person" v-slot="{ active, selected }">
                    <li :class="[active ? 'text-white bg-primary' : 'text-gray-900', ' cursor-pointer select-none relative py-2 pl-3 pr-9']">
                      <div class="flex items-center">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', ' block']">
                          {{ person }}
                        </span>
                      </div>
                      <span v-if="selected" :class="[active ? 'text-white' : 'text-primary', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </div>
        </Listbox> 

        <!--//* AMOUNT and GRID SELECTOR -->
        <div class="flex flex-row">

          <!--//* AMOUNT SELECTOR -->
          <Listbox as="div" v-model="showSelected">
            <div class="flex flex-row items-center space-x-2 relative w-40">
              <span class="font-semibold">SHOW:</span>
              <div class="mt-1 relative ">
                <ListboxButton class="relative w-auto cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 
                text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span class="flex items-center">
                    <span class="ml-3 block truncate">{{ showSelected }}</span>
                  </span>
                  <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="(person, index) in showSelector" :key="index" :value="person" v-slot="{ active, selected }">
                      <li :class="[active ? 'text-white bg-primary' : 'text-gray-900', 'cursor-pointer select-none relative py-2 pl-3 pr-9']">
                        <div class="flex items-center ">
                          <span :class="[selected ? 'font-semibold' : 'font-normal', ' block']">
                            {{ person }}
                          </span>
                        </div>
                        <span v-if="selected" :class="[active ? 'text-white' : 'text-primary', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </div>
          </Listbox>

          <!--//* GRID and LIST SELECTOR -->
          <div class="flex justify-between items-center space-x-2">
                
            <ViewGridIcon class="h-5 w-5 cursor-pointer" :class="[productview ==='grid' ? '': 'text-gray-400 hover:text-gray-900']"
            @click="shoptoggel('grid')"/>
            
            <ViewListIcon class="h-5 w-5 cursor-pointer" :class="[productview ==='list' ? 'cursor-pointer': 'text-gray-400 hover:text-gray-900']" 
            @click="shoptoggel('list')" />                            
           
          </div>

        </div>

      </div>

      <!--//* PRODUCT TABS VIEW -->
      <div>
        <div v-if="productview ==='grid'">
          <productgridview :ProductShow="showSelected" :ProductSorting="sortingSelected" :shopProducts="shopProducts" /> 
        </div>

        <div v-if="productview ==='list'">
          <productlistview :ProductShow="showSelected" :ProductSorting="sortingSelected" :shopProducts="shopProducts"/>
        </div> 
      </div>

        

      
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, provide} from 'vue'
import AdPannel from '../../components/components/adPannel.vue'
import ProductCard from '../../components/card/verticalProductCard.vue'

import { Listbox, ListboxButton, ListboxOptions, ListboxOption}  from '@headlessui/vue'
import { ChevronDownIcon, SelectorIcon, CheckIcon, ViewGridIcon, ViewListIcon} from '@heroicons/vue/solid'
import Productgridview from './components/ShopProductGridView.vue'
import Productlistview from './components/ShopProductListView.vue'
import ProductFilter from './components/ShopProductFilter.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {ProductCard, AdPannel, ViewListIcon, ProductFilter, Listbox, ListboxButton, ListboxOptions, ListboxOption,
              ChevronDownIcon, SelectorIcon, CheckIcon, ViewGridIcon,  Productgridview, Productlistview},
  name: 'Shop',
  props: ['category'],
  setup() {
    window.scroll(0, 0)
    const adProduct = {
      title: 'Electric Kettle',
      class: 'FLASH SALE',
      desc: 'Safe & Water boiling in 60 seconds',
      image: 'https://picsum.photos/id/135/200/300',
      price: 25.0,
    };
    const store = useStore();

    


    const showSelector = [9,12,24];
    const sortingSelector = ["Sort by Default","Sort by latest","Sort by hight price","Sort by low price" ];
    const productview: any = ref('grid');
   
    const sortingSelected = ref(sortingSelector[0]);
    const showSelected = ref(showSelector[0])
    
    const shoptoggel = (name:String) =>{ productview.value = name}

    const vercarro = computed(()=>store.state.ShopCart.productsOnCart); 
  
    const shopProducts = computed(()=> {
     const products = store.getters.shopProducts;

      const filterby: any = {
        'Sort by Default': products,
        'Sort by latest': products.reverse(),
        'Sort by hight price': products,
      } 

      return filterby[sortingSelected.value] || filterby['Sort by Default']
     
    });

    provide('shopProducts', shopProducts );

    return {
      adProduct, sortingSelected, sortingSelector, vercarro,
      showSelected, showSelector, productview, shoptoggel, shopProducts
    }
  },
})
</script>
