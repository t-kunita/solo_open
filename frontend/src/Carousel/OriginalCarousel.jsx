import React, {useState} from "react";
import "./OriginalCarousel.css"; // CSSファイル

const items = [
    {src: "./image/office/jimuhon.jpg", alt: "jimuhon"},
    {src: "./image/office/gihon.jpg", alt: "gihon"},
    {src: "./image/office/TTC-S.jpg", alt: "TTC-S"},
    {src: "./image/office/hanamoto.jpg", alt: "hanamoto"},
    {src: "./image/office/fuji.jpg", alt: "fuji"},
];

const OriginalCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 次の画像へ進む
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // // 前の画像に戻る
    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? items.length - 1 : prevIndex - 1
    //     );
    // };
    // 前の画像に戻る
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex === 0 ? items.length - 3 : prevIndex - 1)
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-button prev" onClick={prevSlide}>
                    &lt;
                </button>
                <div className="carousel-image-wrapper">
                    <img
                        className="carousel-image"
                        src={items[currentIndex].src}
                        alt={items[currentIndex].alt}
                    />
                </div>
                <button className="carousel-button next" onClick={nextSlide}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default OriginalCarousel;
