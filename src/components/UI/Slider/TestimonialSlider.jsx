import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoPlaySpeed: 3000,
    slidesToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quae eaque. Cumque eaque perspiciatis necessitatibus blanditiis neque
          quia, quis iusto minima vitae beatae veniam dolorem? Minus libero id
          architecto sunt?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava01} alt="testimonial-i" className="w-25 rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quae eaque. Cumque eaque perspiciatis necessitatibus blanditiis neque
          quia, quis iusto minima vitae beatae veniam dolorem? Minus libero id
          architecto sunt?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava01} alt="testimonial-im" className="w-25 rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quae eaque. Cumque eaque perspiciatis necessitatibus blanditiis neque
          quia, quis iusto minima vitae beatae veniam dolorem? Minus libero id
          architecto sunt?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava02} alt="testimonial-image" className="w-25 rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quae eaque. Cumque eaque perspiciatis necessitatibus blanditiis neque
          quia, quis iusto minima vitae beatae veniam dolorem? Minus libero id
          architecto sunt?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava03} alt="testimonial-image" className="w-25 rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider
