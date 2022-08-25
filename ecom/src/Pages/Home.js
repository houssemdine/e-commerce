import React from 'react'

import Categories from '../components/Categories'
import Footer from '../components/Footer'

import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
    return (
        <div>
        
           
           <Slider/>
           <Products/>
           <Categories/>
          
           <Footer/>
        </div>
    )
}

export default Home
