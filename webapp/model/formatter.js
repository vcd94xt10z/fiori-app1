sap.ui.define([
	"sap/ui/core/format/NumberFormat"
], function (NumberFormat) {
	"use strict";

	var mStatusState = {
		"A": "Success",
		"O": "Warning",
		"D": "Error"
	};

	var formatter = {
		/**
		 * Formats the price
		 * @param {string} sValue model price value
		 * @return {string} formatted price
		 */
		price: function (sValue) {
			var numberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 2,
				minFractionDigits: 2,
				groupingEnabled: true,
				groupingSeparator: ".",
				decimalSeparator: ","
			});
			return numberFormat.format(sValue);
		},

		/**
		 * Returns the product state based on the status
		 * @param {string} sStatus product status
		 * @return {string} the state text
		 */
		statusState: function (sStatus) {
			return mStatusState[sStatus] || "None";
		}
	};

	return formatter;
});