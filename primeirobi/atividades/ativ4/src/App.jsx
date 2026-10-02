import "./App.css"
import Article from "./components/Article";
import Fieldset from "./components/Fieldset";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default function app(){

  const post = {
    titulo: "Como abrir o cárter de um chevette em casa?",
    autor: "EU MESMO",
    data: "01 DE SETEMBRO DE 2026",
    tempoLeitura: "8 MIN DE LEITURA"
  };

  return(
    <>
      <Header/>

      <div className="conteudo">

        <Sidebar/>

        <main>

          <Article
            titulo={post.titulo}
            autor={post.autor}
            data={post.data}
            tempoLeitura={post.tempoLeitura}
          />
          
          <Fieldset/>

          <Footer/>

        </main>

      </div>
    </>
  )
}