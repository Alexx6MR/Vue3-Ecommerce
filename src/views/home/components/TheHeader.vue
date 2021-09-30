<template>
  <div
    class="px-64 w-full h-auto flex flex-col justify-center items-center mb-10"
  >
    <!-- //*sidebar -->
    <div class="flex flex-row justify-start items-start w-full">
      <ul
        class="
          bg-gray-100
          mr-5
          py-1
          px-3
          h-500px
          w-96
          overflow-hidden
          divide-y divide-gray-400
        "
      >
        <li
          class="
            w-52
            h-12
            text-lg
            font-bold
            flex
            justify-start
            items-center
            text-black
          "
        >
          Browse Our Categories
        </li>

        <li
          class="
            w-52
            h-11
            text-ms text-gray-500
            flex
            justify-start
            items-center
          "
          v-for="(link, index) in sidemenu"
          :key="index"
        >
          {{ link.title }}
        </li>
      </ul>

      <div
        class="
          w-full
          h-500px
          flex
          justify-center
          items-center
          rounded
          overflow-hidden
          bg-gray-600
        "
      ></div>
    </div>

    <!-- //*CATEGORY CARDS -->
 
    <div class="w-full h-auto flex flex-row mt-5 justify-between">
      <div v-for="(card, index) in headercards"
        :key="index" class="cursor-pointer">
          <router-link to="/shop">
          <div class="w-96 h-48 flex justify-start items-end rounded text-white bg-cover bg-center"
          :style="{ backgroundImage: `url('${card.image}')` }">
            <div class="ml-6 mb-6">
              <h1 class="text-xl font-bold">{{ card.title }}</h1>
              <span class="text-sm"> {{ card.amount }} Products</span>
            </div>        
          </div>
          </router-link>

      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'The header',

  setup() {
    
    const sidemenu = [
      { title: 'Get a website with Appnexo' },
      { title: 'Coupon Rain' },
      { title: 'Black Friday Deals' },
      { title: '48H Only Lighting Deals' },
      { title: 'Save 60% With 2Pcs' },
      { title: 'Brand Sale' },
      { title: 'Must-Buy Electronics' },
      { title: 'Christmas Special Offer' },
      { title: 'Cool Man Fashion' },
      { title: 'Under $25' },
    ]

    const headercards = [
      {
        title: 'SHOP MEN',
        amount: '6',
        link: '/shop/men',
        image: 'https://picsum.photos/id/200/200/300',
      },
      {
        title: 'SHOP WOMEN',
        link: '/shop/women',
        amount: '6',
        image: 'https://picsum.photos/id/176/200/300',
      },
      {
        title: 'SHOP ELECTRIC',
        link: '/shop/electric',
        amount: '6',
        image: 'https://picsum.photos/id/251/200/300',
      },
    ]
    
    return {
      sidemenu,
      headercards
    }
  },
})
</script>

<style scoped>
.h-500px {
  height: 500px;
}
</style>
