<template>
  <div class="px-64 flex flex-row my-10 space-x-5">
        orden
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {},
  name: 'CheckoutOrderDone',
  props: [],
  setup() {
   
    const store = useStore();


    return {
     
    }
  },
})
</script>
