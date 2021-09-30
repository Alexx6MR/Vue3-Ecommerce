<template>
        <div class="flex items-center w-auto">
            <svg v-for="(item,index) in 4" :key="index"
            class="w-3 h-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
        </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: { },
    name: 'RatingStarts',

    setup: () =>({
    })
})
</script>