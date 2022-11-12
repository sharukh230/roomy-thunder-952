import React , {useReducer} from 'react'


export const addToCart=(data)=>({
  type:"ADD_TO_CART",
  payload: data,
})

export const removeFromCart= (id)=>({
  type: "REMOVE_FROM_CART",
  payload: id,
})

export const checkout=()=>({
  type: "CHECKOUT",
})



const reducer =(state, action)=>{
  switch (action.type){
      case "ADD_TO_CART":{
          return [...state, action.payload]
      }
      case "REMOVE_FROM_CART":{
          const cartAfterRemoval= state.filter(
              (item)=>item.id!==action.payload
          );
          return cartAfterRemoval
      }
      case "CHECKOUT":{
          return [];
      }
      default:{
          return state;
      }
  }
}

export const CartContext = React.createContext();
const initState=[]
export const CartContextProvider=({children})=> {
  const [state, dispatch] =useReducer(reducer, initState)
  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}
