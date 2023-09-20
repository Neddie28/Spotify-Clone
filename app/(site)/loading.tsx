"use client";

import Box from '@/components/Box';
import { BounceLoader } from 'react-spinners';

const loading = () => {
  return (
    <Box className='flex h-screen items-center justify-center'>
        <BounceLoader color='#22c55e' size={40}/>
    </Box>
  )
}

export default loading;
