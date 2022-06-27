import GridNoticia from "./components/GridNoticia"
import DropDown from "./components/DropDown"
import Carousel from "./components/Carousel"


export default function Home() {
  return (
    <>
    <div className="sm:mx-20 md:mx-30 lg:mx-48">

      <DropDown />
      <GridNoticia />


    </div>
    </>
  )
}
