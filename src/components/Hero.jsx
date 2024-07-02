
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import Link from 'next/link';
import { 
    RiBriefcase4Fill,
    RiTempHotFill
    ,RiTodoFill ,RiArrowDownSLine 
 } from "react-icons/ri";
import Socials from './Socials';
import DevImg from './DevImg';
import Badge from './Badge';


const Hero = () => {
  return (
    <section className=' py-12 xl:py-24 h-[84vh] xl:pt-28 
     bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className=" container mx-auto">
       <div className=" flex justify-between gap-x-8">
         {/* Text  */}
         <div className=" flex max-w-[600px] flex-col
          justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=' text-sm uppercase font-semibold
             mb-4 text-primary tracking-[4px]'>Web Developer</div>
            <h1 className='h1 mb-4'>Hello, It's Miraj Howlader</h1>
            <p className='subtitle max-w[490px] mx-auto xl:mx-0'>
                Brief description with insights into myself,
                my vacational journey, and what i engage in 
                 professionally
            </p>
            <div className=' flex flex-col gap-y-3 md:flex-row
             gap-x-3 mx-auto xl:mx-0 mb-12'>
                <Link href='/contact'>
                <Button className='gap-x-2'>
                    Contact me <Send size={14}/></Button>
                </Link>
                <Button variant='secondary' className='  gap-x-2 border border-black'>
                Download CV <Download size={14}/></Button>
            </div>
            {/* Social components  */}
            <Socials containerStyles=' flex gap-x-3 mx-auto
             xl:mx-0 '
             iconsStyles='text-foreground text-[22px]
              hover:text-primary transition-all'/>
         </div>
        {/* Image  */}
        <div className="  xl:flex relative ">
          {/* Badge components n */}
          <Badge 
          containerStyles='absolute top-[24%] -left-[o.5rem]'
          icon={<RiBriefcase4Fill 
          />}
          endCounterNum={5}
          badgeText='Years Of Experience'
          />

          <Badge 
          containerStyles='absolute top-[88%] -left-[-4rem]'
          icon={<RiTodoFill
          />}
          endCounterNum={6}
          endCounterText='k'
          badgeText='Finished Projects'
          />

          <Badge 
          containerStyles='absolute top-[55%] -right-8'
          icon={<RiTempHotFill
          />}
          endCounterNum={9}
          endCounterText='k'
          badgeText='Happy Clients'
          />

           <div className=" bg-hero_shape2_light
            dark:bg-hero_shape2_dark w-[400px] h-[400px]
             bg-no-repeat absolute -top-1 -right-2 ">
           </div>
           {/* DevImg components  */}
           <DevImg containerStyles='bg-hero_shape w-[510px]
            h-[462px] bg-no-repeat relative bg-bottom  ml-[148px]'
            imgSrc='/hero/developer.png'/>
        </div>
       </div>
      

      <div className=' hidden md:flex absolute left-2/4 bottom-44
       xl:bottom-12'>
        <RiArrowDownSLine className=' text-3xl text-primary' />
      </div>
      </div>
    </section>
  )
}

export default Hero
