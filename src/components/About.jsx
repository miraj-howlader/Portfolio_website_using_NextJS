import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs,TabsContent,TabsList,TabsTrigger } from "./ui/tabs"
import { User2, GraduationCap,Calendar,Briefcase ,MailIcon,HomeIcon,PhoneCall, University } from "lucide-react"

const infoData = [
    {icon: <User2 size={20}/>,text:"Miraj Howlader"},
    {icon: <PhoneCall size={20}/>,text:"+01731458068"},
    {icon: <MailIcon size={20}/>,text:"mirajhowlader9999@gmail.com"},
    {icon: <Calendar size={20}/>,text:"Born on 25 sep 1998"},
    {icon: <GraduationCap size={20}/>,text:"Bsc in Computer Science"},
    {icon: <HomeIcon size={20}/>,text:"Street Makupkhan Road Mohammadpur Dhaka"},
]

const qualificationDate=[
    {
        title:'education',
        data:[
            {
                university:"Sonargaon University",
                qualification:"Bachelor of Science",
                years:"2019 - 2023",
            },
            {
                university:"Another University",
                qualification:"Master of Science",
                years:"2017 - 2019",
            },
            {
                university:"Yet another University",
                qualification:"Ph.D in Computer Science",
                years:"2019 - 2025",
            },
        ]
    },
    {
        title:'experience',
        data:[
            {
                company:"ABC Inc",
                role:"Software Developer",
                years:"2019 - 2022",
            },
            {
                company:"XYZ Corporation",
                role:"Senior Developer",
                years:"2019 - 2022",
            },
            {
                company:"Tech Innovators",
                role:"Lead Developer",
                years:"2019 - Present",
            },
           
        ]
    }
]

const skillData=[
    {
        title:'skills',
        data:[
          {name:"HTML , CSS"},
          {name:"Frond-end Development"},
          {name:"JavaScript, React"},
          {name:"Bck-end Development"},
        ]
    },
    {
        title:'tools',
        data:[
          {imgPath:"/about/vscode.svg"},
          {imgPath:"/about/figma.svg"},
          {imgPath:"/about/notion.svg"},
          {imgPath:"/about/wordpress.svg"},
        ]
    }
]


