import React, { useState } from "react";
import { LayoutPanelLeft } from "lucide-react";
import { Shapes } from "lucide-react";
import { CloudUpload } from "lucide-react";
import { Image } from "lucide-react";
import { Grid3X3 } from "lucide-react";
import { Type } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function InvitationBuilder() {
  const [state, setState] = useState("");
  const [show, setShow] = useState({ status: true, name: "" });
  const invitationTools = [
    { id: 0, icon: <LayoutPanelLeft />, text: "Design" },
    { id: 1, icon: <Shapes />, text: "Shapes" },
    { id: 2, icon: <Type />, text: "Text" },
    { id: 3, icon: <Image />, text: "Images" },
    { id: 4, icon: <Grid3X3 />, text: "Background" },
    { id: 5, icon: <CloudUpload />, text: "Upload" },
  ];

  const setElements = (type: string, name: string) => {
    setState(type);
    setShow({
      status: false,
      name,
    });
  };

  return (
    <div className="">
      <div className="flex h-full w-screen">
        <div className="w-[80px] bg-slate-900 z-50 h-full text-gray-400 overflow-y-auto">
          {invitationTools.map((tool) => (
            <div
              key={tool.id}
              className={` ${
                show.name === tool.text.toLowerCase() ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
              onClick={() =>
                setElements(tool.text.toLowerCase(), tool.text.toLowerCase())
              }
            >
              <span className="text-2xl">{tool.icon}</span>
              <span className="text-xs font-medium">{tool.text}</span>
            </div>
          ))}
        </div>

        <div className="h-full w-[calc(100% - 75px)]">
          <div
            className={`${
              show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
            } bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}
          >
            <div
              onClick={() => setShow({ name: "", status: true })}
              className="flex absolute jusitfy-center items-center bg-[#232425] w-[22px] -right-3 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full"
            >
              <ArrowLeft />
            </div>

            {state.length > 0 && (
              <div>
                {show.name.charAt(0).toUpperCase() + show.name.slice(1)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
