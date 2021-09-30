<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <PopoverGroup as="nav" class="hidden md:flex space-x-10">
        
        <router-link to="/" class="hover:text-primary">
            <span class="font-semibold">Home</span>
        </router-link>

        <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-primary' : '', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-primary']">
              <span>Categories</span>
              <ChevronDownIcon :class="[open ? 'text-primary transform rotate-180' : '', 'ml-2 h-5 w-5 group-hover:text-primary']" aria-hidden="true" />
            </PopoverButton>

            <transition 
            enter-active-class="transition ease-out duration-200" 
            enter-from-class="opacity-0 translate-y-1" 
            enter-to-class="opacity-100 translate-y-0" 
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" 
            leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative flex flex-row w-auto bg-white px-5 py-6 ">
                        
                        <div class="flex flex-col mx-3 px-3 space-y-3" v-for="(category,index) in categoriesLinks" :key="index" >
                            <h1 class="text-lg font-semibold my-2">{{category.title}}</h1>
                            <router-link  v-for="(option,index) in category.options" :key="index" :to="option.link">
                                <span class="text-gray-500 font-medium hover:text-primary">{{option.title}}</span>
                            </router-link>
                        </div>  
                                                                    
                    </div>
                </div>
              </PopoverPanel>
            </transition>
        </Popover>


    </PopoverGroup>
</template>

<script>
import { defineComponent } from 'vue'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import {  MenuIcon, SearchIcon, XIcon } from '@heroicons/vue/outline'



export default defineComponent({
    components: { Popover, PopoverButton, PopoverGroup,  XIcon, SearchIcon, PopoverPanel, ChevronDownIcon, MenuIcon},
    setup() {


    const categoriesLinks = [
    {
        title: 'Store',
        options: [
            {title:'algo cool', link: '/shop'},
            {title:'algo cool', link: '/shop'},
            {title:'algo cool', link: '/shop'},
        ]  
    },
    {
        title: 'Almacen',
        options: [
            {title:'almacen 1', link: '/shop'},
            {title:'almacen 1', link: '/shop'},
            {title:'almacen 1', link: '/shop'},
        ]  
    },
    {
        title: 'Almacen2',
        options: [
            {title:'almacen 2', link: '/shop'},
            {title:'almacen 2', link: '/shop'},
            {title:'almacen 2', link: '/shop'},
        ]  
    },
    
]


    return { categoriesLinks}
  },
})
</script>