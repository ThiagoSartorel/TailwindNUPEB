import GridNoticia from "./components/GridNoticia"
import DropDown from "./components/DropDown"


export default function Home() {
  return (
    <>
    <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen">

      <DropDown />
      <GridNoticia />



    </div>
    </>
  )
}
