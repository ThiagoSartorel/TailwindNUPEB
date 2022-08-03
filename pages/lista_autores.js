import axios from "axios";
import AuthorCard from "./components/AuthorCard";
import HtmlParser from 'react-html-parser';

export default function Perfil(props) {
  return (
    <div className="mx-6 min-h-screen pt-12 mb-20 lg:mb-0 ">
      <div className="textoBasico">
        <h2 className="titulo-principal">Lista de Autores</h2>
      </div>
      <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">

        {props.authors.map((author) => (
          <div key={author.id}>
            <AuthorCard id={"profiles/" + author.id} name={author.name} image={author.photo_id} bio={author.bio.length > 80 ? HtmlParser(author.bio.substr(0, 80) + "...") : HtmlParser(author.bio.substr(0, 80))} whatsapp="" facebook="" twitter="" email="" instagram="" github="" youtube="" telephone="" linkedin="" website="" />
          </div>
        ))}
      
      </div>
      <div className="btn-submit w-full md:w-72 mx-auto">
        <a href="/contact" >Quero participar do blog do NuPEB</a>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const retorno = await axios.get(process.env.BACKEND + "authors/all");

  return { props: { authors: retorno.data } };
}
