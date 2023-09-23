import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FooterGray from '../components/footer-gray'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-In - Hi-Tech Freak New</title>
        <meta property="og:title" content="Sign-In - Hi-Tech Freak New" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="sign-in-hero">
        <div className="sign-in-container1">
          <div className="sign-in-card">
            <h1 className="sign-in-text HeadingOne">Login </h1>
            <div className="sign-in-container2">
              <form className="sign-in-form">
                <div className="sign-in-container3">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    autoFocus
                    placeholder="Enter Email"
                    className="sign-in-textinput input teleport-show"
                  />
                </div>
                <div className="sign-in-container4">
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    autoFocus
                    maxlength="20"
                    minlength="5"
                    placeholder="Enter Password"
                    className="sign-in-textinput1 input"
                  />
                </div>
              </form>
            </div>
            <div className="sign-in-container5">
              <div className="sign-in-container6">
                <PrimaryPinkButton button="Login"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="Cancel"></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/curved6-1500h.jpg" className="sign-in-image" />
      <FooterGray rootClassName="footer-gray-root-class-name3"></FooterGray>
    </div>
  )
}

export default SignIn
