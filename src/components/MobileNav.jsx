import { Sheet,SheetContent,SheetTrigger } from "./ui/sheet"
 import Nav from "./Nav";
 import Logo from "./Logo";
 import Socials from "./Socials";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet >
      <SheetTrigger >
        <AlignJustify  className=" cursor-pointer"/>
      </SheetTrigger>
      <SheetContent >
        <div className=" flex flex-col items-center justify-between
         h-full py-8">
          <div className=" flex items-center flex-col gap-y-32">
            <Logo />
            <Nav containerStyle='flex flex-col items-center gap-y-6' linkStyle='text-2xl'/>
           
          </div>
          <Socials containerStyles='flex gap-x-4'
            iconsStyles='text-2xl'/>
        </div> 
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
