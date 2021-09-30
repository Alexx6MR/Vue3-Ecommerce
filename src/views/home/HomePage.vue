<template>
    <the-header/>
    <the-main/>
    <the-section/>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import TheSection from './components/TheSection.vue'

export default defineComponent({
    name: 'Home',
    components: {
        TheHeader,
        TheMain,
        TheSection,
    },

    setup(){
        window.scroll(0, 0)
        return{

        }
    }
})
</script>

