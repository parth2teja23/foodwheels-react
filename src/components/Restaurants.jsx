import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from './Card';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/restaurants.json')
      .then((response) => response.json())
      .then((data) => setRestaurants(data.restaurants))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Explore Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link to={`/menus/${restaurant.name.toLowerCase().replace(/ /g, '-')}`} key={restaurant.id}>
            <Card
              username={restaurant.name}
              btnText="Visit"
              image={restaurant.image}
              showPrice={false} // Hide price for restaurants page
              onButtonClick={() => {}} // Optional, or you can leave this out entirely
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
