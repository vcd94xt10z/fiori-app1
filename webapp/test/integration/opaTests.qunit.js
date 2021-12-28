/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["vcd94xt10z/app1/fioriapp1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
