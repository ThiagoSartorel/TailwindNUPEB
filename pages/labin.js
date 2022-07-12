import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";
import {
  SpeakerphoneIcon,
  ShareIcon,
  AtSymbolIcon,
  CheckCircleIcon,
  ArrowNarrowUpIcon,
} from "@heroicons/react/solid";

export default function Home() {
  return (
    <>
      <div
        className=" sm:mx-20 md:mx-30 lg:mx-24 min-h-screen mb-16 pt-12"
        id="top"
      >
        <div className="texto-basico">
          <h2 className="titulo-principal">LABIN</h2>

          <a  href="#top">
            <svg className="icon fixed bottom-20 right-1 w-10 ">
              <ArrowNarrowUpIcon />
            </svg>
          </a>

          <div className="m-6 sm:m-0 sm:p-2 md:p-4 text-center bg-slate-500 bg-opacity-10 rounded-2xl shadow-lg">
            <h1 className="pt-4 text-[3rem] text-center font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] ">
              Laboratório de Inovação Educacional
            </h1>

            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <ShareIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-3 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Resumo
                </h2>
              </div>
              <p className="text-justify p-4">
                Pesquisar a questão da inovação na educação relacionada à
                produção de conteúdos e à divulgação científica, promovendo a
                investigação e a realização de práticas baseadas nos dados
                pesquisados. Busca fortalecer a articulação do grupo de pesquisa
                NuPEB com a Educação Básica. Nesse sentido, compreende-se que é
                fundamental pesquisar e aplicar os conhecimentos presentes na
                literatura científica no desenvolvimento de conteúdos
                educacionais inovadores, bem como na criação de estratégias
                eficazes de divulgação das pesquisas realizadas pelo Grupo de
                Pesquisa NuPEB, em parceria com outros pesquisadores da
                Instituição. As pesquisas realizadas no Laboratório tem a
                finalidade de consolidar o NuPEB no âmbito do ecossistema de
                CTI, potencializando a interdisciplinaridade e a integração
                entre ensino, pesquisa e extensão, voltadas ao enfrentamento dos
                problemas existentes na Educação Básica. Para isso, o
                Laboratório irá desenvolver investigação científica sobre a
                produção de conteúdos educacionais inovadores. O processo de
                aperfeiçoamento técnico-científico do Podcast Eureka! servirá
                como fundamentação para a elaboração de materiais didáticos que
                estimulem e possibilitem o uso deste recurso nos diferentes
                níveis de educação. Além disso, o Laboratório aplicará os
                conhecimentos produzidos na produção de conteúdos sobre questões
                de educação ambiental e de relações étnico-raciais pesquisadas
                pelo Núcleo de Educação Ambiental e pelo Núcleo de Estudos
                Afro-Brasileiros da Universidade. Serão organizados dois livros
                em formato digital e impresso, uma coletânea contendo resultados
                desta pesquisa e de outras produzidas pelo NuPEB e por outros
                pesquisadores e um livro direcionado à Educação Básica, contendo
                verbetes didáticos, produzidos por pesquisadores da Instituição,
                das diferentes áreas do conhecimento. Dentre os impactos gerados
                pelo Laboratório está a possibilidade de compreender,
                sistematizar e aplicar os conhecimentos, de modo a se utilizar a
                linguagem e as estratégias adequadas para inovar e divulgar a
                pesquisa científica em educação. Espera-se, como este projeto,
                contribuir para a construção de projetos em parceria entre os
                pesquisadores, os professores da Educação Básica, os egressos do
                Mestrado, a comunidade acadêmica, a população e o setor
                produtivo, por meio da divulgação das atividades de pesquisa, de
                ensino e extensão do NuPEB e da Universidade.
              </p>
            </div>
            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <SpeakerphoneIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-3 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Finalidade
                </h2>
              </div>

              <p className="text-justify p-4">
                <ul>
                  1- Pesquisar a questão da inovação relacionada à produção de
                  conteúdos e à divulgação científica, promovendo a investigação
                  e a realização de práticas baseadas nos dados pesquisados.
                </ul>
                <ul>
                  2- O Labin busca potencializar as atividades de pesquisa
                  realizadas no Grupo de Pesquisa NuPEB e sua articulação com a
                  comunidade científica por meio da pesquisa sobre inovação e
                  divulgação científica.
                </ul>
                <ul>
                  3- As atividades de pesquisa do projeto visam estimular
                  parcerias entre os pesquisadores que atuam na área
                  educacional, buscando investigar e aplicar os conhecimentos na
                  produção de conteúdos inovadores relacionados à divulgação
                  científica, ampliando a pertinência social e a aplicação dos
                  resultados das pesquisas do NuPEB na realidade local, regional
                  e nacional, articulando a pesquisa, o ensino e a extensão.
                </ul>
              </p>
            </div>

            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <CheckCircleIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-3 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Objetivos
                </h2>
              </div>
              <p className="text-justify p-4">
                <h3 className="font-medium pb-2">Geral: </h3>
                <ul>
                  Analisar as contribuições da pesquisa científica e das
                  práticas de inovação e divulgação científica realizadas no
                  Laboratório de Produção de Conteúdo e Inovação Educacional
                  (Labin) para a melhoria da qualidade da educação.
                </ul>

                <h2 className="font-medium pb-2 pt-2">Específicos:</h2>
                <ul>
                  1- Pesquisar a questão da inovação relacionada à produção de
                  conteúdos e à divulgação científica, promovendo a investigação
                  e a realização de práticas baseadas nos dados pesquisados.
                </ul>
                <ul>
                  2- O Labin busca potencializar as atividades de pesquisa
                  realizadas no Grupo de Pesquisa NuPEB e sua articulação com a
                  comunidade científica por meio da pesquisa sobre inovação e
                  divulgação científica.
                </ul>
                <ul>
                  3- As atividades de pesquisa do projeto visam estimular
                  parcerias entre os pesquisadores que atuam na área
                  educacional, buscando investigar e aplicar os conhecimentos na
                  produção de conteúdos inovadores relacionados à divulgação
                  científica, ampliando a pertinência social e a aplicação dos
                  resultados das pesquisas do NuPEB na realidade local, regional
                  e nacional, articulando a pesquisa, o ensino e a extensão.
                </ul>
              </p>
            </div>

            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <AtSymbolIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-3 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Coordenação
                </h2>
              </div>
              <p className="text-justify p-4">
                <ul>Prof. Dr. Jaime Farias Dresch</ul>
                <ul>Email: labin@uniplaclages.edu.br</ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
