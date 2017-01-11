import {Cart, ICartService} from '../interfaces';

class CartCtrl {
    cart : Cart;
    constructor(private cartService : ICartService) {
        this.cart = cartService.getCart();
    }
}

var CartPage : angular.IComponentOptions = {
    templateUrl: 'src/templates/cart.html',
    controller: CartCtrl,
    controllerAs: 'ctrl'
};

export default CartPage;