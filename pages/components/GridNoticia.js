import axios from 'axios';


async function getNoticias() {
    const retorno = await axios.get(process.env.BACKEND + 'news')
    console.log(retorno.data)
    if (typeof document != 'undefined') {
        for (let i = 0; i < 3; i++) {
            
            var dataNoticia = new Date(retorno.data[i].created_at);
            document.getElementById("T" + (i + 1)).innerHTML = retorno.data[i].title;
            document.getElementById("D" + (i + 1)).innerHTML = retorno.data[i].description;
            document.getElementById("DT" + (i + 1)).innerHTML = dataNoticia.toLocaleDateString('py-BR', { timeXone: 'UTC' });
            //document.getElementById("I" + (i + 1)).src = "http://172.16.248.88:3333/images/" + 
            document.getElementById("BT" + (i + 1)).href = '/noticia_evento/' + retorno.data[i].id;
        }
    }
}


export default function GridNoticia() {
    getNoticias();
    return (

        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">

            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                    <h4 className="font-semibold text-lg" id="T1">Titulo do card</h4>
                    <a href="/perfil_autor" className="font-thin" id="A1">Autor</a>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/?book" id="I1"></img>
                </div>
                <div className="p-4 bg-slate-200" id="D1">
                    Description
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                    <a href="/noticia_evento" className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute" id="BT1">Saiba mais</a>
                    <p className="text-gray-500 text-end mt-2 text-sm" id="DT1">24/06/2022</p>
                </div>
            </div>
            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                    <h4 className="font-semibold text-lg" id="T2">Titulo do card</h4>
                    <a href="/perfil_autor" className="font-thin" id="A2">Autor</a>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/?car" id="I2"></img>
                </div>
                <div className="p-4 bg-slate-200" id="D2">
                    Description
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                    <a href="/noticia_evento" className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute" id="BT2">Saiba mais</a>
                    <p className="text-gray-500 text-end mt-2 text-sm" id="DT2">24/06/2022</p>
                </div>
            </div>
            <div className="bg-gray-100 p4 rounded-lg shadow-md overflow-hidden">
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
                    <h4 className="font-semibold text-lg" id="T3">Titulo do card</h4>
                    <a href="/perfil_autor" className="font-thin" id="A3">Autor</a>

                </div>
                <div>
                    <img src="https://source.unsplash.com/1920x1080/?city" id="I3"></img>
                </div>
                <div className="p-4 bg-slate-200" id="D3">
                    Description
                </div>
                <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
                    <a href="/noticia_evento" className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute" id="BT3">Saiba mais</a>
                    <p className="text-gray-500 text-end mt-2 text-sm" id="DT3">24/06/2022</p>
                </div>
            </div>



        </div>
    )
}

