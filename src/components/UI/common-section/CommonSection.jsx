import React from 'react'
import { Container } from 'reactstrap'
import './../../../styles/common-section.scss'

const CommonSection = (props) => {
  return (
    <div className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </div>
  )
}

export default CommonSection
