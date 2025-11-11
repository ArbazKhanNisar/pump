"use client";
import Image from "next/image";
import { useState } from "react";

export default function FallbackImage({ src, alt, width, height, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc || "/img/ppl.png"}
      alt={alt || "Default image"}
      width={width}
      height={height}
      onError={() => setImgSrc("/img/ppl.png")}
    />
  );
}
