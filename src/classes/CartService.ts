import {CartType} from "../types/Cart";

export default class CartService {
    private cartItems: CartType[];

    constructor() {
        const storedCart = localStorage.getItem('cartItems');
        this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    }

    getCartItems(): CartType[] {
        return this.cartItems;
    }

    removeFromCart(productId: number): void {
        const cartItems: any[] = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        window.location.reload();
    }

    updateQuantityInCart(productId: number, quantity: number): void {
        const cartItems: any[] = JSON.parse(localStorage.getItem("cartItems")) || [];
        const productIndex = cartItems.findIndex((item) => item.id === productId);
        if (productIndex !== -1) {
            cartItems[productIndex].quantity = quantity;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }
}