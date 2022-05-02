import React from 'react'
import './FilterPanel.scss'
import { useState } from 'react'

const FilterPanel = () => {

  const [displayFilters, setDisplayFilters] = useState(false)

  const handleFilterDropdown = () => {
    displayFilters === false? setDisplayFilters(true) : setDisplayFilters(false)
  }
  return (
    <div className='filter-panel'>
        <button className='filter-panel-compose'>Compose</button>
        <div className='dropdown'>
            <button onClick = {handleFilterDropdown} className='dropdown__btn'>Filters</button>
            <div className={`dropdown__content ${displayFilters? 'active' :''}`}>
                <h4>Importance</h4>
                <input value='high' type='checkbox' />
                <label htmlFor='importance'>High</label>
                <input value='medium'type='checkbox' />
                <label htmlFor="low">Medium</label>
                <input value='low' type='checkbox' />
                <label htmlFor="low">Low</label>
            </div>
        </div>
    </div>
  )
}

export default FilterPanel