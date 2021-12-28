/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vcd94xt10zapp1./fiori-app1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
