import Image from "next/image";

interface imageHandlerType {
  url: string;
  width: number;
  height: number;
  alt: string;
}
export function ImageHanlder({ url, width, height, alt }: imageHandlerType) {
  const imageUrl = process.env.API_URL + url;
  return (
    <Image src={imageUrl} width={width} height={height} alt={alt} unoptimized />
  );
}
