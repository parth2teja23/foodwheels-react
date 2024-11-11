import { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Calculate total price based on cart items
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
    setDiscountedTotal(sum); // Set initial discounted total to the original total
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Apply coupon for a 20% discount if the code is "CUPUNJAB"
  const applyCoupon = () => {
    if (coupon === 'CUPUNJAB' && !discountApplied) {
      const discount = total * 0.2; // 20% discount
      setDiscountedTotal(total - discount);
      setDiscountApplied(true);
      alert('Coupon applied! 20% discount applied to your total.');
    } else if (discountApplied) {
      alert('Coupon already applied!');
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="w-full max-w-2xl">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 mb-4 bg-white border border-gray-200 rounded shadow-md">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="p-2 border border-gray-300 rounded-md mr-2"
            />
            <button
              onClick={applyCoupon}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Apply Coupon
            </button>
          </div>

          <div className="mt-6 text-lg font-semibold">
            <p>Total Price: ${total.toFixed(2)}</p>
            {discountApplied && (
              <p className="text-green-600">Discounted Price: ${discountedTotal.toFixed(2)}</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
