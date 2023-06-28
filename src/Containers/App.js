//Librairies
import React, {Component} from 'react';
//impot feuille de style
import './App.css';
//Composants
import Eleve from '../Components/Eleves/Eleve';

class App extends Component {
  constructor (props){
    super(props);
    console.log('[App.js] Constructor')
  }
//Monté -> lorsque l'on branche
componentDidMount(){
  console.log('[App.js] ComponentDidMount');
  }

  state={
    eleves:[
      {
        nom:'Eva Dupont', 
        moyenne:'15',
        citation:"Allez toujours plus loin"},
      {
        nom:'Elon Musk', 
        moyenne:'20',
        citation:"Le feu ça brule et l'eau ça mouille"}
    ]
  }
  //Methodes
  buttonClickedHandler = () => {
    const nouveauState = [...this.state.eleves];
    nouveauState[0].nom="Steve Jobs"
    this.setState({
    ...this.state,
    eleves:nouveauState
    })
    }
  //Jsx 
  render(){
    return (
      <div className="App">
        <h1>Bienvenue dans la classe Terre</h1>

        <div>
          <button onClick={this.buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier élève</button>
        </div>

        <Eleve 
          nom={this.state.eleves[0].nom}
          moyenne={this.state.eleves[0].moyenne}
          citation={this.state.eleves[0].citation}
          clic={this.buttonClickedHandler}>
        </Eleve>
        <Eleve 
          nom={this.state.eleves[1].nom}
          moyenne={this.state.eleves[1].moyenne}
          citation={this.state.eleves[1].citation}
          clic={this.buttonClickedHandler}>
        </Eleve> 
      </div>
    );
  }  
}

export default App;
