import classes from './App.module.css';
import React,{ useState, useEffect } from 'react';
import styledComponent from 'styled-components';

//import eleve.js
import Eleve from '../Components/Eleves/Eleve';

const MonBoutonSylise=styledComponent.button
  //code css
  `padding : 10px 30px;
  background-color:${props=>props.transformed?'green':'black'};
  color:white;
  cursor:pointer;
  &:hover{
    background-color:${props=>props.transformed ? 'lightgreen':'white'};
    color:${props=>props.transformed?'white':'black'};
  }
  `;

function App(){

  const [eleves,setEleves]=useState(
    [{
      id:1,
      nom:'Eva Dupont',
      moyenne:5,
      citation:"Aller toujours plus loin"
    },
    {
      id:2,
      nom:'Elon Musk',
      moyenne:0,
      citation:"le feu ça brule et l'eau ça mouille"
    }]
  );

  const [transformation,setTransformation]=useState(false);

  const [afficherEleve,setAfficherEleve]=useState(true);

  useEffect(()=>{
    console.log('[App.js] UseEffect');

    return()=>{
      console.log('[App.js] UseEffect(didUnmount)');
    }
  },[]);

  useEffect(()=>{
    console.log('[App.js] UseEffect(didUpdate)');
  })

  const buttonClickedHandler= nouveauNom =>{
    //on reprend le state d'avant et on le met dans la const nouveauState
    const nouveauxEleves = [...eleves];
    //on dit ici que le prénom de la première personne sera "Steve Jobs"
    nouveauxEleves[0].nom=nouveauNom
    //on envoie ça dans le nouveau state
    setEleves(nouveauxEleves);
    //on change l'état du button à true
    setTransformation(true);
    }

    //méthode pour afficher et masquer les élèves
  const showHideHandler=()=>{
    //permet de passer en true et en false => comme un toggle
    setAfficherEleve(!afficherEleve)
  }

  //méthode pour supprimer un élève
  const removeClickHandler= index =>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves.splice(index,1);
    setEleves(nouveauxEleves);
  }

  const h1Style={
    color:'green',
    backgroundColor:'lightgreen'
  }

  let cartes =eleves.map((eleve,index)=>(
    <Eleve
      key={index}
      nom={eleve.nom}
      moyenne={eleve.moyenne}
      clic={() => buttonClickedHandler('Thomas Dutronc')}
      supprimer={()=>removeClickHandler(index)}
      >
      {eleve.citation}
    </Eleve>
    )
  );

    return(
      <div className={classes.App}>
        <h1 style={h1Style}>Bienvenue dans la classe Terre</h1>

        <div>
           <MonBoutonSylise transformed={transformation} onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier élève</MonBoutonSylise>
        </div>
        <div>
          <MonBoutonSylise onClick={showHideHandler}>Afficher/Masquer</MonBoutonSylise>
        </div>

        {afficherEleve ?
          <div>
            {cartes}
          </div>
          :null
        }
        
      </div>
  )
}



export default App;