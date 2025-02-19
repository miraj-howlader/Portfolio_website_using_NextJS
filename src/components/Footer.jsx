import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='bg-tertiary dark:bg-secondary/40 py-12 text-white'>
      <div className='container mx-auto '>
        <div className=' flex flex-col items-center justify-between'>
          {/* Social  */}
        <Socials 
        containerStyles=' flex gap-x-6 mx-auto xl:mx-0 mb-4' 
        iconsStyles='text-primary text-[20px] hover:text-gray-500'/>
        {/* Copyright  */}
        <div className=' text-muted-foreground '>
          Copyright &copy; Miraj Howlader. All right reserved.
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
