import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - Hi-Tech Freak New</title>
        <meta property="og:title" content="About-Us - Hi-Tech Freak New" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <FooterGray rootClassName="footer-gray-root-class-name"></FooterGray>
    </div>
  )
}

export default AboutUs
