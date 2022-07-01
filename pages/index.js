import GridNoticia from "./components/GridNoticia";
import DropDown from "./components/DropDown";
import Slider from "./components/Slide";
import Post from "./components/Post";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <Slider />
      </div>

      <div className="sm:mx-20 md:mx-30 lg:mx-48 min-h-screen mb-24">
      <div className="texto-basico">
            <h2 className="titulo-principal">Sobre nós</h2>
            <br></br>
            <h3>Grupos de Estudos</h3>
            <ul>Objetivo:</ul>
            <ul>Como participar:</ul>
            <ul>Link Calendário:</ul>
            <br></br>
            <h3>Mestrado</h3>
            <ul>Objetivo:</ul>
            <ul>Link Inscrições:</ul>
            <br></br>
            <h3>Artigos</h3>
            <ul>Objetivo:</ul>
            <ul>Link repositório:</ul>
          </div>
        <div className="titulo-principal">
          <h1>Últimas notícias</h1>
        </div>
        <GridNoticia/>
      </div>
    </>
  );
}
