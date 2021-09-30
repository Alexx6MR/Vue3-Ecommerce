<template>

<!--//* VERTICAL CARD -->
<div>

  <div v-if="product"
  class="h-auto w-full font-medium flex flex-col justify-start overflow-hidden my-5">
    
    <!--//* VERTICAL IMAGE -->
      <router-link :to="{ name: 'ProductView', params:{ id: product.id}}">
        <div class="object-cover w-full h-64">
          <img v-if="product.images[0]" :src="product.images[0]" class="object-cover h-full w-72 ">
          <div v-else class="object-cover w-full h-64 bg-gray-600 flex justify-center items-center">
            <span class="text-4xl animate-pulse">Loading...</span>
          </div>
        </div>
      </router-link>  
    
    <!--//* VERTICAL TEXT and PRICES -->
    <div class="-space-y-1">
         <span class="uppercase text-xs text-gray-400">{{product.category}}</span>
          <h4 class="text-lg text-gray-600">{{ product.title }}</h4>
          <span class="text-base text-primary ">${{ product.price.toFixed(2) }}</span>
      </div>

    <!--//* VERTICAL RATING and RREVIEWS -->
    <div class="flex justify-start items-center space-x-2">
      <rating/>
      <span class="mb-2 my-2 text-gray-500 text-xs">( {{ product.comments.length }} review)</span>
    </div>

    <!--//* VERTICAL Shop Buttom -->
  
    <button @click="addToCart(product)"
      class="card-btn">
        <!-- ICONO DE carrito -->
        <ShoppingBagIcon class="h-5 w-5 mx-2"/>
        ADD TO CART
    </button>

	</div>
  <!-- //*SI NO SE ENCUENTRA EL CONTENIDO -->
  <template v-else>
    <div class="card flex justify-center items-center rounded-lg my-5 overflow-hidden bg-gray-400">
        <span class="z-0 text-2xl font-semibold animate-pulse">Loading...</span>
    </div>
  </template>

</div>
  

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import rating from '../components/rating.vue'
import {ShoppingBagIcon} from '@heroicons/vue/solid'
import {useStore} from 'vuex'

export default defineComponent({
  components: { rating, ShoppingBagIcon },
  name: 'VerticalProductCard',
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

