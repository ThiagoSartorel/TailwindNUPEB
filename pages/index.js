import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <Slider />
      </div>

      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen">
        <DropDown />

        <GridNoticia />
      </div>
    </>
  );
}
