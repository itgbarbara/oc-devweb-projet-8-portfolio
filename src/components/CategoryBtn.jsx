import React from 'react'
// import { useState } from 'react'

const CategoryBtn = ({ categoryId, handleFilterChange, children }) => {
  return (
    <button
      onClick={handleFilterChange}
      className="filter-bar__btn"
      data-id={categoryId}
    >
      {children}
    </button>
  )
}

export default CategoryBtn
