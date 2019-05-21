import React, { Component } from 'react';
import './App.css';
import { RecursiveTree } from './recursive/RecursiveTree';
import { createCategory } from './utils';

const rootCategory = createCategory();
const categoryA = createCategory(rootCategory.id);
const categoryB = createCategory(rootCategory.id);
const categoryC = createCategory(categoryB.id);
const categories = [rootCategory, categoryA, categoryB, categoryC];

class App extends Component {
    render() {
        return (
            <div className="app">
                <RecursiveTree categories={categories} />
            </div>
        );
    }
}

export default App;
