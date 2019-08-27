/*global QUnit*/

sap.ui.define([
	"user_ui/user_ui/controller/UserForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UserForm Controller");

	QUnit.test("I should test the UserForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});