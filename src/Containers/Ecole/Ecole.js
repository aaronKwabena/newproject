import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Eleve from '../../Components/Eleves/Eleve';
import MonFragment from '../../HOC/MonFragment/MonFragment';
import Search from '../../Components/Search/Search';
import ThemeContextProvider from '../../Context/theme-context';

import styledComponent from 'styled-components';
import classes from './Ecole.css';

const MonBoutonStylise = styledComponent.button`
  padding: 10px 30px;
  background-color: ${props => (props.transformed ? 'green' : 'black')};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.transformed ? 'lightgreen' : 'white')};
    color: ${props => (props.transformed ? 'white' : 'black')};
  }
`;

function Ecole() {
  const [eleves, setEleves] = useState([]);
  const [transformation, setTransformation] = useState(false);
  const [afficherEleve, setAfficherEleve] = useState(true);
  const elementInput = useRef(null);

  useEffect(() => {
    axios
      .get('https://localhost:8000/api/eleves')
      .then(response => {
        setEleves(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const buttonClickedHandler = (nouveauNom, index) => {
    const nouveauxEleves = [...eleves];
    nouveauxEleves[index].nom = nouveauNom;
    setEleves(nouveauxEleves);
    setTransformation(true);
    elementInput.current.focus();
  };

  const showHideHandler = () => {
    setAfficherEleve(!afficherEleve);
  };

  const removeClickHandler = index => {
    const nouveauxEleves = [...eleves];
    nouveauxEleves.splice(index, 1);
    setEleves(nouveauxEleves);
  };

  const nameChangedHandler = (event, index) => {
    const nouveauxEleves = [...eleves];
    nouveauxEleves[index].nom = event.target.value;
    setEleves(nouveauxEleves);
  };

  const h1Style = {
    color: 'green',
    backgroundColor: 'lightgreen'
  };

  let cartes = eleves.map((eleve, index) => {
    let maVariableRef = null;
    if (index === 0) {
      maVariableRef = elementInput;
    }

    return (
      <Eleve
        key={index}
        nom={eleve.nom}
        moyenne={eleve.moyenne}
        clic={() => buttonClickedHandler('Thomas Dutronc', index)}
        supprimer={() => removeClickHandler(index)}
        changerNom={e => nameChangedHandler(e, index)}
        maRef={maVariableRef}
      >
        {eleve.citation}
      </Eleve>
    );
  });

  return (
    <ThemeContextProvider>
      <div className={classes.App}>
        <div>
          <h1 style={h1Style}>Bienvenue dans la classe Terre</h1>
        </div>
        <div>
          <MonBoutonStylise onClick={showHideHandler}>Afficher/Masquer</MonBoutonStylise>
        </div>
        <div>
          <MonBoutonStylise transformed={transformation} onClick={buttonClickedHandler.bind(this, 'Steve Jobs', 0)}>
            Transformer le premier élève
          </MonBoutonStylise>
        </div>
        <Search />
        {afficherEleve ? <MonFragment>{cartes}</MonFragment> : null}
      </div>
    </ThemeContextProvider>
  );
}

export default Ecole;
