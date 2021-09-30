<template>
  <div
    class="px-64 flex flex-col justify-start items-center h-auto w-full mb-10"
  >
    <!-- BEST OF THE WEEK START -->
    <cards-tab title="Best of the Week">
      <product-card v-for="(i, index) in bestoftheweek" :key="index" :product="i"/>
    </cards-tab>

    <!-- PRODUCT PANNEL START -->
    <ad-pannel :product="adProduct" />

    <!-- LAST NEW START -->
    <cards-tab title="Last News">
      <news-card />
    </cards-tab>

    <!-- SERVICES GARANTI SLIDER -->
    <div
      class="
        flex flex-row
        justify-start
        items-center
        h-auto
        w-full
        mb-10
        divide-x divide-solid
      "
    >
      <div
        v-for="(i, index) in 4"
        :key="index"
        class="
          flex flex-col
          justify-center
          items-center
          rounded-lg
          h-40
          w-72
          overflow-hidden
          my-5
        "
      >
        <!-- top icon -->
        <div
          class="
            w-8
            h-8
            bg-gray-300
            rounded-full
            flex
            justify-center
            items-center
          "
        >
          <LockClosedIcon class="h-5 w-5 text-gray-500"/>
        </div>

        <!-- Text and Prices -->
        <h2 class="text-base font-bold uppercase">free shiping $ return</h2>
        <h4 class="text-sm text-gray-400 my-1 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni.
        </h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import CardsTab from '../../../components/components/Tab.vue'
import NewsCard from '../../../components/card/NewsCard.vue'
import ProductCard from '../../../components/card/verticalProductCard.vue'
import AdPannel from '../../../components/components/adPannel.vue'
import { LockClosedIcon } from '@heroicons/vue/solid'
import {useStore} from 'vuex'

export default defineComponent({
    name: 'The Section',
    components: { ProductCard, NewsCard, CardsTab, AdPannel, LockClosedIcon },

    setup(){
        const store = useStore();
        const Products = [
            {title: "algo 1", price: 239, rated: 3,
                img1:"https://picsum.photos/id/50/200/300",
                img2:"https://picsum.photos/id/51/200/300"
            },

            {title: "algo 2", price: 250, rated: 2,
                img1:"https://picsum.photos/id/60/200/300",
                img2:"https://picsum.photos/id/61/200/300"
            },

            {title: "algo 3", price: 250, rated: 2,
                img1:"https://picsum.photos/id/60/200/300",
                img2:"https://picsum.photos/id/61/200/300"
            },

            {title: "algo 4", price: 250, rated: 2,
                img1:"https://picsum.photos/id/60/200/300",
                img2:"https://picsum.photos/id/61/200/300"
            }
        ]

        const bestoftheweek = computed(()=>store.getters.bestoftheweek);
         
        const adProduct = {
        title: "Electric Kettle",
        class: 'FLASH SALE',
        desc: 'Safe & Water boiling in 60 seconds',
        image:"https://picsum.photos/id/135/200/300",
        price: 25.00
        }

        return{
            Products,
            adProduct,
            bestoftheweek
        }
    }
})
</script>
