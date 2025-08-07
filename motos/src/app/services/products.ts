import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface Product {
  id: number;
  name: string;
  description: string;
  cost: number;
  image: string;
}

export class Products {
  
  private products: Product[] = [
    {
      id: 1,
      name: 'Honda Transa LP',
      description: 'Ideal para ciudad',
      cost: 6500,
      image: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      name: 'Kawasaky 600',
      description: 'Potente y elegante',
      cost: 9200,
      image: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      name: 'Kawasaky KX 250',
      description: 'Moderna y económica',
      cost: 3900,
      image: '/img/kawasaky-kx250.jpg'
    },
    {
      id: 4,
      name: 'Suzuki 1200',
      description: 'Moderna y económica',
      cost: 13900,
      image: '/img/suzuki-1200.jpg'
    }
  ]
  
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
