import React, { useEffect, useRef, useState } from "react";
// Import the CSS file for animations

export default function Card({
  number,
  type,
}: {
  number: number;
  type: "days" | "hours" | "minutes" | "seconds";
}) {
  const [prevNumber, setPrevNumber] = useState(number);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (number !== prevNumber) {
      cardRef.current?.classList.add("flip");
      const timer = setTimeout(() => {
        cardRef.current?.classList.remove("flip");
      }, 600); // Duration should match the animation duration
      return () => clearTimeout(timer);
    }
    setPrevNumber(number);
  }, [number, prevNumber]);

  return (
    <div className="relative">
      <div
        ref={cardRef}
        className=" bg-[#34364F] text-custom-soft-red text-8xl w-32 h-36 text-center"
      >
        {number < 10 ? `0${number}` : number}
      </div>
      <div className="absolute z-40 card left-0 top-0 w-full h-1/2 bg-black opacity-30"></div>
    </div>
  );
}
