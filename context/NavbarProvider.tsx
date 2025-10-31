'use client';

import React from 'react'
import MenuBar from '@/components/ui/MenuBar';
import Sidebar from '@/components/layout/Sidebar';
import { SideBarProvider } from './SideBarContext';

const NavbarProvider = () => {
  return (
    <>
      <SideBarProvider>
        <MenuBar/>
        <Sidebar/>
      </SideBarProvider>
    </>
  )
}

export default NavbarProvider
