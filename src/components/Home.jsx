import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Nav />
    <div class="w-[75%] flex flex-wrap justify-center items-center overflow-y-auto  bg-white p-4">
    <Link to="/details/1" class="card  rounded-lg overflow-hidden w-[30%] m-4">
      <div class="backgroundd1 h-60 bg-contain "></div>
      <div class="p-4">
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          necessitatibus!
        </p>
      </div>
    </Link>
  
   
  </div>
    </>
    
  )
}

export default Home