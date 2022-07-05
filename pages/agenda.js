import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Calendario() {
  return (
    <div id="contact" className="w-full min-h-screen ">
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-8 pt-12">
        <p className="titulo-principal">Agenda</p>
        <div className="shadow-lg">
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-100 rounded-b w-full rounded-lg">
            <div className="flex flex-row">
              <div className="flex-none mt-1">
                <label className="px-4 pr-4">Buscar</label>
              </div>
              <div>
                <input className="mb-4 px-2 py-1 w-auto" type="month"></input>
              </div>
              <div className="w-full flex flex-row-reverse">
                <FaSearch className="my-2 mx-4 hover:text-[#f7a439] hover:scale-110" />
              </div>
            </div>
            <hr className="mb-4"></hr>
            <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
              <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                  <h4 className="font-semibold text-lg">Titulo do evento</h4>
                  <a href="/perfil_autor" className="font-thin">Autor</a>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/1920x1080/?book"
                    className=""
                  ></img>
                </div>
                <div className="p-4 bg-slate-200">Conteudo</div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                  <a
                    href="/noticia_evento"
                    className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute">
                    Saiba mais
                  </a>
                  <p className="text-gray-500 text-end mt-2 text-sm">
                    24/06/2022
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                  <h4 className="font-semibold text-lg">Titulo do evento</h4>
                  <a href="/perfil_autor" className="font-thin">Autor</a>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/1920x1080/?book"
                    className=""
                  ></img>
                </div>
                <div className="p-4 bg-slate-200">Conteudo</div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                  <a
                    href="/noticia_evento"
                    className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute">
                    Saiba mais
                  </a>
                  <p className="text-gray-500 text-end mt-2 text-sm">
                    24/06/2022
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-00">
                  <h4 className="font-semibold text-lg">Titulo do evento</h4>
                  <a href="/perfil_autor" className="font-thin">Autor</a>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/1920x1080/?study"
                    className=""
                  ></img>
                </div>
                <div className="p-4 bg-slate-200">Conteudo</div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                  <a
                    href="/noticia_evento"
                    className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute">
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
