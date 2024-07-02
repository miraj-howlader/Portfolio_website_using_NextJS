'use client'
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"
import { useState } from "react";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Tic Tac to Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "ecomerce Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Count Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Weather App Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Todo Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Fullstack js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack js",
    name: "Bycyle Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Fullstack js",
    name: "Car Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
];

const uniqueCategory= ['all projects', ...new Set(projectData.map((item) => item.category))]


const Projects = () => {
  const [categories,setCategorires]=useState(uniqueCategory)
  const [category,setCategory] = useState('all projects')

  const filteredProjects  =projectData.filter((project) => {
    return category === 'all projects'?project:project.category===category;
  })
  console.log(filteredProjects)
 
  return (
    <section className=" min-h-screen pt-12 ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-8 xl:mb-16
         text-center mx-auto">My Projects</h2>
         {/* Tavs  */}
         <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
          className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
           mb-12 mx-auto md:border dark:border-none '
          >
            {categories.map((category,index) => {
              return <TabsTrigger 
              key={index}
              onClick={()=>setCategory(category)}
              className="capitalize w-[162px] md:w-auto "
              value={category}>
                {category}
                </TabsTrigger>
            })}
          </TabsList>
          {/* tab content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1
           lg:grid-cols-3 gap-4">
            {filteredProjects.map((project,index)=>{
              return <TabsContent value={category} key={index}>
                   <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
         </Tabs>
         </div>
    </section>
  )
}

export default Projects
