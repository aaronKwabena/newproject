import React from "react";



class Search extends React.Component{
    //Création de l'étiquette (ref)
    constructor (props){
        super(props);
        this.searchRef = React.createRef();
    }
    //utilisation de ref
    componentDidMount(){
        this.searchRef.focus();
    }
    
    render(){
        return(
            <input 
                type="text"

                ref={ (e) => this.searchRef = e}

                style={{
                    width:'90%',
                    display: 'block',
                    margin: 'auto',
                    padding: '3px'
                    }}
            />

        );

    }


}
export default Search;