import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-8 pt-12">
        <div className="textoBasico">
          <h2 className="titulo-principal">Indicações</h2>
          <br></br>
          <h3>Filmes;</h3>

          <br></br>
          <h3>Livros;</h3>

          <br></br>
          <h3>Materiais didáticos;</h3>
        </div>
      </div>
    </>
  );
}
