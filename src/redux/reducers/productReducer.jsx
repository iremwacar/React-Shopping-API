import { ActionTypes } from "../contants/action-Types";


const initialState= {
    products:[],
}
/*state:geçerli durum, action:Ç aksiyon nesnesi (action da olusturduk)*/
export const productReducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
                return {}    
        default:
           return state;
    }
}