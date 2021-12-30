/**
 * Controller para a home
 */
sap.ui.define([
    "vcd94xt10z/app1/fioriapp1/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "../model/formatter"
],
    function (BaseController,JSONModel,Filter,FilterOperator,formatter){
        "use strict";

        return BaseController.extend("vcd94xt10z.app1.fioriapp1.controller.Home", {
            formatter: formatter,
            
            onInit: function () {
                console.log("Home controller");

                // Lista de produtos em formato JSON Array
                var productList = this.getOwnerComponent().getModel("productList").getData();
                
                // criando model
                var oViewModel = new JSONModel({
                    productList: productList
                });

                this.getView().setModel(oViewModel, "view");

                // filtrando
                var aFilter = [
                    new Filter("price", "GT", 4000)
                ];
               
                var oList = this.byId("gridList");
    			var oBinding = oList.getBinding("items");
			    oBinding.filter(aFilter);
            }
        });
    });
