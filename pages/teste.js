import React, { useState, useEffect } from "react";
import Editor from "./Components/CKE";
import ReactHtmlParser from 'react-html-parser';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm()

//http://172.16.248.88:3333/news

  async function mensagem(body){
    console.log(body.title)
    //console.log(data)
    var retorno = await axios.post("http://172.16.248.88:3333/news", {
      'title': body.title,
      'description': data
    })
    console.log(retorno)
  }

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  //Ler noticias
  const lerNoticias = () => {
    console.log("Lendo")
  }

  return (
    <div className="pt-20 min-h-screen">
      <h1>ckEditor 5</h1>

      <form onSubmit={handleSubmit(mensagem)}>
        <label>titulo</label>
        <input type="text" {...register("title")}></input>

        <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />

        <button type="submit" className="w-full bg-orange-300 mt-2">Enviar</button>
      </form>
      <div className="text-center">
        <button className="bg-green-600 px-2 py-1 rounded-md mt-8" onClick={(event) => lerNoticias()}>Ler noticias</button>
      </div>
    </div>
  );
}
