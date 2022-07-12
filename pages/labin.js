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
  ClipboardCheckIcon,
} from "@heroicons/react/solid";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-20 pt-12 px-3">
        <div className="texto-basico">
          <h2 className="titulo-principal">LABIN</h2>

          <div className="text-center p-6 bg-slate-500 bg-opacity-10 rounded-2xl">
            <a className="text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
              Laboratório de Inovação Educacional
            </a>

            <div className="text-clip">
              <svg className="icon">
                <SpeakerphoneIcon />
              </svg>
              <h1 className="pb-3 titulo-text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
                Resumo
              </h1>
              <p className="text-justify">
                LA pesquisa tem com finalidade pesquisar a questão da inovação
                na educação relacionada à produção de conteúdos e à divulgação
                científica, promovendo a investigação e a realização de práticas
                baseadas nos dados pesquisados. O período previsto para sua
                realização é de dois anos, a partir do segundo semestre de 2021.
                O projeto tem como objetivo analisar as contribuições da
                pesquisa científica e das práticas de inovação e divulgação
                científica realizadas no Laboratório de Produção de Conteúdo e
                Inovação Educacional (Labin) para a melhoria da qualidade da
                educação. Busca fortalecer a articulação do grupo de pesquisa
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
                níveis de educação. A pesquisa também irá subsidiar a elaboração
                de dois recursos de divulgação de pesquisas realizadas no NuPEB
                e na Instituição: o website do Laboratório e o Repositório
                Digital Institucional. Além disso, o Laboratório aplicará os
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

            <div className="text-clip">
              <svg className="icon">
                <ShareIcon />
              </svg>
              <h1 className="pb-3 text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
                Finalidade
              </h1>
              <p className="text-justify">
                <ul>
                  1-Pesquisar a questão da inovação relacionada à produção de
                  conteúdos e à divulgação científica, promovendo a investigação
                  e a realização de práticas baseadas nos dados pesquisados.
                </ul>
                <ul>
                  2-O Labin busca potencializar as atividades de pesquisa
                  realizadas no Grupo de Pesquisa NuPEB e sua articulação com a
                  comunidade científica por meio da pesquisa sobre inovação e
                  divulgação científica.
                </ul>
                <ul>
                  3-As atividades de pesquisa do projeto visam estimular
                  parcerias entre os pesquisadores que atuam na área
                  educacional, buscando investigar e aplicar os conhecimentos na
                  produção de conteúdos inovadores relacionados à divulgação
                  científica, ampliando a pertinência social e a aplicação dos
                  resultados das pesquisas do NuPEB na realidade local, regional
                  e nacional, articulando a pesquisa, o ensino e a extensão.
                </ul>
              </p>
            </div>

            <div className="text-clip">
              <svg className="icon">
                <CheckCircleIcon />
              </svg>
              <h1 className="pb-3 text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
                Objetivo Geral
              </h1>
              <p className="text-justify">
                Analisar as contribuições da pesquisa científica e das práticas
                de inovação e divulgação científica realizadas no Laboratório de
                Produção de Conteúdo e Inovação Educacional (Labin) para a
                melhoria da qualidade da educação.
              </p>
            </div>

            <div className="text-clip">
              <svg className="icon">
                <ClipboardCheckIcon />
              </svg>
              <h1 className="pb-3 text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
                Objetivos Específicos
              </h1>
              <p className="text-justify">
                <ul>
                  * Analisar as contribuições da pesquisa e das práticas
                  realizadas no projeto para a melhoria da qualidade da educação
                  e publicar livro com os resultados desta e de outras pesquisas
                  educacionais.
                </ul>
                <ul>
                  * Aperfeiçoar o Podcast Eureka!, nos seus aspectos
                  técnico-científicos.
                </ul>
                <ul>
                  * Aplicar os conhecimentos coletados na produção de conteúdos
                  educacionais inovadores e práticas de divulgação científica.
                </ul>
                <ul>
                  * Articular as pesquisas do Labin com as atividades do Núcleo
                  de Educação Ambiental da Universidade e do Núcleo de Estudos
                  Afro-Brasileiros da Universidade (NEAB/UNIPLAC).
                </ul>
                <ul>
                  * Desenvolver material didático denominado Dicionário Ciência
                  na Escola, contendo verbetes didáticos sobre conceitos
                  relacionados aos currículos escolares e às práticas docentes
                  na Educação Básica e no Ensino Superior.
                </ul>
                <ul>
                  * Produzir materiais didáticos sobre a produção de podcast, a
                  partir da experiência do Eureka!
                </ul>
              </p>
            </div>

            <div className="text-clip">
              <svg className="icon">
                <AtSymbolIcon />
              </svg>
              <h1 className="pb-3 text-[3rem] text-center font-thin text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439]">
                Contato
              </h1>
              <p className="text-justify">
                <ul>Coordenação: Prof. Dr. Jaime Farias Dresch</ul>
                <ul>Email: labin@uniplaclages.edu.br</ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
