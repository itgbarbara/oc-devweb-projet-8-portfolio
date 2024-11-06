import React from 'react'
import FilterBtn from './FilterBtn'

const FilterBar = ({ categories, handleFilterChange, handleFilterReset }) => {
  return (
    <ul className="filter-bar">
      <li className="filter-bar__option">
        <FilterBtn handleFilterChange={handleFilterReset}>
          Tous les projets
        </FilterBtn>
      </li>
      {categories.map((category) => (
        <li
          key={`${category.id}-${category.name}`}
          className="filter-bar__option"
        >
          <FilterBtn
            categoryId={category.id}
            handleFilterChange={handleFilterChange}
          >
            {category.name}
          </FilterBtn>
        </li>
      ))}
    </ul>
  )
}

export default FilterBar
