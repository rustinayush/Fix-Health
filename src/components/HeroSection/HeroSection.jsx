import React from 'react'
import "./HeroSection.css"
import heroImage from "../../assets/HeroSectionIMG.avif"
import BookingForm from "../AppointmentForm/AppointmentForm"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero Section" />
      <div className='booking'>
        <BookingForm />
      </div>
    </div>
  )
}

export default HeroSection