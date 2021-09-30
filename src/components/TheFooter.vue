<template>
    <div class="h-full w-full px-64 flex flex-col justify-start items-center bottom-0 bg-secundary divide-y divide-gray-600 space-y-10">
    
        <!-- FOOTER HEADER -->
        <div class="flex flex-row items-center justify-between w-full h-32 text-white">
            
            <div class="w-auto h-1/4">
                <img src="../assets/logo-lorem.svg" alt="logo" class="object-cover">
            </div>
            

            <div class="flex flex-col">
                <h1 class="text-xl font-bold">SUSCRIBE TO OUR NEWSLETTER</h1>
                <p class="text-sm text-gray-500">Get all the latest information, sales and Offers</p>
            </div>

            <div class="flex flex-row space-x-2">
            
                <input type="text" class="focus:outline-none focus:ring-2 ring-primary w-80 bg-gray-800 px-4" placeholder="john@toe.com">

                <button class="flex justify-center items-center bg-primary px-8 py-3 font-bold">
                    SUSCRIBE
                    <ArrowRightIcon class="ml-5 h-5 w-5" />
                </button>

            </div>

        </div>

        <!-- FOOTER MAIN -->
        <div class="flex flex-row items-center justify-between w-full h-64 text-gray-100 my-4">

            <!-- COMPANY INFO -->
            <div class="flex flex-col justify-center space-y-4 w-60">
                <h3 class="font-bold text-base">Contact Info</h3>            
                <ul class=" space-y-2 text-sm w-auto">
                    <li>PHONE: <span class="text-gray-500">Lorem dolor. (123) 123-1234 </span></li>
                    <li>EMAIL: <span class="text-gray-500">company@random.com</span> </li>
                    <li>ADDRESS: <span class="text-gray-500">123 lorem, city lorem</span> </li>
                    <li>WORKING DAYS / HOURS: <span class="text-gray-500">Mon-Sun / 9:00 AM - 9:00 PM</span> </li>
                </ul>
            </div>

            <!-- ABOUT US -->
            <div class="flex flex-col justify-end space-y-4  w-auto">
                <h3 class="font-bold text-base">About Info</h3>            
                <ul class=" space-y-2 text-sm text-gray-500">
                    <li>About</li>
                    <li>Order History</li>
                    <li>Returns</li>
                    <li>Custom Service</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>

            <!-- MY ACCOUNT -->
            <div class="flex flex-col justify-center space-y-4  w-auto">
                <h3 class="font-bold text-base">My Account</h3>            
                <ul class=" space-y-2 text-sm text-gray-500">
                    <li>Sign in</li>
                    <li>View Cart</li>
                    <li>My Wishlist</li>
                    <li>Track My Order</li>
                    <li>Help</li>
                </ul>
            </div>

            <!-- FOTOS DE INSTAGRAM -->
            <div class="flex flex-col space-y-4 w-60">
                <h3 class="font-bold text-base">Instagram</h3>            
                
                <div   class="grid grid-cols-4 grid-rows-2 gap-3">
                    <img v-for="n in 8" :key="n" class="w-20 h-16"
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" >
                </div>
            </div>
            
        </div>

        <!-- FOOTER FOOTER -->
        <div class="flex flex-row items-center justify-between w-full h-32">
            
                <!-- Payment icon -->
            <div>
                <img src="../assets/images/payment.png">
            </div>


            <!-- Credit text     -->
            <p class="text-sm text-gray-500">Appnexo eCommerce © 2021. All Rights Reserved</p>
            
                <!-- Social Media icons // ARREGLAR ESTO -->
            <div class="flex flex-row  space-x-3 overflow-hidden w-32">
                
                <div class="w-16 h-16 flex justify-center items-center">
                
                    <!--//TODO agregar iconos de facebook -->
                </div> 

                <div class="w-14 h-14 flex justify-center items-center">
                   <!--//TODO agregar iconos de twitter -->
                </div>

                <div class="w-14 h-14 flex justify-center items-center">
                    <!--//TODO agregar iconos de linkedin -->
                </div>
                
            </div>

        </div>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/solid'
export default defineComponent({
    name: 'The Footer',
    components: {ArrowRightIcon},

    setup(){

        return{
        }
    }
})
</script>
