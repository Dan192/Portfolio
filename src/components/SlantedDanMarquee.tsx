import React from "react";

const SlantedDanMarquee = () => (
  <div className="absolute inset-0 flex flex-col gap-24 overflow-hidden opacity-20 pointer-events-none -z-10">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="flex whitespace-nowrap animate-slide-left gap-8"
        style={{
          transform: `rotate(-15deg) translateY(${i * 200}px)`,
        }}
      >
        {[...Array(20)].map((_, j) => (
          <span
            key={j}
            className="text-8xl font-bold text-black/10 mx-8"
          >
            DAN
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default SlantedDanMarquee;
