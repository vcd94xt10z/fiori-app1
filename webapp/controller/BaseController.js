/**
 * Controller base para todos os controles
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "../model/formatter",
    "../class/Basket"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent,History,JSONModel,MessageBox,MessageToast,formatter,Basket) {
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
                //MessageBox.success("Item adicionado");
                MessageToast.show("Item "+productid+" adicionado");
            },

            addItemToBasket: function(productid){
                //var b = new Basket();
                //b.addItemToBasket(productid,2);

                // obtendo o objeto completo
                var basket = this.getBasketObject();

                // carreganodo o produto
                var item = this.loadProduct(productid);
                if(item == null){
                    alert("Produto não existe");
                    return;
                }
                
                // verificando se o item já esta no carrinho
                var alreadyInBasket = false;
                for(var i in basket.itemList){
                    var itemLoop = basket.itemList[i];
                    if(itemLoop.productid == productid){
                        itemLoop.quantity = itemLoop.quantity + 1;
                        alreadyInBasket = true;
                        break;
                    }
                }
                if(!alreadyInBasket){
                    item.quantity = 1;
                }

                basket.itemList.push(item);

                // totalizando
                basket.total = 0;
                basket.quantity = 0;
                for(var i in basket.itemList){
                    var itemLoop = basket.itemList[i];
                    basket.quantity += 1;
                    basket.total += itemLoop.price;
                }

                // persistencia
                this.setBasketObject(basket);

                this.updateBasketUI();                
            },

            updateBasketUI: function(){
                var basket = this.getBasketObject();
                var button = null;

                try {
                    button = this.byId("HeaderView").byId("CarrinhoButton");
                }catch(e){
                }

                if(button == null){
                    button = this.byId("CarrinhoButton");
                }

                button.setText("Carrinho ("+basket.quantity+")");

                console.log(basket);

            },

            setBasketObject: function(basket){
                sessionStorage.setItem('basket', JSON.stringify(basket));
                //setBasketObjectModel(basket);
            },

            setBasketObjectModel: function(basket){
                var oModel = this.getOwnerComponent().getModel("basket");
                if(!oModel){
                    oModel = new JSONModel({"basket":null});
                }
                oModel.setData(basket,"basket");
                this.getOwnerComponent().setModel(oModel,"basket");
            },

            getBasketObject: function(){
                var basket = null;
                try {
                    basket = JSON.parse(sessionStorage.getItem('basket'))
                }catch(e){
                }

                if(basket == null){
                    var obj = {
                        total: 0,
                        quantity: 0,
                        itemList: []
                    };
                    return obj;
                }
                return basket;

                //return this.getBasketObjectModel();
            },

            getBasketObjectModel: function(){
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

            loadProduct: function(productid){
                // Exemplo para carregar dados de forma global (definido no manifest)
                var productList = this.getOwnerComponent().getModel("productList").getData();

                var productFound = null;
                for(var i in productList){
                    var p = productList[i];
                    if(p.productid == productid){
                        productFound = p;
                        break;
                    }
                }

                if(productFound == null){
                    return null;
                }
                return productFound;
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
