import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Col, Row } from 'reactstrap'

import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'

import './../styles/all-foods.scss'
import './../styles/pagination.scss'

import ReactPaginate from 'react-paginate'

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === '') {
      return item
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item
  })

  const [pageNumber, setPageNumber] = useState(0)
  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage,
  )
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Helmet title="All-foods">
      <CommonSection title="All Foods" />
      <Container className="pt-4">
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="search__widget d-flex align-items-center justify-content-between">
              <input
                type="text"
                placeholder="I'm looking for..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i class="ri-search-line"></i>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
            <div className="sorting__widget text-end">
              <select name="" id="">
                <option>Default</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>
              </select>
            </div>
          </Col>
          {displayPage.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}

          <div className="pagination pb-4 ">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel="Prev"
              nextLabel="Next"
              containerClassName="paginationBtns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  )
}

export default AllFoods
