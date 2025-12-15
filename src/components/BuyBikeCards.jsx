import React from "react";
import { Link } from "react-router-dom";
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
              <Link to={`/marketplace/buy/${item.id}`} className="block">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain rounded-md mb-4 bg-gray-100 p-3"
                  loading="lazy"
                />

                <h3 className="font-semibold text-xl text-center mb-2">{item.name}</h3>
              </Link>

              <div className="space-y-1 text-gray-700 text-sm">
                <p><span className="font-semibold">KM:</span> {item.km}</p>
                <p><span className="font-semibold">Model:</span> {item.model}</p>
                <p><span className="font-semibold">Ownership:</span> {item.ower}</p>
              </div>

              <p className="text-gray-600 my-3 text-sm">{item.des}</p>

              <p className="text-gray-900 font-bold text-lg mb-4">{item.price}</p>

              <div className="mt-4 flex gap-2">
                <Link
                  to={`/marketplace/buy/${item.id}`}
                  className="flex-1 text-center px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </Link>

                <button
                  className="flex-1 px-4 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-200"
                  onClick={() => {
                    // quick add-to-cart behavior
                    const cur = JSON.parse(localStorage.getItem('cart') || '[]');
                    cur.push(item);
                    localStorage.setItem('cart', JSON.stringify(cur));
                    alert('Added to cart');
                  }}
                >
                  Add to Cart
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
