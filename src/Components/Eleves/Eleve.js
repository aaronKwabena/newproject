// Librairies
import React, { useEffect, useContext } from 'react';

//import context-provider
import { themeContext } from '../../Context/theme-context';

import classes from './Eleve.module.css';


function Eleve(props) {
    //useEffect
    useEffect(()=>{
        console.log('[Eleve.js] UseEffect');
    },[]);
    useEffect(()=>{
            console.log('[Eleve.js] UseEffect(didUpdate');
    })
    useEffect(()=>{
        return()=>{
            console.log('[Eleve.js] UseEffect(WillUnmount)');
        }
    },[]);
    //limitateur
    useEffect(()=>{
        console.log('[Eleve.js] Le nom a changé');
    },[props.nom]);

    //variable pour le style

    const moyenneClasse=[];

    if(props.moyenne>10){
        moyenneClasse.push(classes.green)
    }else if(props.moyenne ==10){
        moyenneClasse.push(classes.orange)
    }else{
        moyenneClasse.push(classes.red)
    }

    let message;
        
        if(props.moyenne<6){
            message=<p>Cet élève va redoubler</p>
        }

    const theme = useContext(themeContext);
    let inputBackground
    //jsx
    return (
        <div background={inputBackground}>
            <div className={classes.eleve}>
                <h1 onClick={props.clic}>{props.nom}</h1>
                <p>Moyenne scolaire : <b className={moyenneClasse.join('')}>{props.moyenne}/20</b></p>
                <p>Age : {Math.floor(Math.random() * 100)}</p>
                <i>{props.children}</i>
                {message}
                <input ref={props.maRef} 
                        onChange={props.changerNom} 
                        type="text" value={props.nom}
                        style={{
                            width:'100%',
                            background:theme.background,
                            color:theme.foreground}}/>
                <button onClick={props.supprimer} style={{marginTop:'5px'}}>Supprimer</button>
           </div>
        </div>
    );
}
export default Eleve;