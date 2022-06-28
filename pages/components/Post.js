import Noticias from "../../bd/Noticias";


export default function Post() {
    return (
        <div className="container mx-auto grid px-4 py-8">
            
            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                    <h4 className="font-semibold text-center text-2xl">Titulo do card</h4>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/?book" className=""></img>
                </div>
                <div className="p-4 bg-slate-200">
                    Conteudo
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                    <span className="text-gray-500 absolute text-sm">by fulano</span>
                    <p className="text-gray-500 text-end text-sm">24/06/2022</p>
                </div>
            </div>
        </div>
    )
}