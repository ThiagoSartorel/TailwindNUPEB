import {
  SpeakerphoneIcon,
  ShareIcon,
  AtSymbolIcon,
  CheckCircleIcon,
  ArrowNarrowUpIcon,
} from "@heroicons/react/solid";

import HtmlParser  from "react-html-parser";
import axios from "axios";


export default function Home(props) {
  console.log(props.content.labins[0])
  const labins = props.content.labins[0];
  return (
    <>
      <div
        className=" sm:mx-20 md:mx-30 lg:mx-24 min-h-screen mb-16 pt-12"
        id="top"
      >
        <div className="texto-basico">
          <h2 className="titulo-principal">LABIN</h2>

          <a  href="#top">
            <svg className="icon fixed bottom-10 right-1 sm:right-8 w-8 shadow-lg shadow-slate-600 rounded-full">
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
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start pb-2">
                  Resumo
                </h2>
              </div>
              {HtmlParser(labins.description_resume)}
            </div>
            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <SpeakerphoneIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-2 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Finalidade
                </h2>
              </div>
              {HtmlParser(labins.description_finalidade)}
            </div>

            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <CheckCircleIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-2 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Objetivos
                </h2>
              </div>
              {HtmlParser(labins.description_objetivo)}
            </div>

            <div className="text-start p-1 sm:p-2 md:p-4  ">
              <div className="flex flex-row shadow-sm">
                <svg className="icon w-16">
                  <AtSymbolIcon />
                </svg>
                <h2 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  flex pb-2 font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#f7a439] text-start ">
                  Coordenação
                </h2>
              </div>
              {HtmlParser(labins.description_coord)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(){
  const response = await axios.get(process.env.BACKEND + "labin");
  
  return {props: {content: response.data}};
}
