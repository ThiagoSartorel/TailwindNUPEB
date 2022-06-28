import Noticias from "../../bd/Noticias";


export default function GridNoticia() {
    return (
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 py-8 gap-4">
            
            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                    <h4 className="font-bold">Titulo do card</h4>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/?book" className=""></img>
                </div>
                <div className="p-4 bg-slate-200">
                    Conteudo
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                    <button className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute">Saiba mais</button>
                    <p className="text-gray-500 text-end mt-2 text-sm">24/06/2022</p>
                </div>
            </div>

            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                    <h4 className="font-bold">Titulo do card</h4>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/" className=""></img>
                </div>
                <div className="p-4 bg-slate-200">
                    Conteudo
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-200 pb-3">
                    <button className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute">Saiba mais</button>
                    <p className="text-gray-500 text-end mt-2 text-sm">24/06/2022</p>
                </div>
            </div>

            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-00">
                    <h4 className="font-bold">Titulo do card</h4>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/?study" className=""></img>
                </div>
                <div className="p-4 bg-slate-200">
                    Conteudo
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                    <button className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute">Saiba mais</button>
                    <p className="text-gray-500 text-end mt-2 text-sm">24/06/2022</p>
                </div>
            </div>
        </div>
    )
}