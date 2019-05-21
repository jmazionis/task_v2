import * as React from 'react';
import '../App.css';
import { RecursiveTreeNode } from './RecursiveTreeNode';
import { Category } from '../models/category';
import { createCategoryMap } from '../utils';
import { RecursiveCategory } from './recursiveCategory';

export interface RecursiveTreeProps {
    categories: Category[];
}

export interface RecursiveTreeState {
    category: RecursiveCategory;
}

export class RecursiveTree extends React.PureComponent<
    RecursiveTreeProps,
    RecursiveTreeState
> {
    constructor(props: RecursiveTreeProps) {
        super(props);

        // this.state = {
        //     category: props.category
        // };
        console.log(createCategoryMap(props.categories));
    }

    handleAddCategoryClicked = (category: Category) => {
        // this.setState(prevState => ({
        //     categories: [...prevState.categories, createCategory()]
        // }));
    };

    render() {
        return (
            <h2>Hello</h2>
            // <RecursiveTreeNode
            //     onAddCategoryClicked={this.handleAddCategoryClicked}
            //     category={this.props.category}
            // />
        );
    }
}
