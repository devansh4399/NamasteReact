const ItemCards = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          {/* Left side: item info */}
          <div className="w-9/12">
            <div className="font-semibold">{item.card.info.name}</div>
            <div>
              ₹-
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <div className="text-gray-500 text-sm">
              {item.card.info.description}
            </div>
          </div>

          {/* Right side: image + add button */}
          <div className="w-3/12 p-4 relative">
            <img
              src={
               "API LInk"
              }
              alt={item.card.info.name}
              className="rounded-lg"
            />
            <button className="p-2 bg-white shadow-lg absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg text-green-600 font-semibold hover:bg-gray-100">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ItemCards;
