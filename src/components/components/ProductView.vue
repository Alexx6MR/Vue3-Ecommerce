<template>
  <div class="flex flex-row w-10/12">
    <div class="border imageview overflow-hidden">
      <img v-if="selectedImage" :src="[selectedImage ? selectedImage : selectedProduct.value.images[0] ]" 
      :alt="selectedProduct.title" class="h-full w-full">
    </div>

    <div class="h-full w-full flex flex-col justify-start items-start space-y-9 mx-5 my-5">

      <!--//* PRODUCT DETAIL-->
      <div class="space-y-3">
    
        <h1 class="text-4xl font-semibold">{{ selectedProduct.title }}</h1>

        <div class="flex flex-row space-x-4 text-xs text-gray-500">
          <span>Articlenr: {{ selectedProduct.articlenummer }}</span>
          <span>Category: {{ selectedProduct.category }}</span>
        </div>

        <!--//* PRODUCT PRICE -->
        <h2 class="text-4xl font-bold text-primary">${{ selectedProduct.price }}</h2>

        <!--//* STARTS -->
        <div class="flex justify-start items-center space-x-2">
          <div class="flex items-center w-auto">
            <StarIcon class="h-5 w-5" v-for="(i, x) in 5" :key="x" />
          </div>
          <span v-if="selectedProduct.comments"
            >({{ selectedProduct.comments.length }} review)</span>
        </div>

        <!-- //* PRODUCT DESCRIPTION -->
  
          <p class="word-break">{{ selectedProduct.description }}</p>
  
        
      </div>

      <!--//* COLOR and SIZE -->
      <div class="flex flex-col justify-start items-start space-y-2">
        <!--//* COLOR -->
        <RadioGroup v-model="ColorSelected">
          <div class="flex flex-row space-x-7 justify-center items-center">
            <span class="text-base font-semibold cursor-default"> Color:</span>
            <div class="flex flex-row space-x-2">
              <RadioGroupOption
                as="template"
                v-for="(color, index) in selectedProduct.colors"
                :key="index"
                :value="color"
                :class="`h-8 w-8 rounded cursor-pointer bg-${color}-500`"
                v-slot="{ active, checked }"
              >
                <div :class="[active ? 'ring-2 ring-black ' : '',checked ? 'ring-2 ring-black' : '',]"></div>
              </RadioGroupOption>
            </div>
          </div>
        </RadioGroup>

        <!--//* SIZE -->
        <RadioGroup v-model="SizeSelected">
          <div class="flex flex-row space-x-10 justify-center items-center">
            <span class="text-base font-semibold cursor-default">Size:</span>
            <div class="flex flex-row space-x-2">
              <RadioGroupOption as="template" v-for="(size, index) in selectedProduct.sizes"
                :key="index" :value="size" class="h-8 w-8 flex border-2 uppercase justify-center items-center rounded "
                v-slot="{ active, checked }">
                <div :class="[active ? 'ring-2 ring-black ' : '', checked ? 'ring-2 ring-black' : '',]" class="cursor-pointer">
                  {{ size }}
                </div>
              </RadioGroupOption>
            </div>
          </div>
        </RadioGroup>
      </div>

      <!--//* PRODUCT FOOTER CONTENT -->
       <div class="flex flex-row space-x-2">
        <div class="flex flex-row w-36">
          <button
            @click="decreaseAmount()"
            class="flex justify-center items-center h-full w-24 border-2"
          >
            <MinusIcon class="h-5 w-5" />
          </button>
          <div class="flex justify-center items-center h-full w-36 border-2 font-semibold">
            {{ productamount }}
          </div>
          <button
            @click="increaseAmount()"
            class="flex justify-center items-center h-full w-24 border-2"
          >
            <PlusIcon class="h-5 w-5" />
          </button>
        </div>

       
        <button :class="[addCartActive  ? 'bg-primary text-gray-800 ' : 'bg-gray-400 text-gray-500']"
          class=" rounded w-36 h-11 font-bold flex justify-start items-center text-sm"
          @click="addToCart(selectedProduct)">
          <ShoppingBagIcon class="h-5 w-5 mx-2" />
          ADD TO CART
        </button>

      
        <div class="flex flex-row justify-center items-center space-x-1 text-gray-500">
          <HeartIcon
            @click="favoriteToggel"
            :class="[favorite ? 'text-red-600' : '']"
            class="hover:text-red-600 cursor-pointer h-5 w-5"
          />
          <span :class="[favorite ? 'text-gray-800 font-semibold' : '']"
            >Add to wishlist</span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, computed, watchEffect, onMounted } from 'vue'
import {StarIcon, ShoppingBagIcon, PlusIcon, MinusIcon, HeartIcon, MenuAlt1Icon} from '@heroicons/vue/solid'
import { RadioGroup,RadioGroupLabel,RadioGroupDescription,RadioGroupOption} from '@headlessui/vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProductView',
  components: {RadioGroup,RadioGroupLabel,RadioGroupDescription,RadioGroupOption,
              MenuAlt1Icon, StarIcon,ShoppingBagIcon,PlusIcon,MinusIcon,HeartIcon},
  props: ["selected","productid"],
  setup(props) {
    const store = useStore();
    const ColorSelected = ref<String>('')
    const SizeSelected = ref<String>('')
    const productamount: any = ref<Number>(1)
    const favorite = ref<Boolean>(false)
    const addCartActive = ref<Boolean>(false)
    const selectedImage = ref<String>('');
    const favoriteToggel = () => {favorite.value = !favorite.value}
    const selectedProduct = computed(()=>store.state.products.selectedProduct);
  
    
    onMounted(()=>store.commit("findProduct", parseInt(props.productid)));
    watchEffect(()=>selectedImage.value = props.selected);
    
    const addToCart = ({id,title,category,price,}:any) =>{
      if(addCartActive.value){
        const color = ColorSelected.value;
        const size = SizeSelected.value;
        const image = selectedImage.value;
        const cartAmount = productamount.value;
        const newProduct = {id,title,category,price,size, color,cartAmount, image};
        store.dispatch('addcart', newProduct)
      } else{
        alert("no esta activo");
      }  
    }

    const increaseAmount = () => productamount.value++;
    const decreaseAmount = () =>{
       productamount.value <= 1
        ? alert('no puedes bajar mas')
        : productamount.value--;
    }


    //* BUTTON ACTIVETING CHECK
    watchEffect(()=>{
      if(ColorSelected.value && SizeSelected.value ){
          addCartActive.value = true;
      }
    });


    return { ColorSelected, SizeSelected, favorite, addCartActive, selectedProduct,  productamount,
            favoriteToggel, selectedImage, addToCart, increaseAmount, decreaseAmount
    }
  },
})
</script>

<style scoped>
.imageview {
  height: 500px;
  width: 700px;
}
</style>