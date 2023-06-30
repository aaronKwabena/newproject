import React, { Component } from 'react';
import './Contact.css';
import Formulaire from './Formulaire/Formulaire';

class Contact extends Component{
    render(){
        return(
            <div>
                <div>
                    <h3>Formulaire de Contact</h3>
                    <Formulaire/>
                </div>
            </div>
        )
    }
}


export default Contact;