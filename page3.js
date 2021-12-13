import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useStoreActions,useStoreState } from "easy-peasy";

/* Nesta terceira página o usuário irá responder sua última pergunta utilizando uma caixa de seleção, que também será salva num state utilizando context 
api ou easy-peasy. E terá dois botões, uma para ir para a página anterior e outro para encerrar
 a pesquisa que levará para a página de resultado. No caso dele ir para a página anterior, deve seguir o mesmo comportamento já informado na página 2.*/

const Page3 = ()=> {

  const exercicioStore = useStoreState (State => State) 
  const [satisfacao,setSatisfacao]= useState(exercicioStore.satisfacao)
  const salvarExercico = useStoreActions (State => State.salvar)

  function salvar (){
    exercicioStore.satisfacao = satisfacao
    salvarExercico(exercicioStore)
  


  }

return (



  <div>
  

<h1> Gostou da pesquisa ? </h1>








<br>
</br>
<Link to='/page2'><button onClick={salvar}>Voltar</button></Link>
<Link to='/page4'><button onClick={salvar}>Ecerrar</button></Link>
      
</div>

);

}
export default Page3;
    