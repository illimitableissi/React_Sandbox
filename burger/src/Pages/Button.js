import React, {Component} from 'react';


class Button extends Component{

state = {
    talley: 0
}

handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
    console.log(value);
};


counterUp = () => {
    this.setState({
        talley: this.state.talley + 1
    })
}

counterDown = () => {
    this.setState({
        talley: this.state.talley - 1
    })
};

render () {   
    return(     
    <div>
        <button onClick={this.counterUp}>Increases by one</button> 
        <button onClick={this.counterDown}>Decreases by one</button>
        <p>{this.state.talley}</p> 
        <input onChange={this.handleInputChange}></input>   
    </div>
    )
}

}


export default Button;