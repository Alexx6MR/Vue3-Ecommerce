export const ShopCart = {
    state: {
      productsOnCart: {},
      shoppingMenu: false,
    },
    mutations: {
        setToCart(state: any, payload : any){
            return state.productsOnCart[payload.id] = payload;
         },
         toggelShoppingMenu(state:any){
            state.shoppingMenu = !state.shoppingMenu
         },
         increaseAmount(state:any,payload:any){
            state.productsOnCart[payload].cartAmount = state.productsOnCart[payload].cartAmount + 1 
         },
         decreaseAmount(state:any,payload:any){ 
            state.productsOnCart[payload].cartAmount = state.productsOnCart[payload].cartAmount - 1 
         }
         ,
         removeProduct(state:any,payload:any){ 
            state.productsOnCart[payload] = {}
         }
    },
    actions: {
        addcart({state, commit}:any, product:any){
            if(state.productsOnCart.hasOwnProperty(product.id)){
                if(product.cartAmount > 1){
                    product.cartAmount = state.productsOnCart[product.id].cartAmount + product.cartAmount
                }else{
                    product.cartAmount = state.productsOnCart[product.id].cartAmount + 1
                }
            }else{
                product.cartAmount = product.cartAmount
            }
            commit('setToCart', product);
        }
    },
    getters:{
        totalProductsOnCart(state:any){
            return Object.values(state.productsOnCart).reduce((accumulator:any, {cartAmount}:any) => accumulator + cartAmount, 0);
        },
        totalMoneyOnCart(state:any){
            return Object.values(state.productsOnCart).reduce((accumulator:any, {cartAmount, price}:any) => accumulator + cartAmount * price , 0);
        },
    },
    modules: {
    }

}