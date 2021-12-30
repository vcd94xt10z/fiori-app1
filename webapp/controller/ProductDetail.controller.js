/**
 * Controller para os detalhes do produto
 */
sap.ui.define([
    "vcd94xt10z/app1/fioriapp1/controller/BaseController",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
function (BaseController,MessageBox,JSONModel) {
    "use strict";

    return BaseController.extend("vcd94xt10z.app1.fioriapp1.controller.ProductDetail", {
        onInit: function () {
            var oRouter = this.getRouter();

            // necessário para ler o parâmetro da URL
			oRouter.getRoute("RouteProductDetail").attachMatched(this._onRouteMatched, this);
        },

        /**
         * Lê o parâmetro da URL
         * @param oEvent 
         */
        _onRouteMatched : function (oEvent) {
            var that  = this;
            var oView = this.getView();
			var oArgs = oEvent.getParameter("arguments");
			
            // Exemplo para carregar dados de forma global (definido no manifest)
            var productList = this.getOwnerComponent().getModel("productList").getData();

            var productFound = null;
            for(var i in productList){
                var p = productList[i];
                if(p.rewrite == oArgs.rewrite){
                    productFound = p;
                    break;
                }
            }

            if(productFound == null){
                var message = "Nenhum produto encontrado com a URL "+oArgs.rewrite;

                MessageBox.error(message, {
                    onClose: function () {
                        that.getRouter().navTo("RouteHome");
                    }
                });
                return;
            }

            var oModelProd = new JSONModel(productFound);
            oView.setModel(oModelProd,"product");

            var featList = [
                {
                    "key": "Potencia",
                    "value": "10w",
                    "sequence": 1
                },{
                    "key": "Cor",
                    "value": "Verde",
                    "sequence": 2
                }
            ];
            var oModelFeat = new JSONModel({"featList":featList});
            oView.setModel(oModelFeat,"featModel");

            // Exemplo para carregar dados de forma local (somente nesse controller)
            /*
            if(window.productList.length == 0){
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("/model/productList.json");
                oModel.attachRequestCompleted(function(){
                    window.productList = oModel.getData();
                });
            }
            */

            // deixando disponível no console
            window.view        = oView;
            window.product     = productFound;
            window.productList = productList;
		}
    });
});