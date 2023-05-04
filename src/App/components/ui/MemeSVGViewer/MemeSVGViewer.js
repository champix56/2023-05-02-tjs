import { MemeSVGViewer } from "orsys-tjs-meme";
import React from "react";
import { useSelector } from "react-redux";

export default function StoreMemeSVGViewer() {
  const meme = useSelector((s) => s.meme);
  const image = useSelector((s) => {
    return s.lists.images.find((i) => {
      return i.id === meme.imageId;
    });
  });
  return <MemeSVGViewer meme={meme} image={image} basePath="" />;
}
