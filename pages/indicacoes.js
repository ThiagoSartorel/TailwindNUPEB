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
          <div className="hidden md:flex grow-[2] items-center justify-center">
            <div className="bg-gray-300 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
              <div>
                <input
                  type="text"
                  className="bg-transparent border-none text-white focus:outline-none"
                  placeholder="Pesquisar"
                />
              </div>
            </div>
          </div>
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
