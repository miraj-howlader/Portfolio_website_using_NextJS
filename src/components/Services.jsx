import { GanttChartSquare,Blocks,Gem,BriefcaseBusiness } from "lucide-react"

import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "./ui/card"

const servicesData = [
    {
        icon:<GanttChartSquare size={72} strokeWidth={0.8}/>,
        title:"Web Design",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, harum."
    },
    {
        icon:<Blocks size={72} strokeWidth={0.8}/>,
        title:"Web Development",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, harum."
    },
    {
        icon:<BriefcaseBusiness size={72} strokeWidth={0.8}/>,
        title:"Digital Marketing",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, harum."
    },
]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-28
             text-center mx-auto">My Services</h2>
            {/* Grid items  */}
            <div className=" flex gap-x-6 xl:flex-col justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {servicesData.map((item,index)=>{
                    return <Card key={index} className='w-full
                     max-w-[424px] h-[300px] flex flex-col pt-16 mt-8
                      pb-16 justify-center items-center relative'>
                       <CardHeader className='text-primary absolute
                        -top-[60px]'>
                        <div className="w-[140px] h-[80px]
                         bg-pink-100 dark:bg-background
                          flex justify-center items-center">{item.icon}</div>
                       </CardHeader>

                       <CardContent className='text-center'>
                        <CardTitle className='mb-4'>{item.title}</CardTitle>
                        <CardDescription className='mb-4'>{item.description}</CardDescription>
                       </CardContent>
                    </Card>
                })}
            </div>
        </div>
      
    </section>
  )
}

export default Services
