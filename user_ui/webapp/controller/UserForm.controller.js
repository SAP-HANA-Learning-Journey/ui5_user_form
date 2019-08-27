sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";
	return Controller.extend("user_ui.user_ui.controller.UserForm", {
		onInit: function () {},
		/**
		 *@memberOf user_ui.user_ui.controller.UserForm
		 */
		onProcess: function (oEvent) {
			var oLocal = this.getView().getModel("local");
			var oBundle = this.getView().getModel("i18n");
			var sFirstLabel = oBundle.getProperty("lblFirstName");
			var sLastLabel = oBundle.getProperty("lblLastName");
			var sFirstName = oLocal.getProperty("/FirstName");
			var sLastName = oLocal.getProperty("/LastName");
			var sMessage = sFirstLabel + ": " + sFirstName + "\n" + sLastLabel + ": " + sLastName;
			MessageBox.show(sMessage);
		}
	});
});