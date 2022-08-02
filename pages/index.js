import GridNoticia from "./components/GridNoticia";
import Slider from "./components/Slide";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import HtmlParser from "react-html-parser";

const imagens = [];

export default function Home(props) {
  for (let i = 0; i < props.banner.length; i++) {
    imagens.push(props.banner[i].url);
  }
  var contador = 0;
  return (
    <>
      <div className="pt-10">
        <Slider key={imagens} imagens={imagens} />
      </div>

      <div className="text-center p-6 bg-slate-500 bg-opacity-10">
        <a className="text-[3rem] text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
          NuPEB -{" "}
        </a>
        <a className="text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
          Núcleo de Pesquisa em Educação Básica
        </a>
      </div>

      <div className="mx-4 sm:mx-16">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-2xl tracking-widest uppercase text-gray-700 py-6">
          <h1>Sobre nós</h1>
        </div>

     
          <div className="w-full py-1 flex items-center">
            <a className="mr-3 w-32 md:w-20 lg:w-16 xl:w-2 text-lg text-gray-700 font-bold hover:text-xl" href="informese">
              Objetivos Gerais
              <FaSearch className="mt-3"/>
            </a>
            <div className="w-full p-4 mx-0 lg:mx-4 xl:mx-24 overflow-hidden bg-card">
              <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll text-justify">
                {HtmlParser(props.sobre[0].description_objetivosgerais)}
              </div>
            </div>
          </div>
      
       
          <div className="w-full py-3 flex items-center">
            <a className="mr-3 w-32 md:w-24 lg:w-16 xl:w-2  text-lg text-gray-700 font-bold hover:text-xl" href="pesquisa">
              Linhas de Pesquisa
              <FaSearch className="mt-3"/>
            </a>
            <div className="w-full p-4 mx-0 lg:mx-4 xl:mx-24 overflow-hidden bg-card">
              <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll text-justify">
                {HtmlParser(props.sobre[0].description_linhasdepesquisa)} 
              </div>
            </div>
          </div>
    

      
      </div>

      <div className="mx-2 sm:mx-20 mb-16 ">
        <div className="texto-basico"></div>
        <div className="text-[3rem] text-center font-semibold text-2xl tracking-widest uppercase text-gray-700 py-6">
          <h1>Últimas notícias</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 gap-4">
          {props.news.map((oneNew) => {
            contador++;
            if (contador > 3) {
              return;
            }
            return (
              <GridNoticia
                key={oneNew.id}
                id_author={oneNew.author_id}
                id={oneNew.id}
                title={oneNew.title}
                description={oneNew.description}
                author={oneNew.author.name}
                date={oneNew.created_at}
                image={oneNew.file_id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  var banner = await axios.get(process.env.BACKEND + "banners2/listActive");
  var noticias = await axios.get(process.env.BACKEND + "news");
  var sobre = await axios.get(process.env.BACKEND + "homepage");

  return { props: { banner: banner.data, news: noticias.data.news, sobre: sobre.data } };
}
