import { createSlice } from "@reduxjs/toolkit";

// Getting data from LocalStorage if they exist
const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const totalQuantity = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0

const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0
// Getting data from LocalStorage if they exist

const setItemFunc = (item, totalQuantity, totalAmount) => {
    localStorage.setItem("cartItems", JSON.stringify(item))
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity))
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount))
}

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {

        // ======addItem======///
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity++

            if (!existingItem) {
                //=== Direct mutation here, not to be done on only redux ///
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (total + Number(item.price) * Number(item.quantity)
                // initial value should be 0
            ), 0)

            // Local storage Implementation

            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems.map((item) => item)));

            // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));

            // localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))

            setItemFunc(state.cartItems.map((item) => item), state.totalQuantity, state.totalAmount)
            // Local storage Implementation

        },

        // ====== removeItem ======///
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
                // initial value should be 0

            ), 0)

            // Local storage Implementation
            setItemFunc(state.cartItems.map((item) => item), state.totalQuantity, state.totalAmount)
            // Local storage Implementation
        },
        // ====== deleteItem ======///
        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id)
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
                // initial value should be 0

            ), 0)
            // Local storage Implementation
            setItemFunc(state.cartItems.map((item) => item), state.totalQuantity, state.totalAmount)
            // Local storage Implementation
        },

        // ====== deleteItem ======///


    }
})

export const cartActions = cartSlice.actions
export default cartSlice