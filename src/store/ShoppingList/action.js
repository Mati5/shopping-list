import * as actionTypes from './actionTypes';
import axios from 'axios';
import store from '../index';

import productList from '../../assets/products.json';

export const addProductSuccess = (product) => ({
    type: actionTypes.ADD_PRODUCT,
    payload: product
});

export const addBoughtProductSuccess = (product) => ({
    type: actionTypes.ADD_BOUGHT_PRODUCT,
    payload: product
});

export const addBoughtProduct = (product) => dispatch => {
    product.bought = true;
    
    dispatch(addBoughtProductSuccess(product))
};

export const addProduct = (product) => dispatch => {
    const isExisted = store.getState().shoppingList.productList.findIndex(el => el.name == product.name);
    
    if(isExisted<0) {
        let newProduct = {};
        newProduct.id = new Date().getUTCMilliseconds();
        newProduct.bought = false;
        newProduct.name = product.name;
        newProduct.category = product.category;
    
        dispatch(addProductSuccess(newProduct));
    }
  
};

export const fetchProductListSuccess = (productCategoryList) => ({
    type: actionTypes.FETCH_PRODUCT_CATEGORY_SUCCESS,
    payload: productCategoryList
});

export const fetchProductList = () => dispatch => {
    dispatch(fetchProductListSuccess(productList));
}

export const clearShoppingList = () => ({
    type: actionTypes.CLEAR_SHOPPING_LIST
});