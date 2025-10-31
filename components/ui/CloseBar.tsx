'use client';

// import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSidebar } from '@/context/SideBarContext';

const CloseBar = () => {
  const { toggleSidebar } = useSidebar();
  return (
  //  <IoIosCloseCircleOutline className='text-slate-800 w-7 h-7 font-light cursor-pointer' onClick={toggleSidebar} />
   <span className='bg-main-maroon/70 font-bold text-white flex items-center shadow-md justify-center w-7.5 h-7.5 rounded-full p-1' onClick={toggleSidebar}>X</span>
  )
}

export default CloseBar
