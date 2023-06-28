//Librairies
import React,{ useState,useEffect } from 'react';
//import feuille de style
import './App.css';
//Composants
import Eleve from '../Components/Eleves/Eleve';

function App() {
  //states
  const [eleves, setEleves]=useState(
    [{
      nom: 'Eva Dupont',
      moyenne: 15,
      citation: "Aller toujours plus loin"
    },
    {
      nom: 'Elon Musk',
      moyenne: 5,
      citation: "le feu ça brule et l'eau ça mouille"
    }]
  );

  const [transformation,setTransformation]=useState(false);
  const [afficherEleve,setAfficherEleve]=useState(true);
  //UseEffects
  useEffect(() => {
    console.log('[App.js] UseEffect');

    return () => {
      console.log('[App.js] UseEffect(didUnmount)');
    }
  }, []);

  useEffect(() => {
    console.log('[App.js] UseEffect(didUpdate)');
  })

  //Méthodes
  const buttonClickedHandler = nouveauNom => {
    //on reprend le state d'avant et on le met dans la const nouveauState
    const nouveauxEleves = [...eleves];
    //on dit ici que le prénom de la première personne sera "Steve Jobs"
    nouveauxEleves[0].nom = nouveauNom
    //on envoie ça dans le nouveau state
    setEleves(nouveauxEleves)
  }
  //jsx
  return (
    <div className="App">
      <h1>Welcome dans la classe Terre</h1>
      <div>
        <button onClick={buttonClickedHandler.bind(this, "Steve Jobs")}>Transformer le premier élève</button>
      </div>
      <Eleve
        nom={eleves[0].nom}
        moyenne={eleves[0].moyenne}
        clic={() => buttonClickedHandler('Julie Martin')}>
        citation={eleves[0].citation}
      </Eleve>
      <Eleve
        nom={eleves[1].nom}
        moyenne={eleves[1].moyenne}
        clic={() => buttonClickedHandler('Thomas Dutronc')}>
        citation={eleves[1].citation}
      </Eleve>
    </div>
  )
  }

export default App;
