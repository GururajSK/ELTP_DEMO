sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("demolist.controller.Detail", {
      onInit: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter
          .getRoute("DetailView")
          .attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (oEvent) {
        var productId = oEvent.getParameter("arguments").ProductId;
        this.doOperation(productId);
      },

      doOperation(productId){
        var that = this;
        var mProductModel = that.getOwnerComponent().getModel("mProducts");
        var aProducts = mProductModel.getProperty("/ProductCollection");

        // Write your logic.
        //Filetr or loop to identify the product details.
        // create a new model here
        //Bind it to one model -> use this model to disply the records in detail screen.

      },
      onPressNavBack: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("RouteList");
      },
    });
  }
);
