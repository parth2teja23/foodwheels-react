import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

function RestaurantMenu() {
  const { name } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch('/restaurants.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRestaurant = data.restaurants.find(
          (rest) => rest.name.toLowerCase().replace(/ /g, '-') === name
        );
        setRestaurant(selectedRestaurant);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [name]);

  // Function to add an item to the cart using localStorage
  const addToCart = (dish) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(dish);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${dish.name} added to cart`);
  };

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        {restaurant.name} - {restaurant.cuisine}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurant.menu.map((dish) => (
          <Card
            key={dish.id}
            username={dish.name}
            btnText="Add to Cart"
            image={dish.image}
            price={dish.price}
            showPrice={true}
            onButtonClick={() => addToCart(dish)} // Pass addToCart function as onButtonClick
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
