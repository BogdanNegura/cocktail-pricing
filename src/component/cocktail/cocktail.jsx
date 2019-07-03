import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3456/'

class Coocktail extends Component{

    state = {
        cocktail:[]
    }

    async getCocktail() {
        try{
            let cocktails = await  axios.get(`${BASE_URL}cocktail`)
            console.log(cocktails)
        
        }
        catch (err) {

        }
    }
    

    componentDidMount(){
        // axios
        //     .get(`${BASE_URL}cocktail`)
        //     .then(({data}) => {
        //         this.setState({cocktail: data})
        //     })
        this.getCocktail()
            
    }

    render(){
        return(
            <p>{this.state.cocktail.length}</p>
        )
    }
}

export default Coocktail;