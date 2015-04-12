(function () {

    var app = angular.module('storeApp', []);

    //***** CONTROLLERS ******************************************************//

    // Main Controller
    app.controller('StoreController', function () {
        this.storeName = "Bound To Earth Game Store";
        this.storeDesc = "Small, simple, but game-rich gamestore!";

        this.games = games;

        this.cart = [];
    });

    // Panel Controller
    app.controller('PanelController', function (){
        this.panel = 1;

        this.setPanel = function (panelNum) {
            this.panel = panelNum;
        }

        this.isSelected = function (panelNum) {
            return this.panel === panelNum;
        }
    });

    // Add review Controller
    app.controller('AddReviewController', function () {
        this.newReview = {};

        this.addReview = function (game) {
            this.newReview.createdOn = Date.now();

            game.reviews.push(this.newReview);
            this.newReview = {};
        };
    });

    // ***** END CONTROLLERS ******************************************************//


    //***** DIRECTIVES ************************************************************//

    // Custom Directive: Main header
    app.directive('mainHeader', function () {
        return {
            restrict : 'E',
            templateUrl : 'templates/main-header.html'
        };
    });

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


    //***** END DIRECTIVES *******************************************************//


    var games = [
        {
            'title' : 'Chrono Trigger',
            'genre' : 'Role-Playing',
            'publishers' : ['SquareSoft', 'SquareEnix'],
            'platforms' : ['SNES', 'PS1', 'NDS', 'iOS', 'Android'],
            'developers' : ['SquareSoft', 'Tose'],

            'description' : 'RPG made by SquareSoft featuring Chrono',
            'image' : 'img/ct.jpg',

            'stock' : 71,
            'price' : 25.99,

            'forSale' : true,
            'soldOut' : false,

            'reviews' : [
                {
                    stars : 5,
                    body  : 'One of the best games of all time beats any modern day RPGs!',
                    author : 'aerosmithguy@gmail.com',
                    createdOn : Date.now()
                }
            ]
        },
        {
            'title' : 'Banjo Kazooie',
            'genre' : '3D Platformer',
            'publishers' : ['Nintendo', 'Microsoft Game Studios'],
            'platforms' : ['N64', 'XBOX 360'],
            'developers' : ['Rare', '4j Studios'],

            'description' : 'Banjo and Kazooie saves Banjo\'s sister',
            'image' : 'img/bk.jpg',

            'stock' : 55,
            'price' : 21.99,

            'forSale' : true,
            'soldOut' : false,

            'reviews' : [
                {
                    stars : 4,
                    body  : 'Best Platformer for the N64 beats SM64 in every way plus XBOX version sucks!',
                    author : 'jumpgamer@gmail.com',
                    createdOn : Date.now()
                }
            ]
        },
        {
            'title' : 'SuperTuxKart',
            'genre' : 'Kart Racing',
            'publishers' : ['Open source'],
            'platforms' : ['Windows', 'OSX', 'Linux', 'Cross Platform'],
            'developers' : ['Joerg Henrichs', 'Marianne Gagnon'],

            'description' : 'Open source kart racing game featuring Tux and Friends',
            'image' : 'img/stk.jpg',

            'stock' : 0,
            'price' : 0.00,

            'forSale' : true,
            'soldOut' : false,

            'reviews' : [
                {
                    stars : 5,
                    body  : 'Obviously better than any Mario Kart out there especially with their new release!',
                    author : 'razorlight@gmail.com',
                    createdOn : Date.now()
                }
            ]
        },

    ];
    
})();