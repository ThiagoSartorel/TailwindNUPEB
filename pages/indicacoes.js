import ListItem from "./components/ListItem";
import { FaFilter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home(props) {
  const { register, handleSubmit } = useForm();
  const [filtro, setFiltro] = useState("0");

  function reload() {
    if (typeof document != "undefined") {
      var value = document.getElementById("select").value;
      setFiltro(value);
    }
  }
  
  function GetRecommendation() {
    useEffect(() => {
      if (typeof document != "undefined") {
        var valueSelect = document.getElementById("select").value;
        setFiltro(valueSelect);
      }
    });
      var indi = props.indications

      if (filtro != "0") {
        indi = indi.filter(indi => indi.recommendation_category_id == filtro)
      }
      return indi.map((ind) => (
        <ListItem key={ind.id} image={ind.file_id} title={ind.title} description={ind.description} annuance={ind.announcement} category={ind.recommendationCategory.name} genre={ind.genre}/>
      ));
    
  }

  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen pt-12 mb-16">
        <div className="textoBasico">
          <h2 className="titulo-principal">Indicações</h2>
        </div>
        <div className="container mx-auto flex flex-row mb-8 ml-6">
          <FaFilter className="my-2 mr-4" />
          <select className="rounded-lg px-2 py-1 bg-slate-100" onChange={(e) => reload()} id="select">
            <option defaultValue value="0">Todos</option>
            <option value="1">Filmes</option>
            <option value="2">Livros</option>
            <option value="3">Materiais didáticos</option>
          </select>
        </div>

        <div className="divide-y divide-slate-100">
          <article>{GetRecommendation()}</article>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(){
  const indications = await axios.get(process.env.BACKEND + "recommendations");
  return { props: { indications: indications.data } };
}
