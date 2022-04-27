import React from 'react'
import './FilterPanel.scss'

const FilterPanel = () => {
  return (
    <div className='filter-panel'>
        <button>Compose</button>
        <div className='dropdown'>
            <button className='dropdown-btn'>Filters</button>
            <div className='dropdown-content'>
                <input type='checkbox' />
                <input type='checkbox' />
                <input type='checkbox' />
            </div>
        </div>
    </div>
  )
}

export default FilterPanel