const About = () => {
    const getData = (arr,title)=>{
        return arr.find((item)=>item.title===title)
    }

    


  return (
    <section className=" xl:h-[860px] pb-12 xl:py-24 mt-8">
      <div className="container mx-auto">
        <h1 className="section-title mb-8 xl:mb-16 text-center
         mx-auto">
            About Me
            </h1>
            <div className=" flex flex-col sm:flex-row">
                {/* Image  */}
                <div className="xl:flex-col flex-1 relative">
                   <DevImg containerStyles='mr-8 bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                     imgSrc='/about/developer.png'/>
                </div>

                {/* Tabs  */}
                <div className=" flex-1">
                   <Tabs defaultValue="personal">
                    <TabsList className=' w-full grid sm:grid-cols-3 xl:mx-w-[520px] xl:border dark:border-none'>
                        <TabsTrigger className=' w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                        <TabsTrigger className=' w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                        <TabsTrigger className=' w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                    </TabsList>

                    {/* Tabs content  */}
                    <div className=" text-lg mt-12 xl:mt-8">
                        <TabsContent value='personal'>
                            <div className=" text-center xl:text-left">
                                <h3 className="h3 mb-4">Unmatched Service Quality for over 10 Years</h3>
                              <p className="subtitle max-w-xl
                               mx-auto xl:mx-0">I Specialize in crafting intuitive websites
                                with cutting-edge technology,
                                delivering dynamic and engaging
                                user experience
                              </p>
                              {/* Icons  */}
                              <div className=" grid xl:grid-cols-2 gap-4 mb-12">
                                {
                                infoData.map((item,index)=>{
                                    return <div
                                    className=" flex items-center gap-x-4
                                     mx-auto xl:mx-0"
                                     key={index}>
                                        <div className=" text-primary">{item.icon}</div>
                                        <div>{item.text}</div>
                                    </div>
                                })
                                }
                              </div>
                              {/* Language  */}
                              <div className=" flex flex-col gap-y-2">
                                <div className="text-primary">Language Skill</div>
                                <div className="border-b border-border">

                                </div>
                                <div>English, Bangla, Hindi</div>
                              </div>
                            </div>
                        </TabsContent>
                        {/* Qualifaction  */}
                        <TabsContent value='qualifications'> 
                            <div>
                                <h3 className=" h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                           {/* Experience & education wrapper  */}
                           <div className=" grid md:grid-cols-2 gap-y-8">
                            {/* Experience  */}
                            <div className=" flex flex-col gap-y-6">
                                <div className=" flex gap-x-4 items-center
                                 text-[22px] text-primary">
                                    <Briefcase />
                                    <h4 className=" capitalize font-medium">
                                       {getData(qualificationDate, 'experience').title}
                                    </h4>
                                </div>
                                {/* list  */}
                                <div className=" flex flex-col gap-y-8">
                                    {getData(qualificationDate,'experience').data.map((item,index)=>{
                                      const {company,role,years}=item;
                                      return (
                                        <div
                                        className=" flex gap-x-8
                                         group"
                                         key={index}>
                                            <div className=" ml-2 relative bg-border w-[1px] h-[84px]">
                                                <div className=" w-[11px] h-[11px] rounded-full bg-primary
                                                 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-xl leading-none mb-2 ">{company}</div>
                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                <div className="text-base font-medium">{years}</div>
                                            </div>

                                        </div>
                                      )
                                    })}
                                </div>
                            </div>

                            {/* education  */}
                            <div className=" flex flex-col gap-y-6">
                                <div className=" flex gap-x-4 items-center
                                 text-[22px] text-primary">
                                    <GraduationCap size={20} />
                                    <h4 className=" capitalize font-medium">
                                       {getData(qualificationDate, 'education').title}
                                    </h4>
                                </div>
                                {/* list  */}
                                <div className=" flex flex-col gap-y-8">
                                    {getData(qualificationDate,'education').data.map((item,index)=>{
                                      const {university,qualification,years}=item;
                                      return (
                                        <div
                                        className=" flex gap-x-8
                                         group"
                                         key={index}>
                                            <div className=" ml-2 relative bg-border w-[1px] h-[84px]">
                                                <div className=" w-[11px] h-[11px] rounded-full bg-primary
                                                 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-xl leading-none mb-2 ">{university}</div>
                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                <div className="text-base font-medium">{years}</div>
                                            </div>

                                        </div>
                                      )
                                    })}
                                </div>
                            </div>
                           </div>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills'> 
                            <div className=" text-center xl:text-left">
                            <h3 className=" h3 mb-8">What I use Everyday</h3>
                            <div className="mb-16">
                                <h4 className=" text-xl
                                 font-semibold mb-2">Skills</h4>
                            
                            <div className="border-b border-border mb-4">

                            </div>
                            {/* skill liist  */}
                            <div>
                                {getData(skillData, 'skills').data.map((item,index)=>{
                                    const {name} = item;
                                    
                                    return <div
                                    className=" mx-auto xl:mx-0 w-2/4 text-center xl:text-left"
                                     key={index}>
                                      <div className=" font-semibold">{name}</div>
                                    </div>
                                })}
                            </div>
                            </div>
                            {/* Tools  */}
                            <div>
                                <h4 className=" text-xl font-medium
                                 mb-2 xl:text-left">Tools</h4>
                                    <div className="border-b border-border mb-4"></div>
                            
                            {/* tools list  */}
                            <div className=" flex gap-x-8 justify-center
                             xl:justify-start cursor-pointer">
                                {getData(skillData,'tools').data.map((item,index)=>{
                                    const {imgPath}=item;
                                    return <div key={index}>
                                        <Image src={imgPath} width={48} height={48}alt="" priority/>
                                    </div>
                                })}
                            </div>
                            </div>
                            </div>
                        </TabsContent>
                    </div>
                   </Tabs>
                </div>
            </div>
      </div>
    </section>
  )
}

export default About
