<template>
    
  
  <div v-if="product" class="h-72 w-full flex flex-row justify-start overflow-hidden my-5 space-x-4">
    
    <!--//* HORIZONTAL IMAGE -->
      <router-link :to="{ name: 'ProductView', params:{ id: product.id}}">
        <div class="object-cover h-80 w-72">
           <img v-if="product.images[0]" :src="product.images[0]" class="object-cover h-full w-full">
            <div v-else class="object-cover h-full w-96 bg-gray-600 flex justify-center items-center">
              <span class="text-4xl animate-pulse">Loading...</span>
            </div>
        </div>
      </router-link>  
    
    <div class="flex flex-col h-60 w-full justify-center my-4">
      
      <!--//* HORIZONTAL Text and Prices -->
      <div class="-space-y-2">
         <span class="uppercase text-xs text-gray-400">{{product.category}}</span>
          <h4 class="text-2xl my-1 font-semibold">{{ product.title }}</h4>
          <span class="text-2xl text-primary font-bold">${{ product.price.toFixed(2) }}</span>
      </div>
         
      
      <!--//* HORIZONTAL Ratings and Reviews -->
      <div class="flex justify-start items-center space-x-2">
        <rating class="text-gray-500"/>
        <span class="my-2 text-gray-500 text-xs">( {{ product.comments.length }} review)</span>
      </div>

          <!--//* HORIZONTAL DESCRIPTION -->
      <div>
        <p class="break-words">{{product.description}}</p>
      </div>

      <button @click="addToCart(product)"
      class="card-btn">
        <!-- ICONO DE carrito -->
        <ShoppingBagIcon class="h-5 w-5 mx-2"/>
        ADD TO CART
      </button>

    </div>
    
	</div>
  <!-- //*SI NO SE ENCUENTRA EL CONTENIDO -->
  <template v-else>
    <div class="card flex justify-center items-center rounded-lg my-5 overflow-hidden bg-gray-400">
        <span class="z-0 text-2xl font-semibold animate-pulse">Loading...</span>
    </div>
  </template>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import rating from '../components/rating.vue'
import {ShoppingBagIcon} from '@heroicons/vue/solid'
import {useStore} from 'vuex'

export default defineComponent({
  components: { rating, ShoppingBagIcon },
  name: 'HorizontalProductCard',
  props:{
    product: {
      type: Object,
      default: {"id": 0 }
    }
  },

  setup(props){

    const store = useStore();

    const addToCart = ({id,title,category,price,}:any) =>{
      const color = props.product.colors[0];
      const size = props.product.sizes[0];
      const image = props.product.images[0]
      const cartAmount = 1;
      const newProduct = {id,title,category,price,size, color,cartAmount, image};
      store.dispatch('addcart', newProduct)
      
    }

    return{
      addToCart
    }
  }
    
 
})
</script>

<style scoped>
.card{
  width: 280px;
  height: 390px ;
}
</style>

