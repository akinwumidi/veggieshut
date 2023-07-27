import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/veggiesHutlogo.svg'
import { Link } from 'react-router-dom'
import ColorSwatcher from '../Color-swatcher/ColorSwatcher'

import {
  RiSendPlaneLine,
  RiLinkedinFill,
  RiGithubLine,
  RiTwitterLine,
  RiFacebookFill,
} from 'react-icons/ri'

import '../../styles/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <div className="logo__container  ">
                <div className="logo ">
                  <img src={logo} alt="logo" />
                </div>
                <span className="logo___name">
                  Veggies<span className="logo__name-spice"> Hut</span>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                minima asperiores modi rerum aliquam eos repellendus similique
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Quick Links</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>
                  <Link to="/allfoods">Foods</Link>
                </span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>
                  <Link to="/cart">Carts</Link>
                </span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>
                  <Link to="/contact">Quick contact</Link>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Location: City, state, Country 340543</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Phone: 0121212 1221212</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 p-0">
                <span>Email: example@email.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email"></input>
              <span>
                <RiSendPlaneLine />
              </span>
            </div>

            <div className="social__links d-flex mt-3 align-center gap-2 justify-content-center ">
              <p className="m-o">Follow:</p>
              <span>
                <Link to="https://www.linkedin.com/in/akinwumidi/">
                  <RiFacebookFill />
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/akinwumidi/">
                  <RiTwitterLine />
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/akinwumidi/">
                  <RiGithubLine />
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/akinwumidi/">
                  <RiLinkedinFill />
                </Link>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">VeggiesHut &copy; 2022</p>
          </Col>

          <Col lg="6" md="6">
            <div className="d-flex justify-content-end">
              <ColorSwatcher />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
