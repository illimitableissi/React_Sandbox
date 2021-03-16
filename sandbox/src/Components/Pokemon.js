import React from 'react';

class Pokemon extends React.Component {

    state = {
        pokemon: [],
        show: false
    }

    componentDidMount () {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then(res => res.json())
        .then(response => {
            this.setState({ 
                pokemon: response
            })
            console.log(this.state.pokemon)})
            .catch(err => console.log(err));
        }
    
    showModal () {
        this.setState({ show: true})
    }
    
    closeModal () {
        this.setState({ show: false})
    }

    render (){
        var onePokemon = this.state.pokemon
        return (
            <div>
                {/* <img src={onePokemon.sprites.back_default} /> */}
                <h1>{onePokemon.name}</h1>
                <modal show={this.state.show}>
                    <h1>this works</h1>
                </modal>
            </div>
        )
    };

}

export default Pokemon;