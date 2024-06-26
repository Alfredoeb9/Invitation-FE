import React from "react";

export default function BackgroundTool() {
  return (
    <div className="h-[88vh] overflow-x-auto flex justify-start items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="grid grid-cols-2 gap-2">
        {[
          1, 2, 3, 4, 5, 6, 7, 89, 11, 12, 243, 3454, 6453, 23, 12, 12, 134,
          32523, 5,
        ].map((img, i) => (
          <div
            key={i}
            className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
          >
            <img className="w-full h-full object-fill" alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
