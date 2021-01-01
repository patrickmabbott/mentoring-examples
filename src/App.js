import React, { Component } from 'react';
import {Icon } from "semantic-ui-react"
import './App.css';

let lightOn = true;

class App extends Component {

    onClickLight = () => {
        
        //Add code to change light here.

        











        //Solution (Using terse syntax)
        lightOn = !lightOn;





        

        //Don't worry about this. Will explain it later.
        this.setState({ state: this.state });
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <Icon 
                name={lightOn ? "lightbulb" : "lightbulb outline"}
                size="huge"
                onClick={this.onClickLight}
                />
              </header>
            </div>
          );
    }
}

export default App;
