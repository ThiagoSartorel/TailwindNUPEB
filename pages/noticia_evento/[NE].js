import axios from 'axios'
import HtmlParser from 'react-html-parser';

export default function Home(props) {
  const img = 'http://172.16.248.88:3333/images/1'
  if (typeof document != 'undefined') {
    document.getElementById("imagem").style = "background-image: url('http://172.16.248.88:3333/images/3')";
  
  }
  
  return (
    <>

      <div className="mx-5 sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-16 pt-12">
        <h1 className="titulo-principal">{props.ne.title}</h1>
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
        <p>{HtmlParser(props.ne.content)}</p>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API

  //console.log(context.params.NE)
  var codNoticia = context.params.NE;

  var imagem = await axios.get('http://172.16.248.88:3333/images/2')


  console.log(imagem)

  const retorno = await axios.get('http://172.16.248.88:3333/news/' + codNoticia);
  //console.log(retorno.data)
  var ne = retorno.data;

  var dataNoticia = new Date(retorno.data.created_at);

  var day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][dataNoticia.getDay()];
  var date = dataNoticia.getDate();
  var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][dataNoticia.getMonth()];
  var year = dataNoticia.getFullYear();

  var dataNoticia = day + ", " + date + " de " + month + " de " + year
  //console.log(dataNoticia);

  // Pass data to the page via props
  return { props: { ne, dataNoticia } }
}
