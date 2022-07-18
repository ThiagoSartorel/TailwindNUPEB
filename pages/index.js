import GridNoticia from "./components/GridNoticia";
import GridPesquisa from "./components/GridPesquisa";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";
import axios from "axios";

const imagens = []

export default function Home(props) {
  for (let i = 0; i < props.banner.length; i++) {
    imagens.push(props.banner[i].id)
  }
  return (
    <>
      <div className="pt-10">
        <Slider imagens={imagens} />
      </div>

      <div className="text-center p-6 bg-slate-500 bg-opacity-10">
        <a className="text-[3rem] text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">NuPEB - </a>
        <a className="text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
          Núcleo de Pesquisa em Educação Básica
        </a>
      </div>

      <div className="mx-2 sm:mx-20">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-2xl tracking-widest uppercase text-gray-700 py-8">
          <h1>Linhas de Pesquisa</h1>
        </div>
        <GridPesquisa />
      </div>
      <br></br>
      <div className="mx-2 sm:mx-20 mb-16 ">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-2xl tracking-widest uppercase text-gray-700 py-8">
          <h1>Últimas notícias</h1>
        </div>
        <GridNoticia />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  var banner = await axios.get(process.env.BACKEND + "banners2/listActive");
  return { props: { banner: banner.data } };
}

