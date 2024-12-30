import React from 'react'

const Nav = () => {
  return (
    <div class="nav flex flex-col items-center h-full w-[25%] bg-zinc-800 text-white">
    <div class="butt">
      <h3 class="mt-6 border-2 text-center mb-8 px-14 py-3 text-xl">
        Add New Product
      </h3>
      <div class="border-b-2"></div>
    </div>

    <div class="text mt-6 flex flex-col gap-4">
      <div class="headinn text-3xl">
        <h2>Category Filter</h2>
      </div>

      
      <div class="category mt-3 flex items-center gap-2 cursor-pointer hover:bg-zinc-700 p-2 rounded">
        <span class="p-2 bg-gray-300 rounded-xl"></span>
        <div class="text-xl">Category 1</div>
      </div>
      <div class="category mt-3 flex items-center gap-2 cursor-pointer hover:bg-zinc-700 p-2 rounded">
        <span class="p-2 bg-gray-300 rounded-xl"></span>
        <div class="text-xl">Category 2</div>
      </div>
      <div class="category mt-3 flex items-center gap-2 cursor-pointer hover:bg-zinc-700 p-2 rounded">
        <span class="p-2 bg-gray-300 rounded-xl"></span>
        <div class="text-xl">Category 3</div>
      </div>
    </div>
  </div>
  )
}

export default Nav