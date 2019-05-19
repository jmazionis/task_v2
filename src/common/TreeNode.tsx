import * as React from 'react';
import '../App.css';
import { DEFAULT_CATEGORY_LEVEL_OFFSET_PX } from '../constants';
import { generatedNodeName } from '../utils';

export interface TreeNodeProps {
    label: string;
}

export interface TreeNodeState {
    subNodes: string[];
}

export class TreeNode extends React.PureComponent<
    TreeNodeProps,
    TreeNodeState
> {
    constructor(props: TreeNodeProps) {
        super(props);

        this.state = {
            subNodes: []
        };
    }

    handleAddClick = () => {
        this.setState(prevState => ({
            subNodes: [...prevState.subNodes, generatedNodeName()]
        }));
    };

    render() {
        const { label } = this.props;

        return (
            <div style={{ paddingLeft: DEFAULT_CATEGORY_LEVEL_OFFSET_PX }}>
                <span>{label}</span>
                <a className="tree-node__control" onClick={this.handleAddClick}>
                    Add new
                </a>
                <div>
                    {this.state.subNodes.map((label, i) => {
                        return <TreeNode key={i} label={label} />;
                    })}
                </div>
            </div>
        );
    }
}
