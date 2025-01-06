import React, { useRef } from "react";
import { CopyClipboard } from "./CopyClipboard";

export const GridItem = ({ animation_name }) => {
  const spanAnimate = useRef(null);
  const animationName = `animate-${animation_name}`;

  const handleMouseEnter = () => {
    spanAnimate.current.classList.add(animationName);
  };

  const handleMouseLeave = () => {
    spanAnimate.current.classList.remove(animationName);
  };

  return (
    <li
      className="p-2 overflow-hidden rounded-md flex flex-col items-center gap-1 cursor-crosshair outline outline-[rgba(255,255,255,0.05)] hover:outline-1 *:flex-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CopyClipboard textToShow={animation_name} textToCopy={animationName} />
      <span
        ref={spanAnimate}
        className="block min-h-32 min-w-32 size-32 rounded-lg aspect-square bg-white bg-tailwind bg-center bg-contain bg-no-repeat"
      ></span>
    </li>
  );
};
