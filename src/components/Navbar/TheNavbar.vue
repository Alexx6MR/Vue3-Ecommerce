<template>

    <!--//* NAVBAR HEADER -->
    <navbar-header/>

  <!-- //*NAV INFERIOR-->
  <div class="z-40 px-64 flex flex-row justify-between bg-white items-center h-auto w-full border-b-2 py-2 mb-5 sticky top-0">
    <!-- //*POPOVER CON LA BUSQUEDA -->
    <Popover class="relative">
      <PopoverButton class="outline-none">
        <div class=" flex justify-center items-center space-x-1 cursor-pointer text-black hover:text-primary">
          <SearchIcon class="h-5 w-5" />
          <span class="pr-1 font-semibold text-lg">Search</span>
        </div>
      </PopoverButton>
      <PopoverPanel class="absolute z-10 w-auto h-auto bg-white shadow-lg border px-2 py-2">
        <div class="flex justify-center items-center bg-gray-200 px-2">
          <input
            type="text"
            class=" focus:outline-none bg-gray-200 px-4 py-1"
            placeholder="typing...."
          />
          <SearchIcon class="h-5 w-5" />
        </div>
      </PopoverPanel>
    </Popover>

    <!-- //*SUB MENU -->    
      <NavbarFooter/>
    

    <!-- //*CARRITO DE COMPRA -->
    <div class="cursor-pointer flex justify-center items-center font-semibold hover:text-primary" @click="toggelShoppingMenu()">
      Cart / ${{totalprice.toFixed(2)}} ({{totalproducts}})
    </div>
  </div>

  
</template>

<script lang="ts">
import { computed, defineComponent} from 'vue'
import { SearchIcon } from '@heroicons/vue/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {useStore} from 'vuex'
import NavbarFooter from './components/NavbarFooter.vue'
import NavbarHeader from './components/NavbarHeader.vue'

export default defineComponent({
  name: 'NavBar',
  components: { SearchIcon, Popover, PopoverButton, PopoverPanel, NavbarFooter, NavbarHeader },
  setup() {
    
    
    const store = useStore();
    const totalproducts = computed(()=>store.getters.totalProductsOnCart);
    const totalprice = computed(()=>store.getters.totalMoneyOnCart);

    const SubMenu = [
      {
        title: 'Shop',
        link: '/shop',
      },
    ]

    const toggelShoppingMenu = ()=> store.commit('toggelShoppingMenu');
    return {
      SubMenu, toggelShoppingMenu, totalproducts, totalprice
    }
  },
})
</script>
