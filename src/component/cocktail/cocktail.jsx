import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3456/'

class Coocktail extends Component{

    state = {
        cocktail:[]
        }
    

    componentDidMount(){
        axios
            .get(`${BASE_URL}cocktail`)
            .then(({data}) => {
                this.setState({cocktail: data})
            })
    }

    render(){
        return(
            <p>{this.state.cocktail.length}</p>
        )
    }
}

export default Coocktail;