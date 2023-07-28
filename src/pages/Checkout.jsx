import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import './../styles/checkout.scss'

const Checkout = () => {
  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterNumber, setEnterNumber] = useState('')
  const [enterCountry, setEnterCountry] = useState('')
  const [enterCity, setEnterCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const shippingInfo = []

  const submitHandler = (e) => {
    e.preventDefault()
    const userShippingAdress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      psotalCode: postalCode,
    }
    shippingInfo.push(userShippingAdress)
    console.log(shippingInfo)
  }

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className="mb-4 mt-4">Shipping Address</h6>
            <form onSubmit={submitHandler} className="checkout__form">
              <div className="form__group">
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setEnterName(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEnterEmail(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  required
                  type="number"
                  placeholder="Phone number"
                  onChange={(e) => setEnterNumber(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  required
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setEnterCountry(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  required
                  type="text"
                  placeholder="City"
                  onChange={(e) => setEnterCity(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  required
                  type="number"
                  placeholder="Postal Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <button className="addToCart__btn">Payment</button>
            </form>
          </Col>

          <Col lg="4" md="6">
            <div className="checkout__bill">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal:<span>${cartTotalAmount}</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping:<span>${shippingCost}</span>
              </h6>
              <div className="checkout__total">
                <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>${totalAmount}</span>{' '}
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

export default Checkout
