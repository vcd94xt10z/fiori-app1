/**
 * Controller para a home
 */
sap.ui.define([
    "vcd94xt10z/app1/fioriapp1/controller/BaseController",
    "sap/ui/model/json/JSONModel"
],
    function (BaseController,JSONModel) {
        "use strict";

        return BaseController.extend("vcd94xt10z.app1.fioriapp1.controller.Home", {
            onInit: function () {
                console.log("Home controller");

                var productList = this.getOwnerComponent().getModel("productList").getData();
                console.log(productList);

                var oViewModel = new JSONModel({
                    productList: productList
                });
                this.getView().setModel(oViewModel, "view");

            }
        });
    });
