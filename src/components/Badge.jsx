'use client'
import CountUp from "react-countup"

const Badge = ({endCounterText,badgeText,containerStyles,icon,endCounterNum}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className=" flex items-center gap-x-2">
        <div className=" text-4xl leading-none font-bold text-primary">
          <CountUp end={endCounterNum} delay={1} duration={4} />
          {endCounterText}
        </div>
        <div className=" max-w-[70px] leading-none text-[15px]
         font-medium  text-black">{badgeText}</div>
      </div>

    </div>
  )
}

export default Badge
