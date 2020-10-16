import * as types from "./types";

const initialState = {
    isLoading: false,
    data: [],
    favourites: [],
    cart: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCTS_LOADING:
            return {...state, isLoading: action.payload};
        case types.PRODUCTS_SAVE:
            return {...state, data: action.payload};
        case types.FAVOURITES_SAVE:
            return {...state, favourites: action.payload};
        case types.CART_SAVE:
            return {...state, cart: action.payload};
        default:
            return state;
    }
};