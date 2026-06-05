sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        onExcelUploadAction: async function (oContext, aSelectedContexts) {
            this.editFlow.getView().setBusyIndicatorDelay(0);
            this.editFlow.getView().setBusy(true);
            this.spreadsheetUpload = await this.editFlow.getView()
                .getController()
                .getAppComponent()
                .createComponent({
                    usage: "spreadsheetImporter",
                    async: true,
                    componentData: {
                        context: this,
                        tableId: "swh.test.zbsglobalsales::SASaleList--fe::table::SASale::LineItem-innerTable"
                    },
                });
            this.spreadsheetUpload.openSpreadsheetUploadDialog();
            this.editFlow.getView().setBusy(false);
        }
    };
});
