'use client'
import Link from "next/link";
import { RiYoutubeFill,
  RiLinkedinFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiGithubFill

 } from "react-icons/ri";

 const icons = [
  {path:'/',name:<RiYoutubeFill />},
  {path:'/',name:<RiLinkedinFill />},
  {path:'/',name:<RiGithubFill />},
  {path:'/',name:<RiFacebookCircleFill />},
  {path:'/',name:<RiInstagramFill />},
 ]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return (
          <Link href={icon.path} key={index}>
          {icon.name}
          </Link>
        )
      })}
      
    </div>
  )
}

export default Socials
