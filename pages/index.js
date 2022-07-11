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

      <div className="text-center p-6 bg-slate-500 bg-opacity-10">
        <a className="text-[3rem] text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">NuPEB - </a>
        <a className="text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
          Núcleo de Pesquisa em Educação Básica
        </a>
      </div>

      <div className="sm:mx-20 md:mx-30 lg:mx-48">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-2xl tracking-widest uppercase text-gray-700 py-8">
          <h1>Linhas de Pesquisa</h1>
        </div>
        <GridPesquisa />
      </div>
      <br></br>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-20 ">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-2xl tracking-widest uppercase text-gray-700 py-8">
          <h1>Últimas notícias</h1>
        </div>
        <GridNoticia />
      </div>
    </>
  );
}
