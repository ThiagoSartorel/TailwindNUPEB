import GridNoticia from "./components/GridNoticia";
import GridPesquisa from "./components/GridPesquisa";
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

      <div className="sm:mx-20 md:mx-30 lg:mx-48  ">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-3xl tracking-widest uppercase text-black py-8">
          <h1>Linhas de Pesquisa</h1>
        </div>
        <GridPesquisa />
        </div>
        <br></br>
        <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-3xl tracking-widest uppercase text-black py-8">
          <h1>Últimas notícias</h1>
        </div>
        <GridNoticia/>
      </div>

      
    </>
  );
}
