import React from 'react'
import Card from './Card.jsx'

function Menu() {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Explore Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card username="Techilla" btnText="See Menu" />
        <Card username="FoodHub" btnText="View More" />
        <Card username="Gourmet Plaza" btnText="Order Now" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card username="Techilla" btnText="See Menu" />
        <Card username="FoodHub" btnText="View More" />
        <Card username="Gourmet Plaza" btnText="Order Now" />
      </div>
    </div>
  );
}

export default Menu;
