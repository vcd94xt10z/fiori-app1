/**
 * Controller base para todos os controles
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent,History) {
        "use strict";

        return Controller.extend("vcd94xt10z.app1.fioriapp1.controller.BaseController", {
            onInit: function () {
                console.log("Base controller");
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
