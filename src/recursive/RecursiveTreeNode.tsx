import * as React from 'react';
import '../App.css';
import { DEFAULT_CATEGORY_LEVEL_OFFSET_PX } from '../constants';
import { Category } from '../models/category';

export interface RecursiveTreeNodeProps {
    category: Category;
    onAddCategoryClicked?: (category: Category) => void;
}

export interface RecursiveTreeNodeState {
    category: Category;
}

export class RecursiveTreeNode extends React.PureComponent<
    RecursiveTreeNodeProps,
    RecursiveTreeNodeState
> {
    constructor(props: RecursiveTreeNodeProps) {
        super(props);

        this.state = {
            category: props.category
        };
    }

    handleAddCategoryClick = () => {
        this.props.onAddCategoryClicked &&
            this.props.onAddCategoryClicked(this.props.category);
    };

    render() {
        const { category } = this.props;
        return (
            <div style={{ paddingLeft: DEFAULT_CATEGORY_LEVEL_OFFSET_PX }}>
                {/* <span>{category.label}</span>
                // eslint-disable-next-line
                <a
                    className="tree-node__control"
                    onClick={this.handleAddCategoryClick}
                >
                    Add new
                </a>
                {category.subCategories && (
                    <div>
                        {category.subCategories.map(label => {
                            return (
                                <RecursiveTreeNode
                                    key={category.id}
                                    category={category}
                                />
                            );
                        })}
                    </div>
                )} */}
            </div>
        );
    }
}
