<template>
    <div class="container my-5">

        <!-- Tab Title -->
        <nav class="flex flex-row h-auto w-full justify-center my-1">
            <div class="flex flex-col justify-center items-center">
                <h1 class=" py-3 px-6 block text-xl font-bold">
                    {{title}}
                </h1>
                <div class="bg-primary h-1 w-12"></div>
            </div>
        </nav>


        <!-- card new container -->
        <div class="flex flex-row justify-start space-x-6 items-center w-full h-auto mt-6">

            <!-- Aqui va una carta externa -->
            <slot></slot>

        </div>

    </div>        
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Cards Tab',
    props: {title: String},
    
    setup(){
    }


})
</script>