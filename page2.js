import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useStoreActions,useStoreState } from "easy-peasy";


/*Na segunda página o usuário deverá responder uma pergunta utilizando um botão de rádio, que abrirá uma segunda pergunta nesta mesma página.
 Esta segunda pergunta deverá ser diferente, pois depende da primeira escolha do usuário. E terá dois botões, um para ir para a página anterior e
  outro para ir para a próxima página. As respostas do usuário também devem ser salvas num state utilizando context api ou easy-peasy. Se ele for para a 
página anterior, a resposta dele já deve aparecer e ele pode alterar a sua resposta e ir para a próxima página que já terá também a resposta dele já preenchida.*/



const Page2 = ()=> {


  const exercicioStore = useStoreState (State => State) 
  const [resposta,setResposta]= useState(exercicioStore.resposta)
  const [resposta2,setResposta2]= useState(exercicioStore.resposta2)
  const [opcoes,setOpcoes]= useState(exercicioStore.opcoes)
  const salvarExercico = useStoreActions (State => State.salvar)

  function salvar (){
    exercicioStore.resposta = resposta
    exercicioStore.resposta2 = resposta2
    exercicioStore.opcoes=opcoes
    salvarExercico(exercicioStore)
  
  }
return (
  
<div>

  <h1> Você realiza essas atividades com frequência ?</h1>

<input type = "radio" value = {resposta} onChange = {evt=>setResposta(evt.target.value)}/> sim 
<input type = "radio" value = {resposta2} onChange = {evt=>setResposta2(evt.target.value)}/>não 
<br>
</br>
<br>
</br>
<br>
</br>
  
  <h2> Como você se sente ? </h2>

<textarea type = "text" value = {opcoes} onChange = {evt=>setOpcoes(evt.target.value)} /> 
<br>
</br>
<br>
</br>
<Link to='/'><button onClick={salvar}>Voltar</button></Link>
<Link to='/page3'><button onClick={salvar}>Continuar</button></Link>


</div>
);

}
export default Page2;