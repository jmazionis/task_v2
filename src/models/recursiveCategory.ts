export interface RecursiveCategory {
    id: string;
    label: string;
    subCategories: RecursiveCategory;
}
