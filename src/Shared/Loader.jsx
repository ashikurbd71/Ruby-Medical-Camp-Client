
import { SiSpinrilla } from "react-icons/si";
const Loader = ({smallHeight}) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <SiSpinrilla className=" text-5xl text-[#1976D2]  animate-spin"/>
    </div>
  )
}

export default Loader
