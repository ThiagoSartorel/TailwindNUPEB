import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import GridNoticia from "./components/GridNoticia";

export default function Calendario(props) {
  const [filtro, setFiltro] = useState("");

  function reload() {
    if (typeof document != "undefined") {
      var value = document.getElementById("selectFiltro").value;
      setFiltro(value);
    }
  }

  function getEventos() {
    if (typeof document != "undefined") {
      var eventos = props.eventos
      eventos = eventos.filter(evento => evento.new_category_id == 1);
      var value = document.getElementById("selectFiltro").value;
      if (value != "") {
        eventos = eventos.filter(evento => evento.created_at.substr(0, 7) == value);
      }
      return eventos.map((evento) => (
        <GridNoticia
          id={evento.id}
          title={evento.title}
          author={evento.user_id}
          description={evento.description}
          image={evento.file_id}
          date={evento.created_at}
        />
      ));
    }
  }

  return (
    <div id="contact" className="">
      <div className="mb-20 sm:mb-0 pt-12 mx-4 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28 min-h-screen">
        <p className="titulo-principal">Agenda</p>
        <div className="shadow-md">
          <div className=" bg-card py-4 sm:p-4 xl:px-20 rounded-md">
            <div className="flex flex-col sm:justify-between sm:flex-row">
              <div>
                <input className="mb-4 mt-2 ml-4 mr-4 px-2 py-1 w-auto rounded-xl bg-slate-200 opacity-80" type="month" id="selectFiltro" onChange={reload}></input>
              </div>

              <div className="flex flex-initial ">
                <div className="bg-gray-200 text-white flex justify-between items-center ml-4 mr-4 p-2 rounded-2xl px-4 mb-4">
                  <div>
                    <input
                      type="text"
                      className="bg-transparent border-none text-black focus:outline-none"
                      placeholder="Pesquisar"
                    />
                  </div>
                  <FaSearch className="text-slate-400 hover:text-slate-600 hover:scale-110" />
                </div>
              </div>
            </div>
            <hr className="mb-4"></hr>
            <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-4">

              {getEventos()}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  var eventos = await axios.get(process.env.BACKEND + "news");
  return { props: { eventos: eventos.data } };
}

/* 
                {props.eventos.map((evento) => {
                  if(evento.new_category_id == 4){
                    console.log(filtro)
                    return <GridNoticia title={evento.title} description={evento.description} image={evento.file_id} date={evento.created_at} author={evento.user_id} />;
                  }
                })}*/


/*
        return (
          eventos.map((evento) => {
            if (evento.new_category_id == 1) {
              var eventData = evento.created_at.substr(0,7);

              if(eventData == value){
                console.log("acertou")
              }

              return (
                <GridNoticia
                  id={evento.id}
                  title={evento.title}
                  description={evento.description}
                  author={evento.user_id}
                  date={evento.created_at}
                  image={evento.file_id}
                />
              )
            }
          })
        );
*/