import { FaFilter } from 'react-icons/fa';
import axios from 'axios';

function Post(props) {
  var conteudo  = props.content;
  conteudo = (conteudo.length > 85) ? conteudo.slice(0, 85) + "..." : conteudo //encurtador de descrição
  
  return (
    <a href={"/noticia_evento/" + props.id}>
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="w-full bg-gray-100 p-2 border-b border-gray-100">
          <h4 className="font-semibold text-center pt-2 text-base sm:text-lg md:text-2xl">
            {props.title}
          </h4>
          <p className="text-gray-500 text-end text-sm">{props.date}</p>

        </div>
        <div>
          <img
            src={props.image}
          ></img>
        </div>
        <div className="p-4 bg-slate-200 h-auto sm:h-24 md:h-20 lg:h-16">{conteudo}</div>
        <div className="w-full bg-gray-100 p-2 border-b border-gray-100 pb-3">
          <span className="text-gray-500 text-sm text-left">by {props.author}</span>
          <p className="text-gray-500 text-left text-sm">{props.category}</p>
        </div>
      </div>
    </a>
  );
}


export default function Noticias(props) {
  return (
    <div className="min-h-screen pt-14 mb-16 drop-shadow-xl">
      <div className="text-[3rem] text-center text-white font-bold">
        <div className="absolute tracking-widest items-center w-full text-md sm:pt-10 sm:text-6xl md:pt-20 md:text-8xl xl:pt-40 xl:text-8xl">
          <h1 className="text-center">B L O G</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f7a439"
            fill-opacity="1"
            d="M0,160L26.7,160C53.3,160,107,160,160,149.3C213.3,139,267,117,320,133.3C373.3,149,427,203,480,202.7C533.3,203,587,149,640,144C693.3,139,747,181,800,186.7C853.3,192,907,160,960,128C1013.3,96,1067,64,1120,74.7C1173.3,85,1227,139,1280,149.3C1333.3,160,1387,128,1413,112L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div>
        <div className="container mx-auto flex flex-row-reverse mb-8 gap-4 pr-4">
          <FaFilter className="my-2" />
          <select className="rounded-md px-2 py-1">
            <option disabled defaultChecked>Filtro</option>
            <option>Noticias</option>
            <option>Eventos</option>
          </select>

        </div>
        <div className="container mx-auto grid px-2 grid-cols-1 sm:grid-cols-2 gap-6">

          {props.noticias.map((noticia) =>{
            var data = noticia.created_at
            data = new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
            return <Post id={noticia.id} title={noticia.title} content={noticia.description} author="AutorPost" category="CategoriaPost" date={data} image="https://source.unsplash.com/1920x1080/?car" />
          })}

        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  var noticias = await axios.get('http://172.16.248.88:3333/news/')

  noticias = noticias.data

  return {
    props: { noticias }, // will be passed to the page component as props
  }
}

