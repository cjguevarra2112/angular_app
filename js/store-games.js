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