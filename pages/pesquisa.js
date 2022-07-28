import HtmlParser  from "react-html-parser";
import axios from "axios";

export default function Home(props) {

  return (
    <>
      <div className="mx-4 sm:mx-20 md:mx-30 lg:mx-36 xl:mx-48 min-h-screen mb-14 pt-12">
        <div className="texto-basico">
          <h2 className="titulo-principal">Pesquisas</h2>
        </div>
        

        <section id="cards-about">
          <div className="flex flex-wrap py-2  ">
            <div className="w-full px-4 flex items-center">
              <div className="w-full min-h-[450px] rounded overflow-hidden shadow-lg bg-card-text py-6 px-4 bg-card">
                <h2 className="text-2xl text-gray-700 text-center py-3 font-semibold">
                  Linhas de Pesquisa
                </h2>
                <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                  {HtmlParser(props.content[0].description_linhas)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 flex items-center">
              <div className="w-full min-h-[450px] rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 bg-card">
             
                <h2 className="text-2xl text-gray-700 text-center py-3 font-semibold">
                  Pesquisas em andamento
                </h2>
                <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                  {HtmlParser(props.content[0].description_andamento)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 flex items-center">
              <div className="w-full min-h-[450px] rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 bg-card">
                <h2 className="text-2xl text-gray-700 text-center py-3 font-semibold">
                  Pesquisas concluídas
                </h2>
                <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                  {HtmlParser(props.content[0].description_concluidas)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(){
  const response = await axios.get(process.env.BACKEND + "pesquisa");
  
  return {props: {content: response.data}};
}