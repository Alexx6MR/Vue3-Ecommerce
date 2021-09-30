import axios from 'axios';

export const ProductModule = {
    state: {
        data: [],
        selectedProduct: {}
    },
    mutations: {
        setProducts(state: any, payload : any){
           return state.data = payload;
        },
         findProduct(state: any, id: any){
            const oneProduct = state.data.find((product: { id: any; }) => product.id === id)
            return state.selectedProduct = oneProduct
        }
    },
    actions: {
      async getProducts(context: any){
          try { 
                const res = await axios.get('db/api.json');
                return await context.commit("setProducts", res.data);
          } catch (error) {
              console.error(error);
          }
           
        },

    },
    getters:{
        shopProducts(state: any){
            return state.data
        },
        bestSellers(state: any){
            return state.data.slice(0,10)
        },
        newArrivals(state: any){
            return state.data.slice(3,13);
        },
        ourFeatured(state: any){
            return state.data.slice(5,15);
        },
        bestoftheweek(state:any){
            return state.data.slice(6,10);
        },
        relatedProducts(state:any){
            return state.data.slice(0,4);
        }
      
    },
    modules: {
    }

}