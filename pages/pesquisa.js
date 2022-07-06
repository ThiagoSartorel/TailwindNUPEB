import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-12 pt-12 px-3">
        <div className="texto-basico">
          <h2 className="titulo-principal">Linhas de Pesquisa</h2>
          <br></br>
          <h3>Pedagogia da Infância, Políticas e Diferenças</h3>
          <u>Objetivo:</u>
          <p>
            Investigar temas ligados à infância e às políticas educacionais,
            numa perspectiva pós-estruturalista, buscando ampliar o conhecimento
            sobre as metodologias de pesquisa com crianças, pesquisas com
            documentos, análise foucaultiana do discurso, estudos culturais
            sobre educação, escola, diferença e diversidade.
          </p>
          <u>Coordenador(a): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Pesquisadoras(os): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Mestrandas(os): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Egressas(os) da Graduação: </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Egressas(os) do Ensino Médio: </u>
          <a href="" target="_blank"></a>
          <br></br>
          <br></br>

          <h3>Comunicação, Divulgação Científica e Inovação</h3>
          <u>Objetivo:</u>
          <p>
            Desenvolver pesquisas básicas e aplicadas na área da comunicação,
            divulgação científica e inovação.
          </p>
          <u>Coordenador(a): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Pesquisadoras(os): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Mestrandas(os): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Egressas(os) da Graduação: </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Egressas(os) do Ensino Médio: </u>
          <a href="" target="_blank"></a>
          <br></br>
          <br></br>

          <h3>Formação de professores e Cotidiano escolar</h3>
          <u>Objetivo:</u>
          <p>
            Investigar os processos formativos no ambiente educacional,
            abrangendo os diferentes focos das políticas para a Educação Básica
            como formação inicial e continuada de professores, avaliação,
            currículo, direitos humanos e diversidade, gestão democrática e
            financiamento.
          </p>
          <u>Coordenador(a): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Pesquisadoras(os): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Mestrandas(os): </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Egressas(os) da Graduação: </u>
          <a href="" target="_blank"></a>
          <br></br>
          <u>Egressas(os) do Ensino Médio: </u>
          <a href="" target="_blank"></a>
          <br></br>
          <br></br>
        </div>
        <section id="cards-about">
          <div className="flex flex-wrap py-2  ">
            <div className="w-full px-4 py-2 flex items-center">
              <div className="w-full min-h-[450px] rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 hover:bg-gray-300">
                <h2 className="text-2xl text-gray-700 text-center py-3 font-bold">
                  Pesquisas em andamento
                </h2>
                <p className="text-gray-600 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  posuere porta iaculis. Morbi tempus ante tellus, sit amet
                  blandit enim condimentum ac. Fusce sagittis maximus nisl et
                  consectetur. Cras non mattis elit. Mauris semper maximus
                  massa, non posuere sem imperdiet ut. Morbi non justo nunc.
                  Morbi congue, tellus ac aliquam congue, mi mi ullamcorper
                  purus, eget pulvinar est mauris nec ipsum.Proin a vehicula
                  eros, non luctus massa. Vestibulum porttitor lobortis massa,
                  et ultrices mi semper quis. Pellentesque consequat facilisis
                  ex, id ullamcorper neque efficitur at.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap py-2 ">
            <div className="w-full px-4 py-2 flex items-center order-1 lg:order-2">
              <div className="w-full min-h-[450px] rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 hover:bg-gray-300">
                <h2 className="text-2xl text-gray-700 text-center py-3 font-bold">
                  Pesquisas concluídas
                </h2>
                <p className="text-gray-600 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  posuere porta iaculis. Morbi tempus ante tellus, sit amet
                  blandit enim condimentum ac. Fusce sagittis maximus nisl et
                  consectetur. Cras non mattis elit. Mauris semper maximus
                  massa, non posuere sem imperdiet ut. Morbi non justo nunc.
                  Morbi congue, tellus ac aliquam congue, mi mi ullamcorper
                  purus, eget pulvinar est mauris nec ipsum.Proin a vehicula
                  eros, non luctus massa. Vestibulum porttitor lobortis massa,
                  et ultrices mi semper quis. Pellentesque consequat facilisis
                  ex, id ullamcorper neque efficitur at. Nam egestas, neque
                  consectetur lacinia hendrerit, nibh diam lobortis sem, nec
                  porttitor tortor sem sed risus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
