import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './../../../styles/testimonialslider.scss'

const TestimonialSlider = () => {
  const settings = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    loop: true,
    grabCursor: true,
    modules: [Autoplay, Pagination],
  }
  return (
    <div>
      <Swiper {...settings} className="mySwiper">
        <SwiperSlide>
          <div>
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quae eaque. Cumque eaque perspiciatis necessitatibus
              blanditiis neque quia, quis iusto minima vitae beatae veniam
              dolorem? Minus libero id architecto sunt?
            </p>
            <div className="d-flex align-items-center gap-3">
              <h6>Donalds steel</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quae eaque. Cumque eaque perspiciatis necessitatibus
              blanditiis neque quia, quis iusto minima vitae beatae veniam
              dolorem? Minus libero id architecto sunt?
            </p>
            <h6>Steve mills</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quae eaque. Cumque eaque perspiciatis necessitatibus
              blanditiis neque quia, quis iusto minima vitae beatae veniam
              dolorem? Minus libero id architecto sunt?
            </p>
            <h6>Jones Dor</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quae eaque. Cumque eaque perspiciatis necessitatibus
              blanditiis neque quia, quis iusto minima vitae beatae veniam
              dolorem? Minus libero id architecto sunt?
            </p>

            <h6>Michael Jobs</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
