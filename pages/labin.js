import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-8 pt-12">
        <div className="texto-basico">
          <h2 className="titulo-principal">LABIN</h2>
          <br></br>
          <h3>Significado;</h3>

          <br></br>
          <h3>Resumo;</h3>

          <br></br>
          <h3>Finalidade;</h3>

          <br></br>
          <h3>Coordenador;</h3>

          <br></br>
          <h3>Contato;</h3>
        </div>
      </div>
    </>
  );
}
