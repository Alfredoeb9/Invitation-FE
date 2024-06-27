import React, { ReactNode } from "react";
import { ComponentsTypes } from "./InvitationBuilder";

interface CreateComponentTypes {
  info: ComponentsTypes | any;
  currentComponent: any;
  removeComponent: any;
}

export default function CreateComponent({
  info,
  currentComponent,
  removeComponent,
}: CreateComponentTypes) {
  const randValue = String(Math.floor(Math.random() * 100));
  let html: ReactNode = <div></div>;

  if (info.name === "main_frame") {
    html = (
      <div
        onClick={() => info.setCurrentComponent(info)}
        className="hover:border-[2px] hover:border-indigo-500 shadow-md"
        style={{
          width: info.width + "px",
          height: info.height + "px",
          background: info.color,
          zIndex: info.z_index,
        }}
      >
        {info.image && (
          <img className="w-full h-full" src={info.image} alt="image" />
        )}
      </div>
    );
  }

  if (info.name === "shape" && info.type === "rect") {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: info.width + "px",
          height: info.height + "px",
          background: info.color,
          opacity: info.opacity,
          left: info.left + "px",
          top: info.top + "px",
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : "rotate(0deg)",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      ></div>
    );
  }

  return html;
}
