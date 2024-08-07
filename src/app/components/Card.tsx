import React, { useEffect, useRef, useState } from "react";

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
        setPrevNumber(number); // Update prevNumber after the flip
      }, 600); // Duration should match the animation duration
      return () => clearTimeout(timer);
    }
  }, [number, prevNumber]);

  return (
    <div className="relative w-32 h-36 bg-[#34364F]">
      <div className=" text-custom-soft-red text-8xl text-center countdown__digits count-down-top">
        {number < 10 ? `0${number}` : number}
      </div>

      <div className="card " ref={cardRef}>
        <div className="card-inner countdown__digits">
          <div className="card-front bg-[#34364F] text-custom-soft-red text-8xl text-center">
            {prevNumber < 10 ? `0${prevNumber}` : prevNumber}
          </div>
          <div className="card-back bg-[#34364F] text-custom-soft-red text-8xl text-center">
            {number - 1 < 10 ? `0${number - 1}` : number - 1}
          </div>
        </div>
      </div>
      <div className=" text-custom-soft-red text-8xl text-center countdown__digits count-down-bottom">
        {number < 10 ? `0${number}` : number}
      </div>
    </div>
  );
}
