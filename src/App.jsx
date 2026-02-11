import { useState, useEffect } from "react";
import img1 from "./assets/1.jfif";
import img2 from "./assets/2.jfif";
import img3 from "./assets/3.jfif";
import img4 from "./assets/4.jfif";
import img5 from "./assets/5.jfif";

export default function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];

  // Auto slide effect
  useEffect(() => {
    if (!showCarousel) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, [showCarousel, images.length]);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black via-rose-950 to-black text-white">

      {/* Floating Hearts (keep your CSS hearts) */}
      <div className="heart">♥</div>
      <div className="heart">♥</div>
      <div className="heart">♥</div>
      <div className="heart">♥</div>
      <div className="heart">♥</div>
      <div className="heart">♥</div>

      {/* Card */}
      <div className="z-10 backdrop-blur-lg bg-white/10 border border-rose-400/30 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">

        <h1 className="text-4xl font-serif tracking-wide text-rose-400 mb-4">
          Joveina
        </h1>

        <p className="text-gray-300 mb-6 italic">
          Every memory with you is my favorite.
        </p>

        {!showCarousel && (
          <button
            onClick={() => setShowCarousel(true)}
            className="bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-full transition duration-300 shadow-lg"
          >
            Open Our Memories ❤️
          </button>
        )}

        {/* Carousel */}
        {showCarousel && (
          <div className="mt-6 relative w-full h-64 overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`slide-${index}`}
                  className="w-full h-64 object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
