import {SideProduct} from '../interfaces';

class SideProductCtrl {
    sideProducts : SideProduct;
    constructor(bookService, private cartService, private alertService) {
        bookService.getSideProducts().then( (res) => { this.sideProducts = res.data });
    }

    addToCart(product: SideProduct) {
        this.alertService.success(product.name + ' added to cart!')
        this.cartService.addToCart(product.name, product.price);
    }
}

var SideProductPage : angular.IComponentOptions = {
    templateUrl: 'src/templates/side-products.html',
    controller: SideProductCtrl,
    controllerAs: 'ctrl'
};

export default SideProductPage;