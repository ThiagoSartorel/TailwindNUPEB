import List from "./components/List";
import ListItem from "./components/ListItem";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen pt-12 mb-10 sm:mb-6 lg:mb-0">
        <div className="textoBasico">
          <h2 className="titulo-principal">Indicações</h2>
        </div>


        <div className=" text-white justify-between items-center max-w-[400px] m-auto rounded-2xl">
          <div className="flex flex-initial ">
            <div className=" text-white flex items-center w-full m-auto p-2 rounded-2xl px-4 mx-20 mb-4 bg-slate-100">
              <div>
                <input
                  type="text"
                  className="bg-transparent border-none text-black focus:outline-none"
                  placeholder="Pesquisar"
                />
              </div>
              <FaSearch className=" text-slate-500 hover:text-slate-600 hover:scale-110" />
            </div>
          </div>
        </div>

        
        <div className="container mx-auto flex flex-row-reverse mb-8 gap-4">
          <FaFilter className="my-2 mr-4" />
          <select className="rounded-lg px-2 py-1 bg-slate-100">
            <option disabled defaultChecked>
              Filtro
            </option>
            <option>Filmes</option>
            <option>Livros</option>
            <option>Materiais didáticos</option>
          </select>
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
