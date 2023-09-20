import Link from 'next/link';
import React from 'react'
import {IconType} from "react-icons";
import {twMerge} from "tailwind-merge"

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active: boolean;
    href:string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
  return (
    <Link
        href={href}
        className={twMerge(`
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-neutral-400
            hover:text-white
            font-medium
            cursor-pointer
            transition
            py-1
        `, active && "text-white")}>
            <Icon size={26}/>
            <p className='truncate w-full'>{label}</p>
    </Link>
  )
}

export default SidebarItem
