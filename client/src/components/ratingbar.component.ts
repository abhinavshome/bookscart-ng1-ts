import * as angular from 'angular';

class RatingBarWidgetCtrl {
    points: number;
    bar: JQuery;
    ratingPopup: JQuery;

    constructor(private $element: angular.IRootElementService, private $scope: angular.IRootScopeService) {
        this.$scope.$watch(() => { return this.points}, () => {
            this.render();   
        });
    }

    render() {
        this.$element.html(`<div></div><span>${this.points}/5</span>`);
        this.bar = this.$element.find('div');
        this.ratingPopup = this.$element.find('span');
        this.ratingPopup.css({ 'position': 'absolute', 'background-color': 'aqua', 'padding': '5px', 'display': 'none' });
        this.bar.css({ 'background-color': 'yellow', 'width': '0px', 'height': '10px' });
        this.drawBar(this.points);
        this.createHoverListener();
    }

    drawBar(points) {
        var p = 0, self = this;
        var timer = setInterval(function () {
            p++;
            if (p <= points * 20) {
                var color = self.getColor(p);
                self.bar.css('width', p + 'px');
                self.bar.css('background-color', color);
            } else {
                clearInterval(timer);
            }
        }, 10);
    }

    getColor(pixels) {
        var red = 255, green = 255, blue = 0;
        var points = pixels / 20;
        var green = 255 - (points / 5.0) * 255;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    createHoverListener() {
        var self = this;
        this.bar.on('mouseover', function () {
            self.ratingPopup.css('display', 'block');
        });
        this.bar.on('mouseout', function () {
            self.ratingPopup.css('display', 'none');
        });
    }
}

var RatingBarWidget: angular.IComponentOptions = {
    template: 'rating bar',
    controller: RatingBarWidgetCtrl,
    controllerAs: 'ctrl',
    bindings: {
        points: '='
    }
}

export default RatingBarWidget;