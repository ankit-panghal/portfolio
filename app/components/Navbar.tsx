'use client';
import {Menubar,MenubarContent,MenubarItem,MenubarTrigger} from '@/components/ui/menubar'
import {Sun,Moon,Home,ActivitySquare,FolderKanban,BookText,Braces} from 'lucide-react'
import { useTheme } from "next-themes"


import Link from 'next/link'
import { MenubarMenu } from '@radix-ui/react-menubar';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const {theme,setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

  return (
    <header className='flex justify-center p-4 sticky top-0'>
    <Menubar className=' rounded-full p-6'>
        <MenubarMenu>
            <MenubarTrigger><Link href='#hero'><Home/></Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><ActivitySquare/></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Braces/></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><FolderKanban/></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><BookText/></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
        <MenubarTrigger>{mounted ? (theme === 'light' ? <Moon/> : <Sun/>) : null}</MenubarTrigger>
        <MenubarContent>
        <MenubarItem onClick={() => setTheme('light')}>Light</MenubarItem>
        <MenubarItem onClick={() => setTheme('dark')}>Dark</MenubarItem>
        <MenubarItem onClick={() => setTheme('system')}>System</MenubarItem>
        </MenubarContent>
    </MenubarMenu>
    </Menubar>
    </header>
  )
}

export default Navbar