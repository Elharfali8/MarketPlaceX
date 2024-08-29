import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Hero } from '../components'

const Home = () => {
    

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios('https://api.escuelajs.co/api/v1/products')
    //             const data = response.data
    //             setProducts(data)
    //         } catch (error) {
    //             console.log(error);
                
    //         }
    //     }

    //     fetchProducts()
    // }, [])


  return (
      <main className=' h-[300vh]'>
       <Hero />
    </main>
  )
}

export default Home