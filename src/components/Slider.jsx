import { useState } from 'react';
import unsplash from '../../public/image/unsplash.png'
import unsplashone from '../../public/image/unsplashone.png'
import unsplashtow from '../../public/image/unsplashtow.png'

// eslint-disable-next-line react/prop-types
const Slider = ({ showNextSlide, showPrevSlide }) => {
    const sliderImages = [
        unsplash,
        unsplashone,
        unsplashtow,
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % sliderImages.length);
    };

    const prevImage = () => {
        setCurrentImage(
            (currentImage - 1 + sliderImages.length) % sliderImages.length
        );
    };

    const isFirstImage = currentImage === 0;
    const isLastImage = currentImage === sliderImages.length - 1;

    return (
        <div className="slider">
            <img
                src={sliderImages[currentImage]}
                alt={`Slider Image ${currentImage + 1}`}
            />
            <div className="slider-controls">
                {!isFirstImage && (
                    <svg
                        style={{
                            zIndex: 999,
                            width: '70px',
                            height: '70px',
                            marginLeft: '50px',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            prevImage();
                         showPrevSlide();
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                        fill="none"
                    >
                        <g filter="url(#filter0_bd_1202_17253)">
                            <circle
                                cx="45"
                                cy="45"
                                r="45"
                                transform="matrix(-1 0 0 1 98 8)"
                                fill="url(#paint0_linear_1202_17253)"
                                shapeRendering="crispEdges"
                            />
                        </g>
                        <path
                            d="M58 38L43 53L58 68"
                            stroke="#6A479F"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <filter
                                id="filter0_bd_1202_17253"
                                x="0"
                                y="0"
                                width="106"
                                height="106"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feGaussianBlur
                                    in="BackgroundImageFix"
                                    stdDeviation="4"
                                />
                                <feComposite
                                    in2="SourceAlpha"
                                    operator="in"
                                    result="effect1_backgroundBlur_1202_17253"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_backgroundBlur_1202_17253"
                                    result="effect2_dropShadow_1202_17253"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect2_dropShadow_1202_17253"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_1202_17253"
                                x1="45"
                                y1="0"
                                x2="45"
                                y2="90"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#D9D9D9" stopOpacity="0.75" />
                                <stop
                                    offset="1"
                                    stopColor="#D9D9D9"
                                    stopOpacity="0.42"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                )}
                {!isLastImage && (
                    <svg
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: '0',
                            zIndex: 999,
                            width: '70px',
                            height: '70px',
                            marginRight: '50px',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            nextImage();
                            showNextSlide();
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="106"
                        height="106"
                        viewBox="0 0 106 106"
                        fill="none"
                    >
                        <g filter="url(#filter0_bd_1202_17242)">
                            <circle
                                cx="53"
                                cy="53"
                                r="45"
                                fill="url(#paint0_linear_1202_17242)"
                                shapeRendering="crispEdges"
                            />
                        </g>
                        <path
                            d="M48 38L63 53L48 68"
                            stroke="#6A479F"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <filter
                                id="filter0_bd_1202_17242"
                                x="0"
                                y="0"
                                width="106"
                                height="106"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feGaussianBlur
                                    in="BackgroundImageFix"
                                    stdDeviation="4"
                                />
                                <feComposite
                                    in2="SourceAlpha"
                                    operator="in"
                                    result="effect1_backgroundBlur_1202_17242"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_backgroundBlur_1202_17242"
                                    result="effect2_dropShadow_1202_17242"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect2_dropShadow_1202_17242"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_1202_17242"
                                x1="53"
                                y1="8"
                                x2="53"
                                y2="98"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#D9D9D9" stopOpacity="0.75" />
                                <stop
                                    offset="1"
                                    stopColor="#D9D9D9"
                                    stopOpacity="0.42"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                )}
            </div>
        </div>
    );
};

export default Slider;
