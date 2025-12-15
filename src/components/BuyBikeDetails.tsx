import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import items from "./Bbikedata";

function BuyBikeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bike = items.find((i) => String(i.id) === String(id));
  const [index, setIndex] = useState(0);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Bike not found</h2>
          <Link to="/marketplace/buy" className="text-blue-600 underline mt-4 block">Back to listings</Link>
        </div>
      </div>
    );
  }

  const images =
    bike.images && bike.images.length > 0
      ? bike.images  //if
      : [bike.image, bike.image2, bike.image3, bike.image4].filter(Boolean);  //else

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function addToCart() {
    const cur = JSON.parse(localStorage.getItem("cart") || "[]");
    cur.push(bike);
    localStorage.setItem("cart", JSON.stringify(cur));
    navigate("/cart", { replace: false });
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-5xl w-full mx-auto overflow-hidden shadow-xl">
        <div className="flex items-start gap-6 p-6">
          <div className="w-1/2">
            <div className="relative">
              <img src={images[index]} alt={bike.name} className="w-full h-96 object-contain bg-gray-100 p-4 rounded" />
              {images.length > 1 && (
                <>
                  <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow">
                    ‹
                  </button>
                  <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow">
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto">
              {images.map((src, i) => (
                <button key={i} onClick={() => setIndex(i)} className={`w-20 h-20 rounded border ${i === index ? 'ring-2 ring-blue-500' : ''} bg-white p-2`}> 
                  <img src={src} alt={`thumb-${i}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{bike.name}</h2>
              <button onClick={() => navigate(-1)} className="text-gray-500">Close</button>
            </div>

            <p className="text-gray-700 mt-2">{bike.des}</p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div><span className="font-semibold">KM:</span> {bike.km}</div>
              <div><span className="font-semibold">Model:</span> {bike.model}</div>
              <div><span className="font-semibold">Ownership:</span> {bike.ower}</div>
              <div><span className="font-semibold">Location:</span> {bike.location || 'Not specified'}</div>
              <div><span className="font-semibold">Company:</span> {bike.company || 'Not specified'}</div>
              <div><span className="font-semibold">Price:</span> {bike.price}</div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link to="" className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 border">Chat with Seller</Link>
              <button onClick={addToCart} className="px-4 py-2 rounded-xl bg-orange-500 text-white">Add to Cart</button>
              <button onClick={() => alert('Proceeding to payment placeholder')} className="px-4 py-2 rounded-xl bg-blue-600 text-white">Buy Now</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyBikeDetails;
