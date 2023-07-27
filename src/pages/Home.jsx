import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import {
  RiWallet2Line,
  RiEmpathizeLine,
  RiCurrencyLine,
  RiArrowRightLine,
  RiShoppingBag3Line,
  RiTruckLine,
} from 'react-icons/ri'

import heroImg from '../assets/images/hero.svg'
import '../styles/hero-section.scss'
import '../styles/home.scss'

import products from '../assets/fake-data/products.js'
import foodcategoryImg01 from '../assets/images/hamburger.png'
import foodcategoryImg02 from '../assets/images/pizza.png'
import foodcategoryImg03 from '../assets/images/bread.png'
import testimonials from '../assets/images/testimonials.svg'

import ProductCard from '../components/UI/product-card/ProductCard'
import TestimonialSlider from '../components/UI/Slider/TestimonialSlider'

const feautureData = [
  {
    title: 'Fast Delivery',
    icon: <RiTruckLine />,
    desc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nihil eius rerum, porro magnam deleniti nostrum nulla',
  },
  {
    title: 'Pocket Friendly',
    icon: <RiWallet2Line />,
    desc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nihil eius rerum, porro magnam deleniti nostrum nulla',
  },
  {
    title: 'Purely Veggan',
    icon: <RiEmpathizeLine />,
    desc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nihil eius rerum, porro magnam deleniti nostrum nulla',
  },
  {
    title: 'Buy 3, one on us',
    icon: <RiCurrencyLine />,
    desc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nihil eius rerum, porro magnam deleniti nostrum nulla',
  },
]

const Home = () => {
  const [category, setCategory] = useState('All')
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  const sortWords = ['Pizza', 'Bread', 'Burger']
  useEffect(() => {
    for (var isort = 0; isort < sortWords.length; isort++) {
      if (category === sortWords[isort]) {
        const filteredProducts = products.filter(
          (item) =>
            item.category.toLowerCase() === sortWords[isort].toLowerCase(),
        )

        setAllProducts(filteredProducts)
      } else {
        setAllProducts(products)
      }
    }
  }, [category])

  return (
    <Helmet title="Home">
      <section className="home__banner">
        <Container className="p-0">
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h1 className="mb-2 hero-tittle">
                  <span>VEGETARIAN?</span> <br />
                  not a crime!
                  <span>
                    <br />
                    we've got you covered
                  </span>
                </h1>
                <h5 className="mb-3"> Enjoy homemade vegetarian meals</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur nihil eius rerum, porro magnam deleniti nostrum nulla
                  ipsam ab maxime doloremque veniam consequuntur! Aspernatur ea
                  dolor, deserunt nihil ipsam nobis?
                </p>

                <div className="hero__btns align-items-center gap-5 d-flex">
                  <button className="d-flex order__btn align-items-center justify-content-between">
                    Order now
                    <RiShoppingBag3Line />
                  </button>
                  <button className=" all__foods-btn d-flex align-items-center justify-content-between">
                    <Link to="/allfoods">
                      See all foods <RiArrowRightLine />
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="her-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Recommended meals</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feauture__title">You meal is one click away</h2>
              <h2 className="feauture__title">
                Order <span>Now !!!</span>
              </h2>
              <p className="mt-1 mb-4 feature__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                perspiciatis error non deserunt, autem provident, repellendus
                sit minus laudantium aut optio et natus inventore possimus
                praesentium adipisci fugit, velit dicta!Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. possimus
              </p>
            </Col>
            {feautureData.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <div className="feature__item px-3 py-3 text-left ">
                  <span className="feature_icon">{item.icon}</span>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Our Menu</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center gap-2 justify-content-center">
                <button
                  className={`all__btn  ${
                    category === 'All' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('All')}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('Burger')}
                  className={`d-flex gap-2 align-items-center ${
                    category === 'Burger' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodcategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  onClick={() => setCategory('Pizza')}
                  className={`d-flex gap-2 align-items-center ${
                    category === 'Pizza' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodcategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex gap-2 align-items-center ${
                    category === 'Bread' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('Bread')}
                >
                  <img src={foodcategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item, index) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle">Testimonial</h5>
                <h2> What our customers are saying</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  nulla iure excepturi beatae nisi exercitationem blanditiis
                  accusamus vero sapiente officiis accusantium harum, labore a
                  vitae? Dicta consequuntur culpa accusamus hic.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img
                src={testimonials}
                alt="testimonial-picx"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
