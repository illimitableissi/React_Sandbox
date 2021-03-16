import React from 'react';
import Modal from 'react-bootstrap/Modal'

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
                {/* <img src={sprites} /> */}
                <Modal show={this.state.show}>
                    <h1>Abilities</h1>
                    <p>Base Experience: {onePokemon.base_experience}</p>
                    <p>Weight: {onePokemon.weight}</p>
                    <p>Height: {onePokemon.height}</p>
                    {/* {onePokemon.moves.map(move => 
                        <p>Moves: {move.name}</p>
                        )} */}
                    <button onClick={this.closeModal}>Close</button>
                </Modal>
                <h1>{onePokemon.name}</h1>
                <button onClick={this.showModal}>Click here for more details</button>
            </div>
        )
    };

}

export default Pokemon;