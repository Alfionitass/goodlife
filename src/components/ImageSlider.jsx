import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ImageSlider({ imageList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imageList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // swipe mobile
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      nextSlide(); // swipe left
    }

    if (distance < -minSwipeDistance) {
      prevSlide(); // swipe right
    }
  };

  return (
    <div className="max-w-[1400px] w-full m-auto">
      <div
        onClick={() => setIsZoomOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="aspect-square sm:aspect-[4/3] sm:px-16 lg:px-20 relative group touch-pan-y"
      >
        <div
          style={{ backgroundImage: `url(${imageList[currentIndex]})` }}
          className={`w-full h-full bg-center bg-cover duration-500`}
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 lg:text-2xl rounded-full p-1 lg:p-2 bg-black/30 text-white cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="hidden sm:group-hover:block absolute hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 lg:text-2xl rounded-full p-1 lg:p-2 bg-black/30 text-white cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      {/* dot dot slide image */}
      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(slideIndex);
            }}
            className="mx-1 text-xs text-gray cursor-pointer"
          >
            <FontAwesomeIcon icon={faCircle} />
          </div>
        ))}
      </div> */}

      {/* Thumbnail Image */}
      <div className="mt-4 flex justify-center gap-3">
        {imageList.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onMouseEnter={() => setCurrentIndex(slideIndex)}
            onClick={() => goToSlide(slideIndex)}
            className={`w-16 h-16 lg:w-24 lg:h-24 cursor-pointer overflow-hidden border-2 transition
              ${
                currentIndex === slideIndex
                  ? "border-black opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }
            `}
          >
            <div
              style={{ backgroundImage: `url(${slide})` }}
              className="w-full h-full bg-cover bg-center"
            />
          </div>
        ))}
      </div>
      {/* Zoom Image */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-4 max-w-3xl w-[90%]"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomOpen(false);
              }}
              className="absolute -top-0 -right-0 bg-black text-white w-8 h-8 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div
              className="w-full aspect-[4/3] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imageList[currentIndex]})` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
