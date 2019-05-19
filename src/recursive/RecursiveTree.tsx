import * as React from 'react';
import '../App.css';
import { DEFAULT_CATEGORY_LEVEL_OFFSET_PX } from '../constants';
import { TreeNode } from '../common/TreeNode';

export interface RecursiveTreeProps {}

export interface RecursiveTreeState {}

export class RecursiveTree extends React.PureComponent<
    RecursiveTreeProps,
    RecursiveTreeState
> {
    render() {
        return <TreeNode label="Omega" />;
    }
}
