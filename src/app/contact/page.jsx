"use client"

import { Form } from "@/components/ui/form"
import { HomeIcon,PhoneCall,MailIcon } from "lucide-react"

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text & illustration  */}
        <div className="  grid xl:grid-cols-2 pt-12 xl:h-[480px]
         mb-6 xl:mb-24">
          <div className=" flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary
             text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
               Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's work Together</h1>
          <p className="subtitle max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, distinctio?</p>
          

          </div>
          {/* illustration  */}
          <div className=" hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat">
          </div>
        </div>
        {/* info text & form  */}
        <div className=" flex  justify-between mb-24 xl:mb-32">
          <div className=" flex flex-col gap-y-4 xl:gap-y-14
           mb-12 xl:mb-24 text-base ">
          <div className=" flex flex-center gap-x-8">
            <MailIcon size={18} className="text-primary"/>
            <div>mirajhowlader9999@gmail.com</div>
          </div>
          <div className=" flex flex-center gap-x-8">
            <HomeIcon size={18} className="text-primary"/>
            <div>C/32 Raybazar Mohammadpur Dhaka</div>
          </div>
          <div className=" flex flex-center gap-x-8">
            <PhoneCall size={18} className="text-primary"/>
            <div>+88 0173 145 8068</div>
          </div>
          </div>
         <Form />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
