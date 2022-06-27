import GridNoticia from "./components/GridNoticia"
import DropDown from "./components/DropDown"

export default function Home() {
  return (
    <>
    <div className="sm:mx-20 md:mx-30 lg:mx-48">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <DropDown />
      <GridNoticia />

    </div>
    </>
  )
}
