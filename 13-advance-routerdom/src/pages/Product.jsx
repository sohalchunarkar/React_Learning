import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (

    <div className="py-10">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white">Product Catalog</h2>
        <p className="text-slate-400 mt-2">Browse our high-quality selections by category.</p>
      </div>

      <div className="flex justify-center gap-4 mb-12 text-amber-50">
        <Link to='/Products/Electronics'>Category 1 </Link>
        <Link to='/Products/Hardware'>Category 2 </Link>
        <Link to='/Products/Software'>Category 3</Link>
      </div>
      <Outlet />


    </div>
  )
}

export default Product