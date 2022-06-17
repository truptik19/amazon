
import React from 'react'
import './newnav.css'

function Newnav() {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
            <p>All</p>
            <p>Mobiles</p>
            <p>Bestsellers</p>
            <p>Fashions</p>
            <p>Customer Services</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>Today's deals</p>
            <p>Amazon Pay</p>
            </div>
            <div className='right_data'>
                <img src={require("./nav.jpg")} alt='navdata'/>
            </div>
        </div>
      </div>
  )
}

export default Newnav

