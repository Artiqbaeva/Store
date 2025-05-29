export const initialState = {
    wishlist: [],
}

export const reducer = (state, action) => {
    switch(action.type){
        case "LIKED":
            let isExist = state.wishlist.some(({id}) => id === action.payload.id)
            if(isExist){
                return {...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id)}
            }else{
                return {...state, wishlist: [...state.wishlist, action.payload]}
            }
        default:
            return state
    }
}