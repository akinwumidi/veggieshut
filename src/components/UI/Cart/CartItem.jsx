import React from 'react'
import { ListGroupItem } from 'reactstrap'
// import productImg from '../../../assets/images/product_01.1.jpg'
import '../../../styles/cart-item.scss'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item
  const dispatch = useDispatch()

  //   increment item logic
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      }),
    )
  }
  // decrease tiem logic
  const derementItem = () => {
    dispatch(cartActions.removeItem(id))
  }
  // delete item logic
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <ListGroupItem className=" border-0 cart__item px-4">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
      </div>
      <div className="cart__product-info d-flex align-items-center gap-4 justify-content-between">
        <div>
          <h6 className="cart__profuct-title">{title}</h6>
          <p className="d-flex align-items-center gap-5 cart__product-price">
            {quantity}X <span>${totalPrice}</span>
          </p>
          <div className="d-flex align-items-center gap-3 increase__decrease-btn justify-content-between ">
            <span className="increase__btn" onClick={incrementItem}>
              <i class="ri-add-line"></i>
            </span>
            <span className="quantity">{quantity}</span>
            <span className="decrease__btn" onClick={derementItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 11h14v2H5z" />
              </svg>
            </span>
          </div>
        </div>
        <span className="delete__btn" onClick={deleteItem}>
          <i class="ri-close-line"></i>
        </span>
      </div>
    </ListGroupItem>
  )
}

export default CartItem
