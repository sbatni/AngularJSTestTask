'use strict';

/* Controllers */

var app = angular.module('pmpApp');

app.controller('ItemListCtrl', function() {
  this.items = [];
  this.prod = {};
  this.selectedIndex = -1;

  this.saveItem = function(form) {
    if (this.selectedIndex === -1) {
      this.items.push({
        'name': this.prod.name,
        'sku': this.prod.sku,
        'price': this.prod.price
      });
    } else {
      this.items[this.selectedIndex] = this.prod;
    }
    this.prod = {};
    this.selectedIndex = -1;
    if (form) {
      form.$setPristine();
    }
  };

  this.deleteItem = function(idx) {
    if (confirm('Delete selected product?')) {
      this.items.splice(idx, 1);
    }
  };

  this.editItem = function(idx) {
    this.prod = {};
    this.selectedIndex = idx;
    angular.extend(this.prod, this.items[idx])
  };
});
