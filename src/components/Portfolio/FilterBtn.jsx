import React from 'react'
// import { useState } from 'react'

const FilterBtn = ({ categoryId, handleFilterChange, isActive, children }) => {
  return (
    <button
      onClick={handleFilterChange}
      className={`filter-bar__btn${isActive ? ' filter-bar__btn--active' : ''}`}
      data-id={categoryId}
    >
      {children}
    </button>
  )
}

export default FilterBtn
