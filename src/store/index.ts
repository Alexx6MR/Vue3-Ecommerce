import { createStore } from 'vuex'
import { ProductModule } from './productmodule'
import { ShopCart } from './shopCart'

export default createStore({
    state: { 
    },
    mutations: {
    },
    actions: {
        
    },
    getters:{
    },
    modules: {
        products: ProductModule,
        ShopCart: ShopCart
    }
})