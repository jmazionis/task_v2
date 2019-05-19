export const generateId = (function(n: number) {
    return function() {
        return `id-${++n}`;
    };
})(0);

export const generatedNodeName = (): string => {
    const nodeNames = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Gama'];
    const randomIndex = Math.floor(Math.random() * nodeNames.length);
    return nodeNames[randomIndex];
};
