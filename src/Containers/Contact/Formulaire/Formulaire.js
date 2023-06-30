import React from 'react';
import "./Formulaire.css";
//on va récupérer les fonctionnalités de formik
import { withFormik } from 'formik';
//on va faire les controles de champ grâce à yup
import * as Yup from 'yup';

const Formulaire =(props)=>(
    <>
        <form>
            <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom : </label>
                <input type="text" className="form-control" id="nom"aria-describedby="nomHelp"
                        name="nom" onChange={props.handleChange} value={props.values.nom}/>
                    {
                     props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>
                    }
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label">Adresse mail:</label>
                <input type="email" className="form-control" id="email" aria-describedby="mailHelp"
                name="email" onChange={props.handleChange} value={props.values.email}/>
                    {
                     props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>
                    }
            </div>

            <div className="input-group">
                <label htmlFor="message" className="input-group-text">Message</label>
                <textarea className="form-control" aria-label="With textarea" rows="3"
                name="message" onChange={props.handleChange} value={props.values.message}></textarea>
                    {
                     props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>  
                    }
            </div>

            <div className="mt-3 center">
                <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Valider</button>
            </div>
        </form>

    </>
);

export default withFormik({
    mapPropsToValues:()=>({
        nom:"",
        email:"",
        message:""
    }),
    validationSchema:Yup.object().shape({
        nom : Yup.string()
        .min(5,'Votre nom doit avoir plus de 5 caractères')
        .required("Le nom est obligatoire !!!"),
        email : Yup.string()
        .email("Veuillez entrer une adresse mail valide !!!")
        .required("Le mail est obligatoire"),
        message : Yup.string()
        .min(10,"Le message doit contenir plus de 10 caractères")
        .max(500,"Le message doit faire moins de 500 caractères")
        .required("Le message est obligatoire")

    }),
    handleSubmit:(values)=>{
        alert('Message Envoyé');
    }
})(Formulaire);
