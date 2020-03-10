import * as actionTypes from './actionTypes';

const initialState = {
    productList: [],
    boughtProductList: [],
    productCategory: []
}

const ShoppingListReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                productList: [action.payload, ...state.productList]
            }
        case actionTypes.ADD_BOUGHT_PRODUCT:
            return {
                ...state, 
                productList: state.productList.filter(product => product.id !== action.payload.id),
                boughtProductList: [action.payload, ...state.boughtProductList]
            }
        case actionTypes.FETCH_PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                productCategory: action.payload
            }
        case actionTypes.CLEAR_SHOPPING_LIST:
            return {
                ...state,
                productList: [],
                boughtProductList: []
            }
        default: 
            return state;
    }
}

export default ShoppingListReducer;