export default function Fieldset(){
    return(
        <>
            <hr className="hr_final"/>
            <h2 className="h2_inscreva">Gostou do conteúdo? Inscreva-se!</h2>
            
            <fieldset>

                <legend>NEWSLETTER</legend>

                <form>

                    <div className="div_campo">
                        <label for="nome">Informe seu Nome</label>
                        
                        <input type="text" id="nome" name="nome" 
                            title="Informe o seu nome completo"
                            pattern="[A-Za-z ]+"
                            placeholder="Nome" required/>
                    </div>

                    <div className="div_campo">
                        <label for="email">Informe seu E-mail</label>
                        
                        <input type="email" id="email" name="email" 
                            placeholder="E-mail" required/>
                    </div>

                    <div className="div_campo">
                        <label for="senha">Informe sua Senha</label>
                        
                        <input type="password" id="senha" minlength="6"
                            name="senha" placeholder="Senha" required/>
                    </div>
                    
                    <input className="input_botao" type="submit" value="Enviar"/>
                </form>
            </fieldset>
        </>
    )
}