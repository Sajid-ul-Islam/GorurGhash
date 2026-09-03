import { Product, Category, FilterOptions } from '../../types';
import { Banner } from '../../data/mockProducts';

export interface IProductService {
  getProducts(filters?: FilterOptions): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  getCategories(): Promise<Category[]>;
  getBanners(): Promise<Banner[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getBestSellers(): Promise<Product[]>;
  getNewArrivals(): Promise<Product[]>;
  getOnSaleProducts(): Promise<Product[]>;
  getRelatedProducts(productId: string, category?: string): Promise<Product[]>;
  searchProducts(query: string, filters?: FilterOptions): Promise<Product[]>;
  toggleStockStatus(productId: string, inStock: boolean): Promise<Product>;
  updateProductPrice(productId: string, newPrice: number): Promise<Product>;
}
