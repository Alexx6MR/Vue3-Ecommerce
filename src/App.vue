<template >
  <div class="select-none">

    <the-navbar/>
      <shopping-cart/>
      <router-view></router-view>
    
    <the-footer/>
  </div>
</template>

<script lang="ts">
import { onMounted ,defineComponent } from 'vue'
import TheNavbar from './components/Navbar/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import {useStore} from 'vuex'
import ShoppingCart from './components/Cart/CartMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheNavbar,
    TheFooter,
    ShoppingCart
    },

  setup()  {
    const store = useStore();
    onMounted(()=>store.dispatch("getProducts"));
    return{

    }
  }
  
})
</script>