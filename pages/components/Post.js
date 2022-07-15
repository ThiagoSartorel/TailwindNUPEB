import Noticias from "../../bd/Noticias";

export default function Post() {
  return (
    <div className="container mx-auto px-2 grid grid-cols-2 gap-6">
      <a href="/noticia_evento">
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
            <h4 className="font-semibold text-center pt-2 text-base sm:text-lg md:text-2xl">
              Titulo
            </h4>
            <p className="text-gray-500 text-end text-sm">24/06/2022</p>
          </div>
          <div>
            <img className="banner w-full h-80 sm:h-96 lg:h-64"></img>
          </div>
          <div className="p-4 bg-slate-200">Conteudo</div>
          <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
            <span className="text-gray-500 text-sm text-left">by fulano</span>
            <p className="text-gray-500 text-left text-sm">Categoria</p>
          </div>
        </div>
      </a>
    </div>
  );
}
