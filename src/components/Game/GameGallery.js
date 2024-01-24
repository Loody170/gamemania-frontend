import { useRef, useState } from "react";
import ImageModal from "../UI/ImageModal";
import GameVideo from "./GameVideo";
import GameScreenshot from "./GameScreenshot";
const GameGallery = (props) => {
    const scrollContainerRef = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState();

    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollLeft - scrollOffset,
            right: scrollContainerRef.current.scrollRight + scrollOffset,
            behavior: 'smooth'
        });
    };

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => scroll(600)} className="gallery-scroll-arrow">
                {"<"}
            </button>
            <button onClick={() => scroll(-600)} className="gallery-scroll-arrow">
                {">"}
            </button>

            <div ref={scrollContainerRef}
                className="flex overflow-x-auto hide-scrollbar whitespace-nowrap bg-gray-950 py-4 px-2">
                {props.videos && props.videos.map((id, index) => (
                    <GameVideo key={index} videoId={id} />
                ))}
                {props.screenshots && props.screenshots.map((url, index) => (
                    <GameScreenshot key={index} url={url} openModal={openModal} />
                ))}
            </div>
            <ImageModal isOpen={isModalOpen} image={modalImage} onClose={closeModal} />
        </div>
    );
};

export default GameGallery;