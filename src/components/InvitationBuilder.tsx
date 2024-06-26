import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LayoutPanelLeft } from "lucide-react";
import { Shapes } from "lucide-react";
import { CloudUpload } from "lucide-react";
import { Image } from "lucide-react";
import { Grid3X3 } from "lucide-react";
import { Type } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import MyImages from "./tools/MyImages";
import BackgroundTool from "./tools/BackgroundTool";
import TextTool from "./tools/TextTool";
import ShapeTool from "./tools/ShapeTool";
import UploadTool from "./tools/UploadTool";
import CreateComponent from "./CreateComponent";

interface InfoTypes {
  name: string;
  type: string;
  id: number;
  height: number;
  width: number;
  z_index: number;
  color: string;
  image: string;
  setCurrentComponent: Dispatch<SetStateAction<string>>;
}

export interface ComponentsTypes {
  info: InfoTypes[];
}

export default function InvitationBuilder() {
  const [state, setState] = useState<HTMLElement | any | undefined>(undefined);
  const [currentComponent, setCurrentComponent] = useState<any>(undefined);
  const [color, setColor] = useState<string>("");
  const [components, setComponents] = useState<InfoTypes[]>([
    {
      name: "main_frame",
      type: "rect",
      id: Math.floor(Math.random() * 100 + 1),
      height: state?.height || 450,
      width: state?.width || 650,
      z_index: 1,
      color: "#fff",
      image: "",
      setCurrentComponent: (a: React.SetStateAction<string>) =>
        setCurrentComponent(a),
    },
  ]);
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

  const moveElement = () => {
    console.log("move");
  };

  const resizeElement = () => {
    console.log("resize");
  };

  const rotateElement = () => {
    console.log("rotateElement");
  };

  const removeComponent = () => {
    const com = components.find((c) => c.id === currentComponent.id);
    const temp = components.filter((c) => c.id !== currentComponent.id);

    // com.image = "";
    // setImage("");
    // setComponents([...temp, com]);
  };

  useEffect(() => {
    if (currentComponent) {
      const index = components.findIndex((c) => c.id === currentComponent.id);
      components[index].color = color || currentComponent.color;
    }
  }, [color]);

  return (
    <div>
      <div className="flex h-full w-screen">
        <div className="w-[80px] bg-slate-900 z-50 h-full text-gray-400 overflow-y-auto">
          {invitationTools.map((tool) => (
            <div
              key={tool.id}
              className={` ${
                show.name === tool.text.toLowerCase() ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
              onClick={() => {
                // console.log("running");

                setElements(tool.text.toLowerCase(), tool.text.toLowerCase());

                // if (!show.status) {
                //   setShow({ name: "", status: true });
                // }
              }}
            >
              <span className="text-2xl">{tool.icon}</span>
              <span className="text-xs font-medium">{tool.text}</span>
            </div>
          ))}
        </div>

        <div className="h-full w-[calc(100%-75px)]">
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

            {state?.length > 0 && (
              <>
                <h3>
                  {show.name.charAt(0).toUpperCase() + show.name.slice(1)}
                </h3>

                {show.name.toLowerCase() === "shapes" && <ShapeTool />}

                {show.name.toLowerCase() === "images" && <MyImages />}

                {show.name.toLowerCase() === "text" && <TextTool />}

                {show.name.toLowerCase() === "background" && <BackgroundTool />}

                {show.name.toLowerCase() === "upload" && <UploadTool />}
              </>
            )}
          </div>

          <div className="w-full h-full">
            <div
              className={`flex justify-center relative items-center h-full ${
                !currentComponent
                  ? "w-full"
                  : "w-[calc(100%-250px)] overflow-hidden"
              }`}
            >
              <div className="m-w-[650px] m-h-[480px] flex justify-center items-center overflow-hidden">
                <div
                  id="main_design"
                  className="w-auto relative h-auto overflow-hidden"
                >
                  {components.map((comp, i) => (
                    <CreateComponent
                      key={i}
                      info={comp}
                      currentComponent={currentComponent}
                      removeComponent={removeComponent}
                    />
                  ))}
                </div>
              </div>
            </div>

            {currentComponent && (
              <div className="h-[calc(100%-46px)] w-[250px] text-gray-300 bg-[#252627] px-3 py-2 absolute right-0 top-[46px]">
                <div className="flex gap-4 flex-col items-start h-full px-3 justify-start">
                  <div className="flex gap-4 justify-start items-start">
                    <span>Color: </span>
                    <label
                      className="w-[30px] h-[30px] cursor-pointer rounded-md"
                      htmlFor="color"
                      style={{
                        background: `${
                          currentComponent?.color &&
                          currentComponent.color !== "#fff"
                            ? currentComponent.color
                            : "gray"
                        }`,
                      }}
                    ></label>
                    <input
                      onChange={(e) => setColor(e.currentTarget.value)}
                      type="color"
                      className="invisible"
                      id="color"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
