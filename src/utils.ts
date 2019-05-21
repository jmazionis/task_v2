import { Category } from './models/category';
import { RecursiveCategory } from './models/recursiveCategory';

export const generateId = (function(n: number) {
    return function() {
        return `id-${++n}`;
    };
})(0);

export const generateCategoryLabel = (): string => {
    const nodeNames = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Gama'];
    const randomIndex = Math.floor(Math.random() * nodeNames.length);
    return nodeNames[randomIndex];
};

export const createCategory = (parentId?: string): Category => {
    return {
        id: generateId(),
        label: generateCategoryLabel(),
        parentId
    };
};

export const unflatten = (
    categories: Category[],
) => {
    const cMap = {};

    // for (const category of categories) {
    //     if (!cMap[category.parentId]) {
    //         cMap[category.parentId] = [];
    //     } else {
    //         cMap[category.parentId].push(category);
    //     }
    // }
    // for (const category of categories) {
    //     const subCategories = categories.filter(
    //         c => c.parentId === category.parentId
    //     );
    //     map.set(category.parentId, subCategories);
    // }
    return null;
};
