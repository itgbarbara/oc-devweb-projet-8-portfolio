// Components
import FilterBtn from './FilterBtn'

//

const FilterBar = ({
  categories,
  handleFilterChange,
  handleFilterReset,
  activeFilterId,
}) => {
  return (
    <ul className="filter-bar">
      <li className="filter-bar__option">
        <FilterBtn
          handleFilterChange={handleFilterReset}
          isActive={!activeFilterId}
        >
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
            isActive={activeFilterId === category.id}
          >
            {category.name}
          </FilterBtn>
        </li>
      ))}
    </ul>
  )
}

export default FilterBar
