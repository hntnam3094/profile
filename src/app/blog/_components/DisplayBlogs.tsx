'use client';

import {
  dateTimeFormat,
  handlerImageUrl,
  handlerWebUrl,
} from "@/components/shared/modules/helper/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = useState({
    x: 0, y: 0
  })

  useEffect(() => {
    const updateMousePostition = (ev: any) => {
      setMousePosition({
        x: ev.clientX, y: ev.clientY
      })
    }

    window.addEventListener('mouseover', updateMousePostition)

    return () => {
      window.removeEventListener('mouseover', updateMousePostition)
    }
  })

  return mousePosition
}

export default function DisplayBlogs({ listData }: { listData: BlogItemType[] }) {
  const mousePosition = useMousePosition();
  return (
    <div className="group-hoverrize">
      {listData.length > 0 && listData.map((item: BlogItemType, index: number) => (
        <div key={index} className="hoverrize group">
          <Link
            href={handlerWebUrl(`/blog/${item?.slug}`)}
            className="hoverrize-item text-[14px] text-gray-600"
          >
            <div className="flex gap-x-[20px]">
              <p>{dateTimeFormat(item?.created_at)}</p>
              <p>{item?.name}</p>
            </div>
          </Link>
          <div className="hidden fixed group-hover:block" style={{top: (mousePosition.y - 100) + 'px', left: (mousePosition.x - 100) + 'px'}}>
            <Image
              src={handlerImageUrl(item?.banner)}
              width={100}
              height={100}
              alt={item?.name}
              className="border-1px bg-gray-100 w-[100px] h-[100px] rounded-[10px] object-cover"
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  );
}
