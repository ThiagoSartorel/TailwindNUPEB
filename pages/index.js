import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <Slider />
      </div>

      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-8">
        <div className="text-center py-10 text-[3rem] font-bold text-3xl tracking-widest uppercase text-[#f7a439]">
          <h1>Últimas notícias</h1>
        </div>
        <GridNoticia />
      </div>
    </>
  );
}
