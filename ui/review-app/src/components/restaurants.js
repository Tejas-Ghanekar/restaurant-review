import React from 'react'

    const Restaurants = ({ restaurants }) => {
      return (
        <div>
        <center><h1>Restaurant List</h1></center>
          {restaurants.map((restaurant) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{restaurant.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{restaurant.address}</h6>
                <p class="card-text">{restaurant.city+", "+restaurant.state+" - "+restaurant.postal_code}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Restaurants
