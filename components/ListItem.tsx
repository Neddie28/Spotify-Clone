"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from "next/image";
import { FaPlay } from "react-icons/fa"

interface ListItemProps {
    image: string
    name: string;
    href: string;
    title:string;
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href,
    title,
}) => {

  const router = useRouter();

  const onClick = () => {
    //add authentication before push
    router.push(href);
  }
  return (
   <button
         onClick={onClick}
         className="relative group flex overflow-hidden gap-x-4 bg-neutral-100/20 transition items-center pr-4 rounded-sm">
        <div className="relative min-h-[64px] min-w-[64px]">
            <Image className='object-cover' fill
             title={title} src={image} alt="image"/>
        </div>
        <p className='font-medium truncate py-5'>
            {name}
        </p>
        <div className="absolute transition opacity-0
            rounded-full flex items-center justify-center bg-green-500
            p-4
            drop-shadow-md
            right-5
            group-hover:opacity-100 hover:scale-110">

            <FaPlay className="text-black"/>

        </div>
   </button>
  )
}

export default ListItem
