export interface RecursiveCategory {
    id: string;
    subCategories?: RecursiveCategory;
}
