import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useStoreActions,useStoreState } from "easy-peasy";


/*Página inicial da pesquisa, onde o usuário irá colocar o seu nome e responder uma pergunta aberta utilizando um textarea. Nesta
página você irá salvar num state utilizando context api ou easy-peasy o nome e essa primeira resposta do usuário e terá um botão que 
levará ele para a próxima página.*/


const Page1 = () => {

  const exercicioStore = useStoreState (State => State) 
  const [nome,setNome]= useState(exercicioStore.nome)
  const [exercicio,setexercicio]= useState(exercicioStore.atividadefisica)
  const salvarExercico = useStoreActions (State => State.salvar)

  function salvar (){
    exercicioStore.nome = nome
    exercicioStore.atividadefisica=exercicio
    salvarExercico(exercicioStore)

  }
  return (
  <div>

    <h1> Pequisa de atividades físicas</h1>

    <h2> Qual é seu nome ?</h2>
     
     <input type = "text" value = {nome} onChange = {evt=>setNome(evt.target.value)}/> 
     <br>
     </br>
     <br>
     </br>
     <h3> Você realiza atividades físicas ? se sim quais ? se não porque ? </h3>
     <br>
     </br>
     <textarea type = "text" value = {exercicio} onChange = {evt=>setexercicio(evt.target.value)} />
     <br>
     </br>
     <br>
     </br>

     <Link to='/page2'><button onClick={salvar}>Próximo</button></Link>
     

      </div>
  );


}
export default Page1;