'use client';

import { TbMenu } from "react-icons/tb";
import { useSidebar } from '@/context/SideBarContext';

const MenuBar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className='border-2 lg:hidden cursor-pointer rounded-lg shadow-sm border-main-maroon/50 w-8 h-8 flex items-center justify-center px-1'>
        <TbMenu className='w-6 h-6  text-main-maroon' onClick={toggleSidebar} />
    </div>

  )
}

export default MenuBar
