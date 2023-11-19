import { useState } from "react";
// import {
//     BsFillArrowRightCircleFill,
//     BsFillArrowLeftCircleFill,
// } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


export default function Slider({ slides }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative rounded-md">
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s) => {
                    return <img src={s} />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <FaChevronLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-2 h-2 cursor-pointer  ${i == current ? "bg-white" : "bg-slate-500"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}