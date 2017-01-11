import { Book, Cart, Item, ICartService } from '../interfaces';

export default class CartService implements ICartService{
    private cart: Cart = {
        items: [],
        totalPrice: 0
    };

    getCart() : Cart{
        return this.cart;
    }

    addToCart(itemName: string, itemPrice: number) {
        var item: Item = this.findInCart(itemName);
        if (item) {
            item.qty++
        } else {
            item = {
                name: itemName,
                price: itemPrice,
                qty: 1
            };
            this.cart.items.push(item);
        }

        this.cart.totalPrice += itemPrice;
    }

    private findInCart(title : string) : Item {
        for(var i=0; i<this.cart.items.length; i++) {
            if(this.cart.items[i].name == title) {
                return this.cart.items[i];
            }
        }
    }

}
