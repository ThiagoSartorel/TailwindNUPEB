import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-8 pt-12">
        <div className="titulo-principal">
          <h1>Informe-se</h1>
        </div>
        <div className="textoBasico">
          <br></br>
          <h3>Quem somos;</h3>

          <br></br>
          <h3>Objetivo;</h3>

          <br></br>
          <h3>Pesquisas;</h3>

          <br></br>
          <h3>Projetos;</h3>

          <br></br>
          <h3>Produçoes;</h3>
        </div>
      </div>
      <div className="titulo-principal">
        <h1>Últimas notícias</h1>
      </div>
    </>
  );
}
