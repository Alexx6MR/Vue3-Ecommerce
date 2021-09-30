<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed inset-0 overflow-hidden z-50 select-none" @close="toggelShoppingMenu()" :open="open" >
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </TransitionChild>
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">

            <div class="relative w-screen max-w-md ">
              <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4" @click="toggelShoppingMenu()">
                  <button @click="toggelShoppingMenu()"></button>
                </div>
              </TransitionChild>

               <!--//* CONTENT -->
              <div  class="h-full px-16 flex flex-col py-6 bg-white shadow-xl overflow-hidden divide-y-2">
               
                  <!--//* TITLE -->
                <div class="px-6 flex flex-row justify-between uppercase">
                  <DialogTitle class="text-lg font-bold text-black">
                    Shopping cart
                  </DialogTitle>
                  <div class="flex flex-row justify-center text-xs items-center font-bold text-gray-500 cursor-pointer hover:text-primary"
                  @click="toggelShoppingMenu()">
                    close
                    <ArrowRightIcon class="h-4 w-4 mx-1 text-xs"/>
                  </div> 
                </div>

                <div v-if="showCart" class="divide-y-2">

                  <!--//* PRODUCTS -->
                  <div class="overflow-y-auto overscroll-contain max-h-72">
                    <shopping-card v-for="(item,index) in cartProducts" :key="index" :product="item"/>                
                  </div>

                  <!--//* SUBTOTAL -->
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-gray-500 my-3">Subtotal:</span>
                    <span class="font-bold">${{totalprice.toFixed(2)}}</span>
                  </div>
               
                  <!--//* BUTTON -->
                  <div class="flex flex-col justify-between items-center"> 
                    <router-link to="/checkout" @click="toggelShoppingMenu()">
                      <div class="flex flex-col w-20 items-center hover:text-primary pb-2 pt-4 outline-none border-none ">
                        <h2 class="font-bold">View Cart</h2>
                        <span class="w-1/2 h-1 bg-primary"></span>
                      </div>
                    </router-link>
                    <router-link to="/checkout" class="w-full" @click="toggelShoppingMenu()">
                      <button class="w-full py-5 px-5 uppercase bg-black text-white font-bold hover:bg-gray-700">
                        go to checkout
                      </button>
                    </router-link>
                  </div>
          
                </div>

                <div v-else class="flex justify-center items-center uppercase text-gray-500 font-semibold ">
                    <span class="my-4">No products in the cart.</span>
                </div>

              </div>
              
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { defineComponent, computed, ref} from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {useStore } from 'vuex'
import { ArrowRightIcon } from '@heroicons/vue/outline'
import ShoppingCard from './components/CartMenuCard.vue'

export default defineComponent({
    name: 'ShoppingCart' ,
  components: { Dialog, DialogOverlay,ArrowRightIcon, ShoppingCard,
               DialogTitle, TransitionChild, TransitionRoot},
  setup() {
    const store = useStore();
    const open = computed(()=>store.state.ShopCart.shoppingMenu);
    const toggelShoppingMenu = ()=> store.commit('toggelShoppingMenu');
    const cartProducts = computed(()=>store.state.ShopCart.productsOnCart);    
    const totalprice = computed(()=>store.getters.totalMoneyOnCart);
   
    let showCart = ref(true);

    
    
    
    return {
      open, toggelShoppingMenu, cartProducts, totalprice, showCart
    }
  },
})
</script>