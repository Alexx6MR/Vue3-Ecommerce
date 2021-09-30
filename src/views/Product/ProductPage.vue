<template>
  <div class="px-64 flex flex-col justify-start my-5">
    <!--//* PRODUCT HEADER -->
    <div class="flex flex-row justify-between items-start w-full h-full">

      <!--//* PRODUCT IMAGE SELECTOR -->
      <RadioGroup v-model="selected" class="mx-5 h-full flex flex-col space-y-8 mt-2">
        <RadioGroupOption  as="template" v-for="(plan,index) in ProductImages.images" :key="index"
          :value="plan" v-slot="{ active, checked }">          
          <div :class="[ active ? 'ring-4 ring-primary' : '', checked ? 'ring-4 ring-primary' : '',]"
          class="relative w-40 h-24 flex shadow-md cursor-pointer focus:outline-none overflow-hidden">
            <img v-if="plan[index]" :src="plan" class="object-cover w-full h-full">
            <div v-else class="bg-gray-200 w-full h-full"> {{plan[index]}}</div>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    
      <!-- //*IMAGE AND DETAILS  -->
      <product-view :selected="selected" :productid="id"/>
      
    </div>

    <!--//* PARTE DE ABAJO DEL PRODUCTO, PRODUCT DETAILS  -->
    <product-details />

     <!--//* TAB DE PRODUCTOS  -->
    <tab title="Related Products">
      <product-card v-for="(i, index) in relatedProducts" :key="index" :product="i"/>
    </tab>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, computed, ref, watchEffect, watch} from 'vue'
import { useStore } from 'vuex'
import ProductCard from '../../components/card/verticalProductCard.vue'
import Tab from '../../components/components/Tab.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductView from '../../components/components/ProductView.vue'
import {RadioGroup, RadioGroupLabel, RadioGroupDescription, RadioGroupOption} from '@headlessui/vue'

export default defineComponent({
  components: {
        ProductDetails,Tab, ProductView, RadioGroup, RadioGroupLabel, RadioGroupDescription, RadioGroupOption,
        ProductCard, 
    },
  name: 'ProductPage',
  props: ['id'],
  setup(props) {
    window.scroll(0, 0)
    const store = useStore();
    const ProductImages = computed(()=>store.state.products.selectedProduct);
    const relatedProducts = computed(()=>store.getters.relatedProducts);

    const selected: any = ref(null);

    onMounted(()=>{
      store.commit("findProduct", parseInt(props.id));  
      if(ProductImages.value){selected.value = ProductImages.value.images[0]}
      else{
        console.error("todo mal",ProductImages)

        }
    });
 
    return {selected, ProductImages, relatedProducts}
  },
})
</script>

<style scoped>
.h-500px {
  height: 550px;
}
</style>