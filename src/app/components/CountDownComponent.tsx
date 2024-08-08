"use client";
import Image from "next/image";
import Countdown from "react-countdown";
import Card from "./Card";
import { Red_Hat_Text } from "next/font/google";
const redHat = Red_Hat_Text({ subsets: ["latin"], weight: "700" });
export default function CountDownComponent() {
  // Completionist component for when the countdown is completed , we dont have a dwsign so i put a simple text
  const Completionist = () => (
    <span className="text-custom-soft-red text-center text-lg">
      You are good to go!
    </span>
  );

  // Renderer callback with condition
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
    days,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
    days: number;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      return (
        <div
          className={`grid grid-cols-4 gap-4 md:gap-7 z-40 w-full ${redHat}`}
        >
          <Card number={days} type="days" />
          <Card number={hours} type="hours" />
          <Card number={minutes} type="minutes" />
          <Card number={seconds} type="seconds" />
        </div>
      );
    }
  };

  return (
    <div className="relative flex w-full flex-col  mx-auto max-w-xl md:max-w-3xl">
      <h1 className="text-custom-white uppercase text-xl md:text-2xl tracking-[0.3rem] text-center mb-24">
        We&apos;re launching soon
      </h1>
      <Countdown
        date={
          // adding 8 days, 23 hours, 55 minutes, 41 seconds to the current time like the challenge
          Date.now() +
          (8 * 24 * 60 * 60 * 1000 +
            23 * 60 * 60 * 1000 +
            55 * 60 * 1000 +
            41 * 1000)
        }
        renderer={renderer}
      />
      ,
    </div>
  );
}
