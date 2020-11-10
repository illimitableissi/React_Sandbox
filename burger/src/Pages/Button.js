import React from 'react';


class Button extends React.Component{

state = {
    talley: 0
}

counterUp = () => {
    this.setState({
        talley: this.state.talley + 1
    })
}

counterDown = () =>{
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
    </div>
    )
}

}


export default Button;