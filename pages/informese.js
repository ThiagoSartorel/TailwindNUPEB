import axios from "axios";
import HtmlParser from "react-html-parser";

export default function Home(props) {
  const conteudo = props.content.informs[0]
  return (
    <>
      <div className="mx-4 sm:mx-20 md:mx-30 lg:mx-36 xl:mx-48 min-h-screen mb-14 pt-12">
        <div className="textoBasico">
          <div className="titulo-principal">
            <h1>Informe-se</h1>
          </div>

          <section id="cards-about">
            <div className=" place-content-around">
              <div className="w-full py-3 flex items-center">
                <div className="w-full rounded overflow-hidden shadow-lg bg-card-text py-4 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold">
                    Sobre nós
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll text-justify">
                  {HtmlParser (conteudo.description_about)}
                  </div>
                </div>
              </div>

              <div className="w-full py-3 flex items-center">
                <div className=" w-full rounded overflow-hidden shadow-lg bg-card-text py-4 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold ">
                    Objetivos específicos
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll text-justify">
                    {HtmlParser (conteudo.description_objetivo)}
                  </div>
                </div>
              </div>

              <div className="w-full py-3 flex items-center">
                <div className="w-full rounded overflow-hidden shadow-lg bg-card-text py-4 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold">
                    Projetos
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll text-justify">
                  {HtmlParser (conteudo.description_project)}
                  </div>
                </div>
              </div>

              <div className="w-full py-3 flex items-center">
                <div className="w-full rounded overflow-hidden shadow-lg bg-card-text py-4 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold">
                    Produções
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll text-justify">
                  {HtmlParser (conteudo.description_product)}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(){
  const response = await axios.get(process.env.BACKEND + "inform")

  return {props: {content: response.data}}
}