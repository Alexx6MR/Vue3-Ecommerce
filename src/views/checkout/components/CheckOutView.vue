<template>
  <div class="w-full flex flex-row my-10 space-x-5">

    <form action="#" method="POST">
      <div class="shadow overflow-hidden sm:rounded-md">
          
        <div class="px-4 py-5 space-y-6 bg-white sm:p-6">

          <!--//* BASIC INFORMATION -->
          <div class="flex flex-col space-y-5">

              <!--//* ENUMATION -->
            <div class="flex flex-row space-x-3">
                <div class="flex justify-center items-center px-2 py-0 rounded-full border-2 border-primary">
                    <span class="text-lg font-bold text-primary">1</span>
                </div>

                <span class="text-lg font-semibold">Your Basic Information</span>
            </div>
              
            <!--//* NAME - LASTNAME -->
            <div class="flex flex-row space-x-3">

              <!--//* NAME -->
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="form-input" />
              </div>

              <!--//* LASTNAME -->
              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="form-input" />
              </div>

            </div>
              
            <!--//* Email -->
            <div class="col-span-12 sm:col-span-4">
              <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="text" name="email-address" id="email-address" autocomplete="email" class="form-input" />
            </div>

          </div>

          <!--//* PAYMENT INFORMATION -->
          <div class="flex flex-col space-y-5">

            <!--//* ENUMATION -->
            <div class="flex flex-row space-x-3">
              <div class="flex justify-center items-center px-2 py-0 rounded-full border-2 border-primary">
                <span class="text-lg font-bold text-primary">2</span>
              </div>
              <span class="text-lg font-semibold">Your Payment Information</span>
            </div>
              
            <!--//* Credit Card Information-->
            <div class="w-96 flex flex-row justify-center items-center space-x-2">

              <!--//* Credit Card -->
              <div class="w-full">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Credit Card</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="form-input" />
              </div>

              <!--//* MM/YY CVC -->
              <div class="flex flex-row space-x-1">
                <div class="w-16 flex flex-col items-center">
                  <label for="last-name" class="block text-xs font-medium text-gray-700">MM/YY</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="form-input" />
                </div>

                <div class="w-16 flex flex-col items-center">
                  <label for="last-name" class="block text-xs font-medium text-gray-700">CVC</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="form-input" />
                </div>
              </div>
                
            </div>
              

          </div>

        </div>

      </div>
    </form>

       
    <!--//* CHECK LIST -->
    <div class="w-96 sticky top-10 px-5 py-6 border ml-5 flex flex-col justify-center shadow-xl space-y-5">
      
      <div class="h-2 w-full flex items-center">
        <h1 class="text-lg font-bold">YOUR ORDER</h1>
      </div>

      <hr class="w-full h-px bg-gray-600"/>

        <!--//* PRODUCT LIST -->
      <div class="flex flex-col justify-between">
        <span class="font-bold text-lg mb-2">Product</span>
        
        <ul class="space-y-1">

          <li v-for="(product,index) in productsOnCart" :key="index" class="flex flex-row justify-between">
            <div class="flex flex-row items-center justify-center text-gray-500">
              <h1 class="text-sm mr-2">{{product.title}}</h1>
                x
              <span class="ml-2">{{product.cartAmount}}</span>
            </div>
            <span class="font-bold text-md">$ {{product.price}}</span>
          </li>

        </ul>

      </div>

      <hr class="w-full h-px bg-gray-600"/>

      <div class="flex flex-row justify-between items-center font-bold text-base">
        <span>Subtotal</span>
        <span>$ {{totalMoneyOnCart}}</span>
      </div>
        
      <hr class="w-full h-px bg-gray-600"/>

      <div class="space-y-5">
        <div class="flex flex-row justify-between items-center font-bold text-xl">
          <span>Total</span>
          <span class="text-primary text-2xl">$ {{totalMoneyOnCart}}</span>
        </div>
        <button class="w-full py-3 px-5 uppercase bg-black text-white font-bold hover:bg-gray-700">
          PLACE ORDER
        </button>
      </div>
        
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {},
  name: 'checkout',
  props: [],
  setup() {
    const store = useStore();
    const totalMoneyOnCart = computed(()=>store.getters.totalMoneyOnCart);
    const productsOnCart = computed(()=>store.state.ShopCart.productsOnCart);


    return { totalMoneyOnCart, productsOnCart
     
    }
  },
})
</script>
