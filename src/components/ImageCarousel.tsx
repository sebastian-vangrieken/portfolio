import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react";

const images: string[] = [
    "./angular_groupphoto.png",
    "./angular_homescreen.png",
    "./angular_planscreen.png",
    "./angular_activityscreen.png",
    "./angular_imagepicker.png",
]

function ImageCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [imageMargin, setImageMargin] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current) {
            const imgElement = imageRef.current;
            const style = window.getComputedStyle(imgElement);
            const marginLeft = parseFloat(style.marginLeft);
            const marginRight = parseFloat(style.marginRight);
            setImageMargin(marginLeft + marginRight);
        }
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const newPosition = Math.max(scrollPosition - (500 + imageMargin), 0);
            carouselRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
            setScrollPosition(newPosition);
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            const newPosition = Math.min(scrollPosition + (500 + imageMargin), maxScroll);
            carouselRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
            setScrollPosition(newPosition);
        }
    };
    
    return (
        <div className="w-full h-fit relative">
            <button onClick={scrollRight}>
                <FontAwesomeIcon icon={faCircleArrowRight} className="absolute right-5 top-1/2 translate-y-[-50%] text-3xl
                text-navbgl" 
                />
            </button>
            <button onClick={scrollLeft}>
                <FontAwesomeIcon icon={faCircleArrowLeft} className=" absolute left-5 top-1/2 translate-y-[-50%] text-3xl
                text-navbgl"
                />
            </button>
            <div className="flex overflow-x-auto no-scrollbar" ref={carouselRef}>
                {images.map((str, index) => (
                    <img 
                        src={str} alt="" width={500} key={index} ref={index === 0 ? imageRef : null}
                        className="border-4 rounded-xl mx-4
                        border-highlightl dark:border-highlightd" 
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel;