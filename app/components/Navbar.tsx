'use client';
import {Menubar,MenubarContent,MenubarItem,MenubarTrigger} from '@/components/ui/menubar'
import {Sun,Moon,Home,ActivitySquare,Code,ShieldCheck,Braces,Contact} from 'lucide-react'
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
    <header className='flex justify-center p-2 sticky top-0 z-1000 '>
    <Menubar className='rounded-full px-2 py-6'>
        <MenubarMenu>
            <MenubarTrigger><Link href='#hero'><Home/></Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Link href='#activity'><ActivitySquare/></Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Link href='#skills'><Braces/></Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Link href='#projects'><Code/></Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Link href='#certification'><ShieldCheck/></Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Link href='#contact'><Contact/></Link></MenubarTrigger>
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