import React, { Component } from 'react';
import './App.css';
import { RecursiveTree } from './recursive/RecursiveTree';

class App extends Component {
    render() {
        return (
            <div className="app">
                <p>Text</p>
                <RecursiveTree />
            </div>
        );
    }
}

export default App;
