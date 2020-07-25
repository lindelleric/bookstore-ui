import { ProductAPI } from '~/types';

import { Request } from '~/utils/request';

export class Product implements ProductAPI {
    public static parse(product: ProductAPI) {
        return new Product(product)    
    }

    public static getAll() {
        return Request.get<ProductAPI[]>(`/products`)
            .then((products) => products.map((product) => Product.parse(product)));
    }

    public static get(id: string) {
        return Request.get<ProductAPI>(`/products/${ id }`)
            .then((product) => Product.parse(product));
    }

    public id: number;
    public title: string;
    public imageUrl: string;
    public url: string; // Absolute URL to API
    public price: number;

    public constructor({ id, title, imageUrl, url, price }: ProductAPI) {
        this.id = id;
        this.title = title;
        this.imageUrl = `${Request.baseUrl}${imageUrl}`;
        this.url = url;
        this.price = price;
    }
}