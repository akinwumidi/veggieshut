import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Helmet from './../components/Helmet/Helmet'
import CommonSection from './../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'

const Register = () => {
  const signupNameRef = useRef()
  const signupPasswordRef = useRef()
  const signupEmailRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form onSubmit={submitHandler} className="form mb-5">
                <div className="form__group">
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    type="password"
                    placeholder="Password"
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  SignUp
                </button>
              </form>
              Already have an account? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
export default Register
