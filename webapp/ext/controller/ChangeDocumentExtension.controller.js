sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/ui/core/Core'], function (ControllerExtension, Core) {
	'use strict';

	return ControllerExtension.extend('swh.test.zbsglobalsales.ext.controller.ChangeDocumentExtension', {
		_chdContainer: "swh.test.zbsglobalsales::SASaleObjectPage--fe::CustomSubSection::ChangeDocument--idChangeContainer",

		override: {
			/**
			 * Called when a controller is instantiated and its View controls
			 * (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind
			 * event handlers and do other one-time initialization.
			 * @memberOf chdbookproject.ext.controller.ChdControllerExt
			 */
			onInit: function () {
				var that = this;

				var oViewId = this.getView().getId();
				if (oViewId === "swh.test.zbsglobalsales::SASaleObjectPage") {
					this._oComp = Core.createComponent({
						name: "sap.nw.core.changedocs.lib.reuse.changedocscomponent",
						id: "ChangeDocReuseComponent",
						settings: {
							"objectClass": ["ZBS_CO_SALES"],
							"startDate": "2026-01-01T00:00:00.0000",
							"stIsAreaVisible": true
						}
					});
					var oChdContainer = Core.byId(this._chdContainer);
					if (oChdContainer !== undefined) {
						oChdContainer.setComponent(this._oComp);
					}

					this._oComp.setStIsAreaVisible(true);
					this._oComp.stRefresh();
				}
			},
			editFlow: {
				onAfterSave: function () {
					var that = this;
					this._oComp.stRefresh();
				}
			},
			routing: {
				onAfterBinding: function (oBindingContext) {
					var that = this;
					oBindingContext.requestProperty("RawChangeID").then(function (sObject) {
						if (sObject) {
							that._oComp.setObjectId([sObject]);
						}

						that._oComp.stRefresh();
					});
				}
			},

		}
	});
});
