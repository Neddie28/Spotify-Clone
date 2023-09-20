"use client";

import useAuthModal from '@/hooks/useAuthModal';
import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import {TbPlaylist} from "react-icons/tb";
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItems from './MediaItems';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscribeModal from '@/hooks/useSubscribeModal';

interface LibraryProps {
    songs: Song[];
}

const Library:React.FC<LibraryProps> = ({
    songs
}) => {
    const subscribeModal = useSubscribeModal();
    const authModal = useAuthModal();
    const uploadModal = useUploadModal()
    const { user, subscription } = useUser();
    const onPlay = useOnPlay(songs); 

    const onClick = () => {
        if(!user) {
            return authModal.onOpen();
        }

        if(!subscription) {
            return subscribeModal.onOpen();
        }

        return uploadModal.onOpen();

    };
  return (
    <div className="flex flex-col">
       <div className="flex
            items-center
            justify-between
            px-5
            pt-4">
                <div className="inline-flex gap-x-2">
                    <TbPlaylist size={26} className="text-neutral-400" />
                    <p className='text-neutral-400 font-medium text-md'>
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus size={20}
                    onClick={onClick}
                    className="text-neutral-400
                     hover:text-white cursor-pointer transition"/>
       </div>
                <div className="flex flex-col gap-y-2 mt-4 px-3">
                    {songs.map((song) => (
                        <MediaItems
                            onClick={(id: string) => onPlay(id)}
                            key={song.id}
                            data={song}

                        />
                    ))
                    }   
                </div>
    </div>
  )
}

export default Library
