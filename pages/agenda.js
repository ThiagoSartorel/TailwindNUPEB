import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export default function Calendario() {
  return (
    <div id="contact" className="">
      <div className="mb-20 pt-12 mx-4 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28 min-h-screen">
        <p className="titulo-principal">Agenda</p>
        <div className="shadow-md">
          <div className=" rounded-lg px-2 py-8 md:py-8 md:px-16 dark:bg-gray-700 bg-gray-100 rounded-b w-full">
            <div className="flex flex-col sm:justify-between sm:flex-row">
              <div>
                <input className="mb-4 px-2 py-1 w-auto" type="month"></input>
              </div>

              <div className="flex flex-initial ">
                <div className="bg-gray-200 text-white flex justify-between items-center w-full m-auto p-2 rounded-2xl px-4 mx-6 mb-4">
                  <div>
                    <input
                      type="text"
                      className="bg-transparent border-none text-white focus:outline-none"
                      placeholder="Pesquisar"
                    />
                  </div>
                  <FaSearch className=" text-slate-400 hover:text-slate-600 hover:scale-110" />
                </div>
              </div>
            </div>
            <hr className="mb-4"></hr>
            <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-4">
              <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                  <h4 className="font-semibold text-lg">Titulo do evento</h4>
                  <a href="/perfil_autor" className="font-thin">
                    Autor
                  </a>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/1920x1080/?book"
                    className=""
                  ></img>
                </div>
                <div className="p-4 bg-slate-200">Conteudo</div>
                <div className=" bg-gray-100 p-2 border-b border-gray-100 pb-3">
                  <a
                    href="/noticia_evento"
                    className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute"
                  >
                    Saiba mais
                  </a>
                  <p className="text-gray-500 text-end mt-2 text-sm">
                    24/06/2022
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className=" bg-gray-100 p-2 border-b border-gray-100">
                  <h4 className="font-semibold text-lg">Titulo do evento</h4>
                  <a href="/perfil_autor" className="font-thin">
                    Autor
                  </a>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/1920x1080/?book"
                    className=""
                  ></img>
                </div>
                <div className="p-4 bg-slate-200">Conteudo</div>
                <div className=" bg-gray-100 p-2 border-b border-gray-100 pb-3">
                  <a
                    href="/noticia_evento"
                    className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute"
                  >
                    Saiba mais
                  </a>
                  <p className="text-gray-500 text-end mt-2 text-sm">
                    24/06/2022
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className=" bg-gray-100 p-2 border-b border-gray-00">
                  <h4 className="font-semibold text-lg">Titulo do evento</h4>
                  <a href="/perfil_autor" className="font-thin">
                    Autor
                  </a>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/1920x1080/?study"
                    className=""
                  ></img>
                </div>
                <div className="p-4 bg-slate-200">Conteudo</div>
                <div className=" bg-gray-100 p-2 border-b border-gray-100 pb-3">
                  <a
                    href="/noticia_evento"
                    className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute"
                  >
                    Saiba mais
                  </a>
                  <p className="text-gray-500 text-end mt-2 text-sm">
                    24/06/2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
