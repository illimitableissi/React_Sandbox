import React from 'react';
import Modal from 'react-bootstrap/Modal'

class Pokemon extends React.Component {

    state = {
        pokemon: [],
        abilities: [],
        moves: [],
        img:'',
        show: false
    }

    componentDidMount () {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then(res => res.json())
        .then(response => {
            this.setState({ 
                pokemon: response,
                abilities: response.abilities,
                moves:  response.moves,
                img: response.sprites
            })
            console.log(this.state.img)})
            .catch(err => console.log(err));
        }
    
    showModal = () => {
        this.setState({ show: true})
    }
    
    closeModal = () => {
        this.setState({ show: false})
    }

    render (){
        var onePokemon = this.state.pokemon

        return (
            <div>
                <img src={this.state.img.front_default} />
                <Modal show={this.state.show}>
                    <h1>Stats</h1>
                    <h2>Abilities</h2>
                    {this.state.abilities.map(j => 
                    <p>{j.ability.name}</p>
                    )}
                    <p>Base Experience: {onePokemon.base_experience}</p>
                    <p>Weight: {onePokemon.weight}</p>
                    <p>Height: {onePokemon.height}</p>
                    <h2>Moves: </h2>
                    {this.state.moves.map(i => 
                     <p>{i.move.name}</p>
                    )}
                    <button onClick={this.closeModal}>Close</button>
                </Modal>
                <h1>{onePokemon.name}</h1>
                <button onClick={this.showModal}>Click here for more details</button>
            </div>
        )
    };

}

export default Pokemon;