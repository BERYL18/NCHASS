import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative flex justify-center items-center p-2 w-full h-full">
            <button onClick={prevSlide} className="absolute left-0 text-2xl text-teal-500">
                <FaArrowAltCircleLeft/>
            </button>
            <div className="w-64 h-64">
                <img src={images[currentIndex]} alt="Carousel Slide" className="object-contain  w-full  h-full" />
            </div>
            <button onClick={nextSlide} className="absolute right-0 text-2xl text-teal-500">
                <FaArrowAltCircleRight />
            </button>
        </div>
    );
};

export default Carousel;
