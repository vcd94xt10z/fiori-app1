/**
 * Controller base para todos os controles
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent,History,JSONModel,MessageBox,formatter) {
        "use strict";

        return Controller.extend("vcd94xt10z.app1.fioriapp1.controller.BaseController", {
            formatter: formatter,
            
            onInit: function () {
                console.log("Base controller");
            },

            onComprar: function(evt){
                var productid = evt.getSource().data("productid");
                this.addItemToBasket(productid);
                var basket = this.getBasketObject();
                console.log(basket);

                MessageBox.success("Item adicionado");
            },

            addItemToBasket: function(productid){
                var basket = this.getBasketObject();
                basket.itemList.push(productid);
                this.setBasketObject(basket);
            },

            setBasketObject: function(basket){
                var oModel = this.getOwnerComponent().getModel("basket");
                if(!oModel){
                    oModel = new JSONModel({"basket":null});
                }
                oModel.setData(basket,"basket");
                this.getOwnerComponent().setModel(oModel,"basket");
            },

            getBasketObject: function(){
                var oModel = this.getOwnerComponent().getModel("basket");
                if(!oModel){
                    var obj = {
                        total: 0,
                        itemList: []
                    };
                    return obj;
                }
                return oModel.getData();
            },

            /**
             * Retorna o manipulador de rotas
             */
            getRouter: function() {
                return UIComponent.getRouterFor(this);
            },

            /**
             * Vai para o carrinho
             */
            onCart: function(){
                this.getRouter().navTo("RouteCart");
                //this.getRouter().getTargets().display("TargetCart");
            },

            onHome: function(){
                this.getRouter().navTo("RouteHome");
            },

            /**
             * Vai para a página da pilha
             */
            onOpenProduct: function(oEvent){
                var oContext = oEvent.getSource().getBindingContext("view");
                var sRewrite = oContext.getProperty("rewrite");
                this.getRouter().navTo("RouteProductDetail",{"rewrite":sRewrite});
            },

            /**
             * Volta para a home
             */
            onPageBack: function(){
                console.log("onPageBack");
                //window.history.back(-1);
                //this.getRouter().getTargets().display("TargetHome");
                
                this.getRouter().navTo("RouteHome");
            }
        });
    });
