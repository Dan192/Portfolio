import React from "react";

// Random utility
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const BackgroundMarquee = () => {
  const numRows = 8;
  const numCols = 12;

  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const cols = [];

    for (let j = 0; j < numCols; j++) {
      const weight = random(1, 5);
      const fontWeight = [
        "font-normal",
        "font-medium",
        "font-bold",
        "font-extrabold",
        "font-black",
      ][weight - 1];

      cols.push(
        <span
          key={`dan-${i}-${j}`}
          className={`mx-8 text-[9rem] uppercase text-black/10 whitespace-nowrap ${fontWeight}`}
        >
          DAN
        </span>
      );
    }

    const direction = i % 2 === 0 ? "animate-slide-left" : "animate-slide-right";

    rows.push(
      <div
        key={`row-${i}`}
        className={`flex gap-8 ${direction}`}
        style={{ transform: `translateY(${i * 120}px)` }}
      >
        {cols}
      </div>
    );
  }

  return (
    <div className="absolute -top-[10vh] -left-[20vw] w-[160vw] h-[280vh] -z-10 rotate-[45deg] pointer-events-none opacity-100  flex flex-col gap-0">
      {rows}
    </div>
  );
};

export default BackgroundMarquee;
