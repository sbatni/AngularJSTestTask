'use strict';

/* Controllers */

var app = angular.module('pmpApp', []);

app.controller('ItemListCtrl', function() {
    this.items = [
        {'name': 'Product 1',
            'sku': 'sku1',
            'price': '100'},
        {'name': 'Product 2',
            'sku': 'sku2',
            'price': '250'},
        {'name': 'Product 3',
            'sku': 'sku3',
            'price': '350'}
    ];
    this.message = "Testing";
    this.prod={};
    this.editProd={};
    var name;
    var sku;
    var price;
    this.editProd;
    this.editIndex=-1;

    this.addItem = function () {
        if (this.validateFields(this.prod) === true) {
            this.items.push({
                'name': this.prod.name,
                'sku': this.prod.sku,
                'price': this.prod.price
            });
            this.prod = {};
        }
    };

    this.deleteItem = function (idx) {
        if(confirm("Are you sure you want to delete the Item?")) {
            this.items.splice(idx, 1);
        }
    };

    this.editItem = function (idx) {
        this.prod = {};
        name = this.items[idx].name;
        sku = this.items[idx].sku;
        price = this.items[idx].price;
        this.editProd = {'name': name,
                            'sku':  sku,
                            'price':  price};
        this.editIndex = idx;
    };

    this.saveItem = function () {
        if (this.validateFields(this.editProd) === true) {
            this.items[this.editIndex] = this.editProd;
            this.editProd = {};
            this.editIndex = -1;
        }
    };

    this.validateFields = function(object) {

        if (object.name === '' || object.sku === '' || object.price === '') {
            alert("All fields are required");
            return false;
        }

        if (isNaN(object.price)) {
            alert("Price not a number");
            return false;
        }

        for (var key=0, size=this.items.length; key<size;key++) {
            if(this.items[key].sku === object.sku) {
                //adding item
                if(this.editIndex == -1) {
                    alert("Duplicate sku");
                    return false;
                }
                //editing item
                else if(key !== this.editIndex)
                {
                    alert("Duplicate sku");
                    return false;
                }

            }
        }
        return true;

    };
});