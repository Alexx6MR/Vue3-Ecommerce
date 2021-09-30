<template>
    <div class=" flex flex-col my-20">

        <!-- NAVEGACION SUPERIOR -->
        <div class="w-full flex justify-center items-center space-x-9 mb-3">
            <span v-for="(x,index) in ['Description', 'Additional information','Shipping & Returns', 'Reviews (1)']" :key="index"
            class="text-2xl font-bold"> 
            {{x}}
            </span>
        </div>
        <!-- LINEA DE SEPARACION -->
        <hr class="w-full h-0.5 border-gray-200"/>


        <!-- INFORMACION DINAMICA SEGUN LA NAVEGACION -->
        <div class="grid grid-cols-2 my-8 gap-7  break-words">
            <!-- PARTE IZQUIERDA DEL GRID -->
            <div  class="flex flex-col space-y-9 justify-start w-full h-full">

                <div class="flex flex-col space-y-5 justify-start w-full h-full text-gray-600">

                    <h1 class="text-2xl font-semibold text-black">Features</h1>

                    <!-- DESCRIPTION OF PRODUCT -->
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati nulla quo blanditiis eos ea? Dolorem cumque exercitationem assumenda doloribus.consectetur adipisicing elit. Ipsam obcaecati nulla quo blanditiis eos ea? Dolorem cumque exercitationem assumenda doloribus.</p>

                    <!-- LIST OF DETAILS -->
                    <ul class="ml-2">
                        <li v-for="(x,index) in 4" :key="index"
                        class="space-x-2 flex items-center space-y-2">
                            <CheckIcon class="w-5 h-5 mt-2"/>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        </li>
                    </ul>

                </div>

                
                <!-- SPECIFICATIONS -->
                <div class="flex flex-col space-y-3 justify-start w-full h-full">

                    <h1 class="text-2xl font-semibold text-black">Specifications</h1>

                    <ul class="divide-y-2">
                        <li v-for="(x,index) in ProductSpecification" :key="index"
                        class="grid grid-cols-3">
                            <span class="text-black font-semibold text-md w-32 my-2">{{x.title}}</span>
                            <p class=" w-full col-span-2 ">{{x.description}}</p>
                        </li>
                    </ul>

                </div>
            </div>

            <!-- PARTE DERECHA DEL GRID -->
            <div class="flex flex-col space-y-5 justify-start items-start w-full h-full">

                <h1 class="text-2xl font-semibold text-black">Video Description</h1>
                
                <!-- VIDEO OF PRODUCT -->
                <div class="w-full h-96 bg-gray-600"></div>

                <!-- ICONS -->
                <div class="flex flex-row justify-center items-center divide-x space-x-8">
                    
                    <!-- LEFT ICON -->
                    <div class="flex flex-row justify-center items-center space-x-5">
                        <!-- Icons -->
                        <div class="w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center">
                            <TruckIcon class="h-5 w-5 text-primary"/>
                        </div>
                        <!-- TEXT -->
                        <div class="flex flex-col justify-center items-start">
                            <h1 class="font-bold text-lg">2 year warranty</h1>
                            <p class="text-gray-600">Guarantee with no doubt</p>
                        </div>
                    </div>

                    <!-- RIGHT ICON -->
                    <div class="flex flex-row justify-center items-center space-x-5">
                        <!-- Icons -->
                        <div class="w-14 h-14 bg-gray-200 rounded-full flex justify-center ml-8 items-center">
                            <LockClosedIcon class="h-5 w-5 text-primary" />
                        </div>
                        <!-- TEXT -->
                        <div class="flex flex-col justify-center items-start">
                            <h1 class="font-bold text-lg">Free shipping</h1>
                            <p class="text-gray-600">On orders over $50.00</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { TruckIcon, LockClosedIcon, CheckIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: 'ProductDetails',
    components: {TruckIcon, LockClosedIcon, CheckIcon},
    setup(){

        
            const ProductSpecification = [
                {title: 'Material', description: 'Praesent id enim sit amet.Tdio'},
                {title: 'Claimed Size', description: 'Praesent id enim sit'},
                {title: 'Recommended Use', description: 'Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti'},
                {title: 'Manufacturer', description: '	Praesent id enim'}
            ]

        return{
            ProductSpecification
        }
    }
})
</script>
