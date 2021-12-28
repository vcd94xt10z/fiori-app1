sap.ui.define([
    "vcd94xt10z/app1/fioriapp1/controller/BaseController"
],
function (BaseController) {
    "use strict";

    return BaseController.extend("vcd94xt10z.app1.fioriapp1.controller.ProductDetail", {
        onInit: function () {
            console.log("ProductDetail controller");
        }
    });
});