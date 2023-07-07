import ProductsType from "@/types/Products";
import dataProducts from "@/assets/static/products.json";

export default class ProductService {
    private products: ProductsType[];

    constructor() {
        this.products = dataProducts;
    }

    getAllProducts(): ProductsType[] {
        return this.products;
    }

    getProductsByCategory(category: string): ProductsType[] {
        if (category === "") {
            return this.products;
        } else {
            return this.products.filter((product) => product.category === category);
        }
    }
}