import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-24 min-h-screen mb-8 pt-12">
        <div className="textoBasico">
          <div className="titulo-principal">
            <h1>Informe-se</h1>
          </div>

          <section id="cards-about" className=" ">
            <div className="flex flex-wrap px-2 gap-4 place-content-around">
              <div className="w-full sm:w-full lg:w-1/2 px-1 flex items-center">
                <div className=" w-full  rounded overflow-hidden shadow-lg bg-card-text py-6 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold ">
                    Objetivos
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                    <p className="text-gray-600 text-base py-2">
                      Pesquisar políticas para a Educação Básica e suas relações
                      com os processos formativos na escola, levando em
                      consideração os fundamentos teóricos envolvidos na
                      elaboração, implementação, avaliação, resistências e
                      redefinição das políticas educacionais.
                    </p>
                    <br></br>
                    <h3>Missão:</h3>

                    <br></br>
                    <h3>Visão:</h3>

                    <br></br>
                    <h3>Valores:</h3>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-full lg:w-1/2 px-1 py-2 flex items-center order-1 lg:order-2">
                <div className="w-full min-h-[400px] rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold">
                    Sobre nós
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                    <h3>Grupos de Estudos</h3>
                    <ul>Objetivo:</ul>
                    <ul>Como participar:</ul>
                    <ul>Link Calendário:</ul>
                    <br></br>
                    <h3>Mestrado</h3>
                    <ul>Objetivo:</ul>
                    <ul>Link Inscrições:</ul>
                    <br></br>
                    <h3>Artigos</h3>
                    <ul>Objetivo:</ul>
                    <ul>Link repositório:</ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap px-2 gap-4 place-content-around">
              <div className="w-full sm:w-full lg:w-1/2 px-1 py-2 flex items-center">
                <div className="w-full min-h-[400px]  rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold">
                    Projetos
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                    <p className="text-gray-600 text-base py-2">
                      <ul>Descrição:</ul>O projeto de extensão tem como objetivo
                      oferecer à comunidade acadêmica da UNIPLAC experiências
                      culturais e artísticas no momento do intervalo das aulas
                      do período noturno.
                      <ul> Justificativa:</ul> Considerando que a grande maioria
                      dos/das acadêmicos/as e professores/as frequentam o campus
                      apenas neste período, o "Projeto 20:20" representa uma
                      oportunidade de acesso da comunidade universitária às
                      expressões culturais e artísticas protagonizadas pelas
                      pessoas que compõem a nossa Universidade e a região
                      serrana.
                      <ul>Organização:</ul> O projeto é uma iniciativa do Labin
                      - Laboratório de Inovação Educacional com apoio da
                      Pró-Reitoria de Pesquisa, Extensão e Pós-Graduação. A
                      organização conta com a parceria entre a o Curso de Música
                      e o Mestrado em Educação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:w-full lg:w-1/2 px-1 py-2 flex items-center order-1 lg:order-2">
                <div className="w-full min-h-[400px] rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4 bg-card">
                  <h2 className="text-2xl text-gray-700 text-center py-1 font-bold">
                    Produções
                  </h2>
                  <div className="text-gray-600 text-base py-2 overflow-auto touch-pan-y h-80 scroll">
                    <p className="text-gray-600 text-base py-2">
                      <ul>Artigos em perióticos e capítulos de livros:</ul>
                      <ul>
                        SANTOS, V. L. C. R. ; DRESCH, J. F. . Educação Infantil:
                        aspectos do processo de profissionalização e valorização
                        docente no Brasil. In: Paula Arcoverde Cavalcanti.
                        (Org.). Educação: teorias, métodos e perspectivas. 1.
                        ed. Curitiba: Artemis, 2021, v. I, p. 93-107. [Link]
                      </ul>
                      <ul>
                        FAITA, S. ; DRESCH, Jaime Farias. . ENTREVISTA COM
                        ÂNGELA MARIA SCALABRIN COUTINHO. In: Liziany Müller
                        Medeiros; Juliane Paprosqui; Silvana Zancan. (Org.).
                        Novas formas de ensinar e aprender. 1. ed. Santa Maria,
                        RS: Arco Editores, 2020, v. , p. 73-87. [Link]
                      </ul>
                      <ul>
                        MATOS, G. A. ; GROSCH, M. S. ; DRESCH, J. F. . Formação
                        continuada de professores: uma abordagem
                        histórico-crítica. In: Daniela Corte Real; Joanne
                        Cristina Pedro; Patrícia Modesto da Silva. (Org.). I
                        Seminário Internacional de Educação, Biopolítica e
                        Formação de Professores e II Jornada Interuniversitária
                        de pós-Graduação em Educação Brasil/Argentina. 1. ed.
                        Caxias do Sul, RS: Editora Even3, 2019, v. 1, p.
                        497-502. E-book. [Link]
                      </ul>
                      <ul>
                        CERON, I. N. ; DRESCH, J. F. . A música na história da
                        Educação Infantil de Lages: uma busca por documentos num
                        recorte temporal de 1885 a 1939. HUMANIDADES INOVAÇÃO,
                        v. 8, p. 85-96, 2021. [Link]{" "}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <br></br>
        </div>
      </div>
    </>
  );
}
