import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Helmet from './../components/Helmet/Helmet'
import CommonSection from './../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'

const Login = () => {
  const loginNameRef = useRef()
  const loginPasswordRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form onSubmit={submitHandler} className="form mb-5">
                <div className="form__group">
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    type="password"
                    placeholder="Password"
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Login
                </button>
              </form>
              Need an account? <Link to="/register">create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
