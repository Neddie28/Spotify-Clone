"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import Header from "./Header";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
    children:React.ReactNode;
    songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({
    children,
    songs
}) => {

    const pathname = usePathname();
    const player = usePlayer();

    const routes = useMemo(() => [
        {  
            icon: HiHome,
            label: 'Home',
            active: pathname === '/' || pathname !== '/search',
            href:'/',
        },
        {
            icon:BiSearch,
            label:'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div className={twMerge(`
            flex
            h-full
            text-white
        `,
            player.activeId && "h-[calc(100%-80px)]"
        )}>
            <div className="hidden bg-black md:flex flex-col
                 gap-y-2  h-full w-[300px] p-2">
                <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4">
                            {routes.map((item) => (
                                <SidebarItem
                                   key={item.label}
                                  {...item}
                                  />
                            ))}
                    </div>
                </Box>

                <Box className="overflow-y-auto h-screen ">
                    <Library songs={songs}/>
                </Box> 
            </div>
            <main className="h-full flex-1 overflow-auto py-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;