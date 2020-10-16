import axios from "axios";
import {productsLoading, savingFavourites, savingProducts, savingCart} from "./actions";

export const loadProducts = () => dispatch => {
    dispatch(productsLoading(true));

    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    axios.get('/products.json')
        .then(res => {
            const data = res.data.map(product => ({...product, isFavourite: favourites.indexOf(product.id) > -1}));

            dispatch(savingProducts(data));
            dispatch(productsLoading(false));
        })
};

export const loadFavourites = () => dispatch => {
    dispatch(productsLoading(true));

    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    axios.get('/products.json')
        .then(res => {
            const data = res.data.filter(product => favourites.indexOf(product.id) > -1)
                .map(product => ({...product, isFavourite: true}));

            dispatch(savingFavourites(data));
            dispatch(productsLoading(false));
        })
};

export const loadCart = () => dispatch => {
    dispatch(productsLoading(true));

    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    axios.get('/products.json')
        .then(res => {
            const data = res.data.filter(product => cart.hasOwnProperty(product.id))
                .map(product => ({...product, isCart: true, count: cart[product.id]}));

            dispatch(savingCart(data));
            dispatch(productsLoading(false));
        })
};

export const toggleFavourite = (productId) => (dispatch, getState) => {
    const { products } = getState();
    const { data, favourites } = products;

    const index = data.findIndex(product => product.id === productId);

    const productsArr = [...data];
    let favouritesArr = [];

    productsArr[index].isFavourite = !productsArr[index].isFavourite;

    if (!productsArr[index].isFavourite) {
        favouritesArr = favourites.filter(product => product.id !== productId);
    } else {
        favouritesArr = [...favourites, productsArr[index]];
    }

    localStorage.setItem('favourites', JSON.stringify(favouritesArr.map(product => product.id)));

    dispatch(savingProducts(productsArr));
    dispatch(savingFavourites(favouritesArr));
};

export const addToCart = (productId) => (dispatch, getState) => {
    const { products } = getState();
    const { cart, data } = products;

    let cartArr = [...cart];
    const index = cartArr.findIndex(product => product.id === productId);

    if (index > -1) {
        cartArr[index].count++;
    } else {
        const product = data.find(elem => elem.id === productId);
        cartArr = [...cartArr, {...product, isCart: true, count: 1}];
    }

    localStorage.setItem('cart', JSON.stringify(
        cartArr.reduce((prev, curr) => {
            prev[curr.id] = curr.count;
            return prev;
        }, {})
    ));

    dispatch(savingCart(cartArr));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    const { products } = getState();
    const { cart } = products;

    const cartArr = [...cart].filter(product => product.id !== productId);

    localStorage.setItem('cart', JSON.stringify(
        cartArr.reduce((prev, curr) => {
            prev[curr.id] = curr.count;
            return prev;
        }, {})
    ));

    dispatch(savingCart(cartArr));
};