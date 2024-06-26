import React from "react";

export default function MyImages() {
  return (
    <div>
      <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-md text-white mb-3">
        <label htmlFor="image" className="text-center cursor-pointer">
          Upload Image
        </label>

        <input type="file" id="image" className="hidden" />
      </div>

      <div className="h-[80vh] overflow-x-auto flex justify-start items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
    </div>
  );
}
