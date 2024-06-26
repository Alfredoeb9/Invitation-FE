import React from "react";

export default function ShapeTool() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {" "}
      <div className="h-[90px] bg-[#3c3c3d] cursor-pointer"></div>{" "}
      <div className="h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"></div>
      <div
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
      ></div>
    </div>
  );
}
