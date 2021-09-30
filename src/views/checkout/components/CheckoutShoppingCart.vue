<template>
  <div class="flex flex-row py-10">

    <div class="flex flex-col w-full divide-y-4">
      
      <table class="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" v-for="(item,index) in ['Product','Prices', 'Amount', 'Subtotal' ]" :key="index"
            class="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{item}}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 overflow-y-auto mb-5">

          <tr v-for="(product, index) in productsOnCart" :key="index">
                  
            <!--//* IMG AND TITLE -->
            <td class="pr-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-20 w-20">
                  <img class="h-full w-full object-cover" :src="product.image" :alt="product.title " />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ product.title }}
                  </div>
                </div>
              </div>
            </td>

            <!--//* PRICE -->
            <td class="px-10 py-4 whitespace-nowrap">
              <div class="text-gray-900 text-base font-semibold">${{ product.price.toFixed(2) }}</div>
            </td>

            <!--//* AMOUNT -->
            <td class="px-10 py-4 whitespace-nowrap ">
              <div class="flex flex-row">

                <button class="border w-8 h-10 flex justify-center items-center hover:bg-gray-300"
                @click="decreaseAmount(product.id, product.cartAmount)">
                    <MinusIcon class="w-5 h-5"/>
                </button>
                      
                <div class="border w-10 h-10 text-center flex justify-center items-center">
                  <span class="text-base font-semibold">{{product.cartAmount}}</span>
                </div>
                       
                <button class=" w-8 h-10 flex border justify-center items-center hover:bg-gray-300"
                @click="increaseAmount(product.id)">
                  <PlusIcon class="w-5 h-5"/>
                </button>

              </div>
            </td>

            <!--//* SUBTOTAL -->
            <td class="px-10 py-4 whitespace-nowrap text-base font-semibold">
              ${{ product.cartAmount.toFixed(2) * product.price.toFixed(2)}}
            </td>

            <!--//* Delete icons -->
            <td class="pr-6 py-4 whitespace-nowrap text-base font-semibold">
              <XCircleIcon class="h-5 w-5 cursor-pointer" />
            </td>

          </tr>
         
        </tbody>
      </table>

     
        
      <!--//* FOOTER BUTTON -->
      <div class="flex flex-row justify-between pt-5">

        <router-link to="/shop">
          <button class="btn bg-secundary hover:bg-secundary">
            <ArrowLeftIcon class="w-5 h-5 mx-2"/>
            <span>CONTINUE SHOPPING</span>
          </button>
        </router-link>
         
        <button class="btn bg-secundary hover:bg-secundary">
          APPLY COUPON
        </button>
      </div>

    </div> 

    <!--//* CHECK LIST -->
    <div class="w-96 h-80 sticky top-10 px-5 py-6 border ml-5 flex flex-col justify-center shadow-xl space-y-5">
      
      <div class="h-2 w-full flex items-center">
        <h1 class="text-lg font-bold">CART TOTALS</h1>
      </div>

      <hr class="w-full h-px bg-gray-600"/>

      <div class="flex flex-row justify-between items-center font-bold text-sm">
        <span>Subtotal</span>
        <span>${{totalMoneyOnCart.toFixed(2)}}</span>
      </div>

      <hr class="w-full h-px bg-gray-600"/>

      <div class="space-y-5">
        <div class="flex flex-row justify-between items-center font-bold text-2xl">
          <span>Total</span>
          <span>${{totalMoneyOnCart.toFixed(2)}}</span>
        </div>
        <button class="w-full py-3 px-5 uppercase bg-black text-white font-bold hover:bg-gray-700">
          PROCEED TO CHECKOUT
        </button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent} from 'vue'
import { useStore } from 'vuex'
import {PlusIcon, MinusIcon, ArrowLeftIcon, XCircleIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {PlusIcon, MinusIcon, ArrowLeftIcon, XCircleIcon},
  name: 'CheckoutShoppingCart',
  setup() {
    const store = useStore();
    const productsOnCart = computed(()=>store.state.ShopCart.productsOnCart);
    const increaseAmount = (id:any) => store.commit('increaseAmount', id);
    const decreaseAmount = (id:any, amount:any) =>{
       amount <= 1
        ? alert('no puedes bajar mas')
        : store.commit('decreaseAmount', id);
    }

    const totalMoneyOnCart = computed(()=>store.getters.totalMoneyOnCart);
    return {
      increaseAmount, productsOnCart, decreaseAmount, totalMoneyOnCart,
    }
  },
})
</script>
