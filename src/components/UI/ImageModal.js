import { useEffect } from "react";
const ImageModal = (props) => {
    const { isOpen } = props;
    useEffect(() => {

        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    if (!props.isOpen) {
        return null;
    }


    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center"
            onClick={props.onClose}>
            <div className="bg-white p-4 w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl relative" onClick={stopPropagation}>
                <button onClick={props.onClose}
                    className="text-gray-400 absolute right-1 -top-2 text-2xl font-semibold">x</button>
                <img src={props.image} alt="Modal" className="w-full" />
            </div>
        </div>
    );
};

export default ImageModal;