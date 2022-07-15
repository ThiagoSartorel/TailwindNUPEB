import axios from 'axios'
import HtmlParser from 'react-html-parser';

export default function Home(props) {
  //console.log(props)
  const img = "background-image: url(" + process.env.BACKEND + "showFile/" + props.ne[0].file_id + ")"
  if (typeof document != 'undefined') {
    document.getElementById("imagem").style = img;
  }

  return (
    <>

      <div className="mx-5 sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-16 pt-12">
        <h1 className="titulo-principal">{props.ne[0].title}</h1>
        <div className="w-full py-2 px-4 flex flex-col">
          <div className="w-full">
            <span className="text-gray-500 mb-6">Publicado em <span className="text-blue-800">{props.dataNoticia}</span> por <span className="text-blue-800">Fulano</span></span>
          </div>
          <div className="w-full space-x-4 flex flex-row-reverse">
            <span className="bg-gray-600 text-white rounded-md text-sm px-2 py-1 ml-4">Categoria</span>
            <span className="bg-gray-400 text-white rounded-md text-sm px-2 py-1">Subcategoria</span>
            <span className="bg-gray-400 text-white rounded-md text-sm px-2 py-1">Subcategoria</span>
          </div>
        </div>
        <div id="imagem" className="lg:w-full lg:h-[650px] imagem-principal" />
        <p className="text-md text-gray-500">{HtmlParser(props.ne[0].description)}</p>
        <p>{HtmlParser(props.ne[0].content)}</p>
      </div>
    </>
  );
}

// This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API

  //console.log(context.params.NE)
  var codNoticia = context.params.NE;

  const retorno = await axios.get(process.env.BACKEND + 'news/' + codNoticia);
  var ne = retorno.data;

  var dataNoticia = new Date(retorno.data[0].created_at);

  var day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][dataNoticia.getDay()];
  var date = dataNoticia.getDate();
  var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][dataNoticia.getMonth()];
  var year = dataNoticia.getFullYear();

  var dataNoticia = day + ", " + date + " de " + month + " de " + year
  //console.log(dataNoticia);

  // Pass data to the page via props
  return { props: { ne, dataNoticia } }
}

export async function getStaticPaths(context) {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.BACKEND + 'news')
  const posts = await res.json()
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((news) => ({
    params: { NE: (news.id.toString()) },
  }));
  return { paths, fallback: true }
}
