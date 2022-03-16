/**
 * Basket.js
 * Classe para gerenciar o carrinho
 */
sap.ui.define([
    "sap/ui/base/Object"
],function(Object){
    'use strict';
    return Object.extend("app.eco.Basket",{
        total: 0,
        itemList: [],
        itemCount: 0,

        addItemToBasket: function(productid,quantity){
            alert("productid="+productid);
        }
    });
});