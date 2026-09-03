import { IProductService } from './IProductService';
import { Product, Category, FilterOptions } from '../../types';
import { mockProducts, mockCategories, mockBanners, Banner } from '../../data/mockProducts';

export class MockProductService implements IProductService {
  private products: Product[] = [...mockProducts];

  private delay<T>(data: T, ms: number = 80): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms));
  }

  async getProducts(filters?: FilterOptions): Promise<Product[]> {
    let result = [...this.products];

    if (filters) {
      if (filters.category && filters.category !== 'all') {
        const catLower = filters.category.toLowerCase();
        result = result.filter((p) =>
          p.categories.some((c) => c.toLowerCase().includes(catLower)) ||
          p.slug.toLowerCase().includes(catLower)
        );
      }

      if (filters.searchQuery && filters.searchQuery.trim().length > 0) {
        const q = filters.searchQuery.toLowerCase().trim();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.categories.some((c) => c.toLowerCase().includes(q)) ||
            p.sku.toLowerCase().includes(q)
        );
      }

      if (filters.minPrice !== undefined) {
        result = result.filter((p) => p.price >= filters.minPrice!);
      }

      if (filters.maxPrice !== undefined) {
        result = result.filter((p) => p.price <= filters.maxPrice!);
      }

      if (filters.size) {
        result = result.filter((p) => p.sizes.includes(filters.size!));
      }

      if (filters.onSaleOnly) {
        result = result.filter((p) => p.onSale);
      }

      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'price_asc':
            result.sort((a, b) => a.price - b.price);
            break;
          case 'price_desc':
            result.sort((a, b) => b.price - a.price);
            break;
          case 'popular':
            result.sort((a, b) => b.reviewCount - a.reviewCount);
            break;
          case 'newest':
          default:
            result.sort((a, b) => Number(b.id) - Number(a.id));
            break;
        }
      }
    }

    return this.delay(result);
  }

  async getProductById(id: string): Promise<Product | null> {
    const item = this.products.find((p) => p.id === id) || null;
    return this.delay(item);
  }

  async getCategories(): Promise<Category[]> {
    return this.delay([...mockCategories]);
  }

  async getBanners(): Promise<Banner[]> {
    return this.delay([...mockBanners]);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    const featured = this.products.filter((p) => p.isBestSeller || p.onSale).slice(0, 8);
    return this.delay(featured);
  }

  async getBestSellers(): Promise<Product[]> {
    const best = this.products.filter((p) => p.isBestSeller).slice(0, 10);
    return this.delay(best);
  }

  async getNewArrivals(): Promise<Product[]> {
    const fresh = this.products.filter((p) => p.isNew).slice(0, 10);
    return this.delay(fresh.length > 0 ? fresh : this.products.slice(0, 10));
  }

  async getOnSaleProducts(): Promise<Product[]> {
    const onSale = this.products.filter((p) => p.onSale);
    return this.delay(onSale);
  }

  async getRelatedProducts(productId: string, category?: string): Promise<Product[]> {
    const related = this.products
      .filter((p) => p.id !== productId)
      .filter((p) => !category || p.categories.some((c) => c.toLowerCase().includes(category.toLowerCase())))
      .slice(0, 6);
    return this.delay(related.length > 0 ? related : this.products.slice(0, 6));
  }

  async searchProducts(query: string, filters?: FilterOptions): Promise<Product[]> {
    return this.getProducts({ ...filters, searchQuery: query });
  }

  async toggleStockStatus(productId: string, inStock: boolean): Promise<Product> {
    const idx = this.products.findIndex((p) => p.id === productId);
    if (idx === -1) throw new Error('Product not found');
    this.products[idx] = { ...this.products[idx], inStock };
    return this.delay(this.products[idx]);
  }

  async updateProductPrice(productId: string, newPrice: number): Promise<Product> {
    const idx = this.products.findIndex((p) => p.id === productId);
    if (idx === -1) throw new Error('Product not found');
    this.products[idx] = {
      ...this.products[idx],
      price: newPrice,
      onSale: this.products[idx].regularPrice ? newPrice < this.products[idx].regularPrice! : false,
    };
    return this.delay(this.products[idx]);
  }
}
