'use strict';

/* Controllers */

var app = angular.module('pmpApp');

app.controller('ItemListCtrl', function($scope) {
    this.items = [];
    this.prod={};
    this.selectedIndex=-1;

    this.saveItem = function () {
        if(this.selectedIndex === -1)
        {
            this.items.push({
                'name': this.prod.name,
                'sku': this.prod.sku,
                'price': this.prod.price
            });
        }
        else {
            this.items[this.selectedIndex] = this.prod;
        }
        this.prod = {};
        this.selectedIndex = -1;
        $scope.inputForm.$setPristine();
    };

    this.deleteItem = function (idx) {
        if(confirm('Delete selected product?')) {
            this.items.splice(idx, 1);
        }
    };

    this.editItem = function (idx) {
        this.prod = {};
        this.selectedIndex = idx;
        var name = this.items[idx].name;
        var sku = this.items[idx].sku;
        var price = this.items[idx].price;
        this.prod = {'name': name,
                    'sku':  sku,
                    'price':  price};
    };
});