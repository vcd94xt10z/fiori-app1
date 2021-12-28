/**
 * Controller para a home
 */
sap.ui.define([
    "vcd94xt10z/app1/fioriapp1/controller/BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("vcd94xt10z.app1.fioriapp1.controller.Home", {
            onInit: function () {
                console.log("Home controller");
            }
        });
    });
