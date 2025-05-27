import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
      <p className='flex text-2xl font-bold text-white gap-2 items-center '><span>Store </span>{<ShoppingCart/>}</p>
      <p className="text-sm">&copy; {new Date().getFullYear()} . All rights reserved.</p>
      <div className="flex space-x-4 mt-2 sm:mt-0">
        <a href="#" className="hover:text-gray-400 text-sm">Products</a>
        <a href="#" className="hover:text-gray-400 text-sm">Users</a>
        <a href="#" className="hover:text-gray-400 text-sm">Contact</a>
      </div>
    </div>
  </footer>
  )
}

export default React.memo(Footer)