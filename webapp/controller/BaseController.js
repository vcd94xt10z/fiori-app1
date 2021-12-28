sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent) {
        "use strict";

        return Controller.extend("vcd94xt10z.app1.fioriapp1.controller.BaseController", {
            onInit: function () {
                console.log("Base controller");
            },
            getRouter: function() {
                return UIComponent.getRouterFor(this);
            },
            onCart: function(){
                console.log("Cart");
                this.getRouter().getTargets().display("TargetCart");
            },
            onProductDetail: function(){
                console.log("ProductDetail");
                this.getRouter().getTargets().display("TargetProductDetail");
            },
            onPageBack: function(){
                //window.history.back(-1);
                this.getRouter().getTargets().display("TargetHome");
            },
        });
    });
