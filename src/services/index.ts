import { IProductService } from './products/IProductService';
import { MockProductService } from './products/MockProductService';
import { IAuthService } from './auth/IAuthService';
import { MockAuthService } from './auth/MockAuthService';
import { IOrderService } from './orders/IOrderService';
import { MockOrderService } from './orders/MockOrderService';
import { AppConfig } from '../constants/config';

class ServiceContainer {
  public productService: IProductService;
  public authService: IAuthService;
  public orderService: IOrderService;

  constructor() {
    // In future when AppConfig.useRealBackend is true, instantiate WooCommerce or REST services here
    this.productService = new MockProductService();
    this.authService = new MockAuthService();
    this.orderService = new MockOrderService();
  }
}

export const services = new ServiceContainer();
export const productService = services.productService;
export const authService = services.authService;
export const orderService = services.orderService;
