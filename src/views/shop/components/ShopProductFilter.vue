<template>
  <form class="flex flex-col w-96 h-auto max-w-md p-2 mx-auto bg-white divide-y-2 sticky">
    <Disclosure as="div" v-for="section in filters" :key="section.id" class="border-b border-gray-200 py-6" v-slot="{ open }">
     
      <h3 class="-my-3 flow-root">
        <DisclosureButton class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
          <span class="font-medium text-gray-900">
            {{ section.name }}
          </span>
          <span class="ml-6 flex items-center">
            <PlusSmIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
            <MinusSmIcon v-else class="h-5 w-5" aria-hidden="true" />
          </span>
        </DisclosureButton>
      </h3>

      <DisclosurePanel class="pt-6">
        <div class="space-y-6">
          <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
            <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" v-model="section.selected"
            :checked="option.checked" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"/>
            <label :for="`filter-mobile-${section.id}-${optionIdx}`" class="ml-3 min-w-0 flex-1 text-gray-500 cursor-pointer">
              {{ option.label }}
            </label>
          </div>
        </div>
      </DisclosurePanel>

    </Disclosure>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, inject, computed} from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, RadioGroup, RadioGroupLabel, RadioGroupOption,} from '@headlessui/vue'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon,} from '@heroicons/vue/solid'


export default defineComponent({
  components: {Disclosure, DisclosureButton, DisclosurePanel, ChevronDownIcon, 
              FilterIcon, MinusSmIcon, PlusSmIcon, RadioGroup, RadioGroupLabel, RadioGroupOption},
  name: 'ProductFilter',

  setup() {
    const shopProducts = inject('shopProducts');
   
    const filters = ref([
      {id: 'color',
        name: 'Color',
        selected: [],
        options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: false },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'purple', label: 'Purple', checked: false },
        ],
      },
      {id: 'category',
        name: 'Category',
        selected: [],
        options: [
          { value: 'new-arrivals', label: 'New Arrivals', checked: false },
          { value: 'sale', label: 'Sale', checked: false },
          { value: 'travel', label: 'Travel', checked: false },
          { value: 'organization', label: 'Organization', checked: false },
          { value: 'accessories', label: 'Accessories', checked: false },
        ],
      },
      {id: 'size',
        name: 'Size',
        selected: [],
        options: [
          { value: '2l',  label: '2L',  checked: false },
          { value: '6l',  label: '6L',  checked: false },
          { value: '12l', label: '12L', checked: false },
          { value: '18l', label: '18L', checked: false },
          { value: '20l', label: '20L', checked: false },
          { value: '40l', label: '40L', checked: false },
        ],
      },
    ])   


      
      const colors = computed(()=>{
        return filters.value[0].options.filter( item => item.checked == true)
      });


    return {filters, colors}
  },
})
</script>
