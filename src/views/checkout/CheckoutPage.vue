<template>
  <div class="px-64 flex flex-row my-10 space-x-5 ">
    <TabGroup :defaultIndex="tabsIndex">
      <div class="flex flex-col justify-center items-center w-full">
        <TabList class="flex flex-row space-x-4 items-center justify-center text-gray-500">
          <Tab class="flex flex-row uppercase font-bold text-lg hover:text-primary" v-slot="{ selected }">
            <span :class="[selected ? 'text-primary': '']"> 1. SHOPPING CART </span>
          </Tab>
          <ChevronRightIcon class="w-7 h-7"/>
          <Tab class="flex flex-row uppercase font-bold text-lg hover:text-primary" v-slot="{ selected }">
            <span :class="[selected ? 'text-primary': '']"> 2. CHECKOUT </span>
          </Tab>
          <ChevronRightIcon class="w-7 h-7"/>
          <Tab class="flex flex-row uppercase font-bold text-lg" v-slot="{ selected }" disabled>
            <span :class="[selected ? 'text-primary': '']"> 3. ORDER COMPLETE </span>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <shoppingcart/>
          </TabPanel>
          <TabPanel>
            <checkout/>
          </TabPanel>
          <TabPanel>
            <ordercomplete/>
          </TabPanel>
        </TabPanels>
        
      </div>
        
    </TabGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue'
import { useStore } from 'vuex'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/solid'
import Checkout from './components/CheckOutView.vue';
import Ordercomplete from './components/ordercomplete.vue';
import Shoppingcart from './components/shoppingcart.vue';

export default defineComponent({
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel, Checkout,Ordercomplete, Shoppingcart, ChevronRightIcon,},
  name: 'checkoutView',
  props: [],
  setup() {
    window.scroll(0, 0)

    const tabsIndex = ref(0);

    

    return { tabsIndex
     
    }
  },
})
</script>
