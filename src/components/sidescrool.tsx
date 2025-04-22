import { useRef, useState } from "react";
import background from "../assets/images/EKn3yBvU8AM_Dd8.jpg";
import "../styles/global.css";
import { Started } from "./started";

export const SideScroll = () => {
    const [modalContent, setModalContent] = useState<number | null>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const right_to_l = () => {
        const container = document.querySelector(".hide-scrollbar") as HTMLElement;
        container.scrollBy({ left: -400, behavior: "smooth" });
    };

    const left_to_r = () => {
        const container = document.querySelector(".hide-scrollbar") as HTMLElement;
        container.scrollBy({ left: 400, behavior: "smooth" });
    };

    const openModal = (item: number) => {
        setModalContent(item);
        modalRef.current?.showModal();
    };

    return (
        <div className="text-white font-bold py-4 sm:py-6 px-4 sm:px-8 md:px-12">
            <span className="text-2xl sm:text-3xl md:text-4xl">Trending Now</span>

            <div className="relative overflow-hidden mt-4">
                <div className="flex items-center w-full h-48 sm:h-56 md:h-60 overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar gap-4 sm:gap-6 cursor-pointer">
                    <button
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full z-10 text-xl sm:text-2xl hover:bg-black/70"
                        onClick={right_to_l}
                    >
                        {"<"}
                    </button>

                    <button
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full z-10 text-xl sm:text-2xl hover:bg-black/70"
                        onClick={left_to_r}
                    >
                        {">"}
                    </button>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                            key={item}
                            className="relative h-40 sm:h-48 md:h-60 w-28 sm:w-36 md:w-40 flex-shrink-0 bg-center bg-cover rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg"
                            style={{ backgroundImage: `url(${background})` }}
                            onClick={() => openModal(item)}
                        >
                            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded-md font-bold">
                                #{item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <dialog id="image_modal" ref={modalRef} className="modal">
                <div className="modal-box bg-black text-white max-w-2xl w-full relative">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white text-2xl">
                            ✕
                        </button>
                    </form>
                    <h2 className="text-2xl font-bold mb-4">Image #{modalContent}</h2>
                    <img
                        src={background}
                        alt={`Trending #${modalContent}`}
                        className="w-full h-80 object-cover rounded-lg"
                    />
                    <p className="mt-4">
                        This is the detailed content for Image #{modalContent}. You can
                        add more content here like a description or related information.
                    </p>
                    <Started />
                </div>
            </dialog>
        </div>
    );
};
