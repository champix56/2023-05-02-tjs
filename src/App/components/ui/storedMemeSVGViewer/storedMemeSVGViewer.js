import { MemeSVGViewer } from "orsys-tjs-meme";
import React from "react";
import { useSelector } from "react-redux";

export default function StoredMemeSVGViewer(props) {
  const meme = useSelector((s) => s.meme);
  const img = useSelector((s) =>
    s.ressources.images.find((i) => i.id === s.meme.imageId)
  );
  return <MemeSVGViewer {...props} meme={meme} image={img} />;
}
