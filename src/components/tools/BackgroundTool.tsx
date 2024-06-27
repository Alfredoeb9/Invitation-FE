import React, { Dispatch, SetStateAction } from "react";
import thumbnail from "../../assets/img/todo-react-thumbnail.png";

interface BackgroundTypes {
  setImage: Dispatch<SetStateAction<string>>;
}
// TODO: FIX THE TYPES FOR ARRAY BELOW
export default function BackgroundTool({ setImage }: BackgroundTypes) {
  return (
    <div className="h-[88vh] overflow-x-auto flex justify-start items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="grid grid-cols-2 gap-2">
        {[
          1, 2, 3, 4, 5, 6, 7, 89, 11, 12, 243, 3454, 6453, 23, 12, 12, 134,
          32523, 5,
        ].map((img: any, i) => (
          <div
            key={i}
            onClick={() => setImage(thumbnail)}
            className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              className="w-full h-full object-fill"
              src={thumbnail}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
