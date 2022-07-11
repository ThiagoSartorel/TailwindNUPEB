import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";
import Nav from "./components/Nav";
import List from "./components/List";
import ListItem from "./components/ListItem";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen pt-12">
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
        </div>

        <div className="divide-y divide-slate-100">
          <List>
            <ListItem key={"movie.id"} movie={"movie"} />
          </List>
          <List>
            <ListItem key={"movie.id"} movie={"movie"} />
          </List>
          <List>
            <ListItem key={"movie.id"} movie={"movie"} />
          </List>
        </div>
      </div>
    </>
  );
}

//Filmes
//Livros
//Materiais didáticos
