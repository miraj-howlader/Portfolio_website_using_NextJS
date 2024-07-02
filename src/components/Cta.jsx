import Link from "next/link"
import { Button } from "./ui/button"


const Cta = () => {
  return (
    <section className=" bg-pink-100 py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
            <h2 className=" h2 max-x-xl text-center mb-8">Prepared to turn ideas into reality? I'm here to help</h2>
             <Link href='/contact'>
             <Button>Contact me</Button>
             </Link>
        
        </div>
      </div>
    </section>
  )
}

export default Cta
