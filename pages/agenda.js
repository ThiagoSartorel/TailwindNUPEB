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
          id_author={evento.author_id}
          author={evento.author.name}
          description={evento.description}
          image={evento.file_id}
          date={evento.created_at}
        />
      ));
    }
  }

  return (
    <div id="contact">
      <div className="mb-20 pt-12 mx-4 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-28 min-h-screen">
        <p className="titulo-principal">Agenda</p>
        <div className="shadow-lg pt-2">
          <div className="bg-gray-300 bg-opacity-30 py-4 sm:p-4 xl:px-20 rounded-lg">
            <div className="flex flex-col sm:justify-between sm:flex-row">
              <div>
                <input className="mb-4 mt-2 ml-4 mr-4 px-2 py-1 w-auto rounded-xl bg-slate-100 opacity-80" type="month" id="selectFiltro" onChange={reload}></input>
              </div>
              <div className="flex flex-initial ">
              </div>
            </div>
            <hr className="mb-4"></hr>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-4">
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
  return { props: { eventos: eventos.data.news } };
}
