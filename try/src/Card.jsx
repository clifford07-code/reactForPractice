import React from 'react'

const Card = ({product}) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition duration-300">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt=''
        className="h-40 w-full object-contain mb-4"
      />

      {/* Title */}
      <h2 className="text-sm font-semibold line-clamp-2">
        {product.title}
      </h2>

      {/* Category */}
      <p className="text-xs text-gray-500 mt-1">
       {product.category}
      </p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-sm"></span>
        <span className="text-sm ml-1">
         {product.rating.rate}
        </span>
        <span className="text-xs text-gray-400 ml-1">
         {product.rating.count}
        </span>
      </div>

      {/* Price */}
      <h3 className="text-lg font-bold text-green-600 mt-2">
      {product.price}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-600 mt-2 line-clamp-3">
        {product.description}
      </p>

      {/* Button */}
      <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
        Add to Cart
      </button>

    </div>
  )
}

export default Card
