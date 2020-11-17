import * as types from "./types";

export const productsLoading = (isLoading) => ({
    type: types.PRODUCTS_LOADING,
    payload: isLoading
});

export const savingProducts = (data) => ({
    type: types.PRODUCTS_SAVE,
    payload: data
});

export const savingFavourites = (data) => ({
    type: types.FAVOURITES_SAVE,
    payload: data
});

export const savingCart = (data) => ({
    type: types.CART_SAVE,
    payload: data
});