import React, { useEffect, useRef, useState } from "react";

export default function Card({
  number,
  type,
}: {
  number: number;
  type: "days" | "hours" | "minutes" | "seconds";
}) {
  function changeToTwoDigits(num: number): string {
    return num < 0 ? "00" : num < 10 ? `0${num}` : String(num);
  }
  const [prevNumber, setPrevNumber] = useState<number>(number);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const flipCard = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (number !== prevNumber) {
      console.log("Number has changed!");
      if (flipCard.current) {
        flipCard.current.classList.add("flip");

        setTimeout(() => {
          flipCard.current?.classList.remove("flip");
        }, 500);
      }
      setPrevNumber(number);
    }
  }, [number, prevNumber]);

  return (
    <div className="">
      <div className="relative overflow-hidden custom-shadow mb-5 red-hat-text-700">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#171721] z-10 w-3 h-3 md:w-4 md:h-4 rounded-full -translate-x-2"></div>
        <div
          before-content={changeToTwoDigits(number)}
          after-content={changeToTwoDigits(number)}
          ref={flipCard}
          className="flip-card text-4xl sm:text-5xl md:text-8xl "
        >
          <div className="top" ref={topHalfRef}>
            {changeToTwoDigits(number)}
          </div>
          <div className="bottom" ref={bottomHalfRef}>
            {changeToTwoDigits(number)}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#171721] z-10 w-3 h-3 md:w-4 md:h-4 rounded-full translate-x-2"></div>
      </div>
      <p className="text-custom-grayish-blue text-center text-[12px] md:text-lg uppercase tracking-widest">
        {type}
      </p>
    </div>
  );
}
