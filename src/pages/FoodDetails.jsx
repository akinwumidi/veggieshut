import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import products from '../assets/fake-data/products'
import { Container, Row, Col } from 'reactstrap'
import '../styles/product-details.scss'

import Productcard from '../components/UI/product-card/ProductCard'

import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

const FoodDetails = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
  }

  const dispatch = useDispatch()
  const [tab, setTab] = useState('desc')
  const { id } = useParams()
  const product = products.find((product) => product.id === id)
  const [previewImg, setPreviewImg] = useState(product.image01)
  const { title, price, category, desc, image01 } = product

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      }),
    )
  }

  const relatedProduct = products.filter((item) => category === item.category)

  useEffect(() => {
    setPreviewImg(product.image01)
    window.scrollTo(0, 0)
  }, [product])

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img
                    src={product.image01}
                    alt="product-preview1"
                    className="w-50"
                  />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img
                    src={product.image02}
                    alt="product-preview2"
                    className="w-50"
                  />
                </div>
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img
                    src={product.image03}
                    alt="product-preview2"
                    className="w-50"
                  />
                </div>
              </div>
            </Col>

            <Col lg="3" md="3">
              <div className="product__main-img">
                <img
                  src={previewImg}
                  alt="main-product-preview2"
                  className="w-100"
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__products-content">
                <h2 className="product__title"> {title}</h2>
                <p className="product__price">
                  Price: <span>{price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart__btn" onClick={() => addItem()}>
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={`${tab === 'desc' ? 'tab__active' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab('rev')}
                  className={`${tab === 'rev' ? 'tab__active' : ''}`}
                >
                  Review
                </h6>
              </div>
              {tab === 'desc' ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-3">
                    <p className="user__name mb-0">John Deo</p>
                    <p className="user__email mb-0">John@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">John Deo</p>
                    <p className="user__email mb-0">John@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">John Deo</p>
                    <p className="user__email mb-0">John@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <form action="" className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        required
                        placeholder="Enter your Email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        required
                        placeholder="Enter your Message"
                        onChange={(e) => setReviewMsg(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-3 mt-5">
              <h5 className="related__Product-title">You might also like</h5>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" key={item.id} className="mb-3">
                <Productcard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails
