import React from 'react'

export default function Category({ finalCategory ,setCatName }) {
  let cat = finalCategory.map((v, i) => {
    // Assuming 'v' is an object with keys 'slug', 'name', and 'url'.
    // Adjust the below line as needed based on your actual object structure.
    return (
      <li key={i} onClick={()=>setCatName(v)} className='text-[20px] bg-[#ccc] p-[7px] font-serif font-semibold cursor-pointer mb-2'>
        {/* You should render a specific property of the object, not the object itself. */}
        {v.name}  {/* Example: if 'v' has a 'name' property, render that */}
      </li>
    )
  });

  return (
    <div className='text-2xl'>
      <h3 className='text-2xl font-[500] p-5'>Product Category</h3>
      <ul>
        {cat}
      </ul>
    </div>
  )
}
