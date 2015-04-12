(function (){
    var app = angular.module('store-games', []);
    
    // Custom Directive: Game Heading 
    app.directive('gameHeading', function () {
        return {
            restrict : 'E',
            templateUrl : 'templates/game-heading.html'
        }
    });

    // Custom Directive: Game Body
    app.directive('gameBody', function () {
        return  {
            restrict : 'E',
            templateUrl : 'templates/game-body.html'
        };
    });

    // What if we need a controller inside a custom directive?
    // - Just move the controller functionality and alias inside the custom directive definition!
    // - Move the template (contents of an element) from index.html into a separate file and remove the ng-controller attribute
    // - Remove the element that is previously containing the template and replace it with the custom directive!

    // Custom Directive: Game info panels
    app.directive('gamePanels', function () {
        return {
            restrict : 'E',
            templateUrl : 'templates/game-panels.html',

            // move controller logic here
            // assign to property called 'controller'
            controller : function () {
                this.panel = 1;

                this.setPanel = function (panelNum) {
                    this.panel = panelNum;
                }

                this.isSelected = function (panelNum) {
                    return this.panel === panelNum;
                }
            },

            // move alias here
            // assign to property called 'controllerAs'
            controllerAs : 'panelCtrl'
        };
    });
    
})();