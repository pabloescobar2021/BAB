import rawProductsData from '../jsons/product.json';

export interface Storage {
  shelf_life_months: number;
  conditions: string;
}
export interface NutritionalValue {
  proteins_g: number;
  fats_g: number;
  carbohydrates_g: number;
  energy_kcal: number;
}

export interface Product {
  name: string;
  price?: string;
  image: string;
  availability?: string;
  description?: string;
  composition?: string[];
  storage?: Storage;
  nutritional_value_per_100g?: NutritionalValue;

}

const rawProducts = rawProductsData as Product[];

interface GetProductsOptions {
  fields?: (keyof Product)[];
}

export function getProducts(options: GetProductsOptions = {}): Partial<Product>[] {
  const { fields } = options;

  return rawProducts.map(item => {
    if (!fields) return item as Product;

    return fields.reduce((acc, field) => {
      acc[field] = item[field] as any;
      return acc;
    }, {} as Partial<Product>);
  });
}
