<template>

<nav class="flex flex-col justify-center items-center bg-primary w-full h-auto">
    <div class="px-64 h-10 flex justify-between items-center border-b border-gray-400 w-full text-white text-xs font-medium">
      <p>Welcome Alexei Martinez demo</p>

      <ul class="flex space-x-6">

        <li>
            <Listbox v-model="selectedlenguaje">
                <div class="relative z-50">
                    <ListboxButton class="relative w-full py-2 pl-3 pr-10 cursor-pointer text-center font-medium ">
                        <span class="block truncate">{{ selectedlenguaje.name }}</span>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                        <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white 
                        rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption v-slot="{ active, selected }" v-for="(item,index) in lenguaje" :key="index" 
                            :value="item" as="template">
                                <li :class="[active ? 'text-primary bg-amber-100' : 'text-gray-900',
                                'select-none relative py-2 text-center cursor-pointer hover:bg-gray-300',]">
                                    <span :class="[selected ? 'font-medium text-primary' : 'font-normal','block truncate']">
                                        {{ item.name }}
                                    </span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>
        </li>

        <li>
            <Listbox v-model="selectedCurrentMoney">
                <div class="relative z-50 ">
                    <ListboxButton class="relative w-full py-2 pl-3 pr-10 cursor-pointer text-center font-medium ">
                        <span class="block truncate">{{ selectedCurrentMoney.name }}</span>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                        <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white 
                        rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ListboxOption v-slot="{ active, selected }" v-for="(item,index) in CurrentMoney" :key="index" 
                            :value="item" as="template">
                                <li :class="[active ? 'text-primary bg-amber-100' : 'text-gray-900',
                                'select-none relative py-2 text-center cursor-pointer hover:bg-gray-300',]">
                                    <span :class="[selected ? 'font-medium text-primary' : 'font-normal','block truncate']">
                                        {{ item.name }}
                                    </span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>

                </div>
            </Listbox>

        </li>

        <li class="flex flex-row justify-center items-center"
        v-for="(i, index) in ['ABOUT','BLOG','FAG','NEWSLETTER','CONTACT','WISHLIST']" :key="index">
    
        <span>
            {{ i }}
        </span>
         
        </li>
      </ul>
    </div>

    <!-- //*Logotipo -->
    <div class="flex justify-center items-center w-full h-24 overflow-hidden">
      <img src="../../../assets/logo-lorem.svg" alt="logo" class="object-contain mr-5"/>
    </div>
  </nav>
    
</template>


<script>
import { defineComponent, ref } from 'vue'
import {Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: 'NavbarHeader',
    components: { Listbox, ListboxButton, ListboxOptions, ListboxOption, CheckIcon, SelectorIcon },

    setup() {
        const lenguaje = [
        { name: 'ENG'},
        { name: 'ESP'},
        { name: 'SWE'},
        { name: 'POR'},
        { name: 'BTA'},
      ]
      const selectedlenguaje = ref(lenguaje[0])
        
      const CurrentMoney = [
        { name: 'USD'},
        { name: 'EUR'}
      ]
      const selectedCurrentMoney = ref(CurrentMoney[0])

      return {
        lenguaje, selectedCurrentMoney,
        selectedlenguaje, CurrentMoney
      }
        
    },
})
</script>
