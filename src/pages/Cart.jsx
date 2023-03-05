import React from 'react'

import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'

import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart
