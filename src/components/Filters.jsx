import React from 'react'
import CategoryBtn from './CategoryBtn'

const Filters = ({ categories, handleFilterChange, handleFilterReset }) => {
  return (
    <ul className="filter-bar">
      <li className="filter-bar__option">
        <CategoryBtn handleFilterChange={handleFilterReset}>
          Tous les projets
        </CategoryBtn>
      </li>
      {categories.map((category) => (
        <li
          key={`${category.id}-${category.name}`}
          className="filter-bar__option"
        >
          <CategoryBtn
            categoryId={category.id}
            handleFilterChange={handleFilterChange}
          >
            {category.name}
          </CategoryBtn>
        </li>
      ))}
    </ul>
  )
}

export default Filters
