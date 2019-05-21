import { Category } from './models/category';

export const generateId = (function(n: number) {
    return function() {
        return `id-${++n}`;
    };
})(0);

export const generateCategoryLabel = (): string => {
    const nodeNames = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Gama'];
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

export const createCategoryMap = (
    categories: Category[]
): Map<string, Category[]> => {
    const map = new Map();
    for (const category of categories) {
        const subCategories = categories.filter(
            c => c.parentId === category.parentId
        );
        map.set(category.parentId, subCategories);
    }
    return map;
};
