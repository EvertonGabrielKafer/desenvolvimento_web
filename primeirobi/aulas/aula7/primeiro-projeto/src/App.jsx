import "./App.css"
import Header from "./components/Header";

export default function app(){
  const qtdPosts = 16;
  const possuiAssinatura = false;

  return(
    <main id="container">
      <Header habilitado={true} quantidadePosts={16}/>
      <section>
        <h1>Ultimas pastagens</h1>
        <article>
          <h1>Fremengo x Cintia</h1>
          <p>Quantidade de posts: {qtdPosts}</p>
        </article>
        <article>
          <h1>Tacafogo x curnatia</h1>
          <p>çkamdal alskd n sildh aoisdh oa hdoi a ihhkhjiuh</p>
        </article>
        <article>
          <h1>Vaca da grama x Gira dol</h1>
          <p>msak akisx aokscjnl, calksj ok</p>
        </article>
        <article>
          <h1>Fremengo x Cintia</h1>
          <p>Akmdlkad ks asf fn alsjf aksn lk</p>
        </article>
        <article>
          <h1>Tacafogo x curnatia</h1>
          <p>çkamdal alskd n sildh ihhkhjiuh</p>
        </article>
        <article>
          <h1>Vaca da grama x Gira dol</h1>
          <p>msak akisx aokscjnl, calksj ok</p>
        </article>
        <article>
          <h1>Fremengo x Cintia</h1>
          <p>Akmdlkad ks asf fn alsjf aksn lk</p>
        </article>
        <article>
          <h1>Tacafogo x curnatia</h1>
          <p>çkamdal alskd n sildh ihhkhjiuh</p>
        </article>
        <article>
          <h1>Vaca da grama x Gira dol</h1>
          <p>msak akisx aokscjnl, calksj ok</p>
        </article>
      </section>

    </main>

    
  )
}