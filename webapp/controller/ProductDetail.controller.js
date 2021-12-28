/**
 * Controller para os detalhes do produto
 */
sap.ui.define([
    "vcd94xt10z/app1/fioriapp1/controller/BaseController"
],
function (BaseController) {
    "use strict";

    return BaseController.extend("vcd94xt10z.app1.fioriapp1.controller.ProductDetail", {
        onInit: function () {
            console.log("ProductDetail controller");

            var oRouter = this.getRouter();

            // necessário para ler o parâmetro da URL
			oRouter.getRoute("RouteProductDetail").attachMatched(this._onRouteMatched, this);
        },

        /**
         * Lê o parâmetro da URL
         * @param oEvent 
         */
        _onRouteMatched : function (oEvent) {
			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			console.log(oArgs.rewrite);

            // Exemplo para carregar dados de forma global (definido no manifest)
            window.productList = this.getOwnerComponent().getModel("productList").getData();

            // Exemplo para carregar dados de forma local (somente nesse controller)
            if(window.productList.length == 0){
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("/model/productList.json");
                oModel.attachRequestCompleted(function(){
                    window.productList = oModel.getData();
                });
            }

            
		}
    });
});