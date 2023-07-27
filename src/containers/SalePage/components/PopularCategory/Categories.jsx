import React from 'react'
import "./Categories.css"

const PopCategories = () => {
  return (
    <div className='categories-container'>
          <span><h1>Popular Categories</h1></span>
          <div className="categoriesHandler">
              <div className="categoriesLeft-section">
                  <section></section>
                  <section></section>
              </div>
              <div className="categoriesRight-section">
                  <section></section>
                  <section></section>
              </div>
          </div>
    </div>
  )
}

export default PopCategories;