import React from "react";
import items from "./Bbikedata";

function BuyBikeCards() {
  return (
    <main className="pt-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col h-full hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain rounded-md mb-4 bg-gray-100 p-3"
                loading="lazy"
              />

              <h3 className="font-semibold text-xl text-center mb-2">{item.name}</h3>

              <div className="space-y-1 text-gray-700 text-sm">
                <p><span className="font-semibold">KM:</span> {item.km}</p>
                <p><span className="font-semibold">Model:</span> {item.model}</p>
                <p><span className="font-semibold">Ownership:</span> {item.ower}</p>
              </div>

              <p className="text-gray-600 my-3 text-sm">{item.des}</p>

              <p className="text-gray-900 font-bold text-lg mb-4">{item.price}</p>

              <div className="mt-4">
  <button
    className="w-full px-4 py-2 rounded-xl
               bg-orange-500 text-white font-semibold
               hover:bg-orange-600 transition-colors duration-200"
  >
    Buy Now
  </button>
</div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

export default BuyBikeCards;
