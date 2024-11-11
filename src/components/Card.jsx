function Card({ username, btnText = "Visit Me!", image, price, showPrice = true, onButtonClick }) {
  return (
    <div className="relative h-[300px] w-full max-w-xs rounded-md overflow-hidden shadow-lg m-4">
      <img
        src={image}
        alt={username}
        className="z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        {showPrice && <p className="text-sm text-gray-300">${price}</p>}
        <button 
          onClick={onButtonClick} // Call onButtonClick passed from parent component
          className="mt-2 inline-flex items-center text-sm font-semibold text-white bg-transparent px-2 py-1 rounded"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
