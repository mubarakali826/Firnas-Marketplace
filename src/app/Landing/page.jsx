"use client";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/images/carousel-1.png",
    "/assets/images/carousel-2.png",
    "/assets/images/carousel-3.png",
    "/assets/images/carousel-4.png",
  ];

  // Function to handle the automatic slide change
  const handleAutoSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleAutoSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);


  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute flex w-full h-full transition-transform pr-[5rem] px-10 duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div className="flex-1 flex justify-center flex-col p-10 text-[#010F52]">
              {index === 0 ? (
                <p className="text-[3.2rem]">
                  World’s First one-stop{" "}
                  <span className="font-bold">
                    unified Service and execution company{" "}
                  </span>
                  <p className="text-sm">
                    powering your purchase, Sales, and business
                  </p>
                </p>
              ) : index === 1 ? (
                <p className="text-[3.2rem]">
                  We Value You - <br />
                  <span className="text-[#F7A928] font-bold">
                    Not only with profit.
                  </span>{" "}
                  We Building A Better{" "}
                  <span className="font-bold">Relationship.</span>
                </p>
              ) : index === 2 ? (
                <p className="text-[#010F52]">
                  <span className="font-bold text-[3.2rem]">Say hello to </span>
                  <br />
                  <span className="text-[#53B0EE] text-[3.2rem] font-bold">
                    product
                  </span>
                  <br />
                  <span className="text-[1.6rem]">
                    Your all-in-one integrated <br />
                    help center software.
                  </span>
                </p>
              ) : (
                <p className="text-[#010F52]">
                  <p className="text-[3.2rem] font-bold">
                    Towards to digital future
                  </p>
                  <span className="text-[#010F52] text-[1.5rem]">
                    gateway for digital and safe global <br />
                    procurement, supply and business <br />
                    integrations
                  </span>
                </p>
              )}
            </div>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="block w-full flex-1 object-contain "
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-1 rtl:space-x-reverse">
  {images.map((_, index) => (
    <button
      key={index}
      type="button"
      style={{
        width: index === currentIndex ? '3.6rem' : '2rem',
        height: '0.5rem',
        backgroundColor: index === currentIndex ? '#3B82F6' : '#D1D5DB',
        transition: 'width 0.3s ease, background-color 0.3s ease'  // Smooth transition for width and color
      }}
      className="rounded-full"
      aria-current={index === currentIndex ? "true" : "false"}
      aria-label={`Slide ${index + 1}`}
      onClick={() => handleSlide(index)}
    ></button>
  ))}
</div>



   
    </div>
  );
};

export default Carousel;
