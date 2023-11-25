
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
      <SiSpinrilla className=" text-4xl  animate-spin"/>
    </div>
  )
}

export default Loader
