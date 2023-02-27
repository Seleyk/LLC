import { useMediaQuery } from '@mui/material'
import React from 'react'
import Bestsellers from '../components/Bestsellers'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")


  return (
    <div>
        <Navbar />
        { isNonMobileScreen && <Slider />}
        <Bestsellers />
        <Categories />
    </div>
  )
}

export default Home 