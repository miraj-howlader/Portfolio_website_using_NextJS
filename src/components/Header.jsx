'use client'
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header,setHeader] = useState(false)
    const pathname = usePathname()
    
    useEffect(()=>{
        const scrollYPos = window.addEventListener('scroll',()=>{
          window.screenY > 50 ? setHeader(true): setHeader(false)
        })

        return ()=>window.removeEventListener('scroll',scrollYPos)

    })
  return (
    <header className={`${header ?" py-4 bg-white shadow-lg dark: bg-accent":" py-6 dark:bg-transparent"} sticky top-0 z-30 transition-all
     ${pathname==='/' && ' bg-[#fef9f5]'}`}>
      <div className=" container mx-auto ">
        <div className=" flex justify-between items-center ">
          <Logo />
          <div className=" flex items-center gap-x-6">
            <Nav containerStyle='xl:flex gap-x-8 items-center'
            linkStyle=' relative hover:text-primary transition-all ml-4 '
            underlineStyle='absolute left-0 top-full h-[2px] bg-primary w-full'/>
            <ThemeToggler />
            <div className=" md:hidden  xl:hidden sm:flex ">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
