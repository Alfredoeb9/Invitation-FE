import React from "react";

interface ShapeToolTypes {
  createShape: (name: string, type: string) => void;
}

export default function ShapeTool({ createShape }: ShapeToolTypes) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {" "}
      <div
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
        onClick={() => createShape("shape", "rect")}
      ></div>{" "}
      <div
        className="h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full"
        onClick={() => createShape("shape", "circle")}
      ></div>
      <div
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
        className="h-[90px] bg-[#3c3c3d] cursor-pointer"
        onClick={() => createShape("shape", "rectriangle")}
      ></div>
    </div>
  );
}
