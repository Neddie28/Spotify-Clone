"use client"

import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer'
import React from 'react'
import PlayerContent from './PlayerContent';

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if(!song || !songUrl || !player.activeId) {
        return null;
   }

  return (
    <div 
    className='
        text-white
        fixed
        bottom-0
        bg-black
        py-2 first-letter:b-[80px]
        px-4
        w-full
        '>
      <PlayerContent
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  )
}

export default Player
