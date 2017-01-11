import * as angular from 'angular';
import { Book } from '../interfaces';

class StarWidgetCtrl {
    message: string = 'Hello';
    item: Book;
    color: string;
    stars: number[];
    onStarClick: Function;

    //step1. initial rendering
    constructor(private $scope: angular.IScope) {
        
        this.drawStars(this.item.rating);

        //Step2. one way of 2-way data binding
        this.createRatingChangeListener();
    }

    createRatingChangeListener() {
        var ctrl = this;
        this.$scope.$watch(function() { return ctrl.item.rating }, function(newVal) {
            ctrl.drawStars(newVal);
        });
    }

    drawStars(rating) {
        this.stars = [];
        for (var i = 0; i < 5; i++) {
            var star = i < rating ? 1 : 0;
            this.stars.push(star);
        }
    }

    //Step3. other way of 2 way data binding
    updateStars(newRating) {
        this.drawStars(newRating);
        this.item.rating = newRating;
        this.onStarClick({index: newRating, title: this.item.title});
    }
}

var StarWidget: angular.IComponentOptions = {
    templateUrl: 'src/templates/star-widget.html',
    controller: StarWidgetCtrl,
    controllerAs: 'ctrl',
    bindings: {
        item: "=",
        color: "@",
        onStarClick: '&'
    }
};

export default StarWidget;