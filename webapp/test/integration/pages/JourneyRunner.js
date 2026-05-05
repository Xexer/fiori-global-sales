sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"swh/test/zbsglobalsales/test/integration/pages/SASaleList",
	"swh/test/zbsglobalsales/test/integration/pages/SASaleObjectPage"
], function (JourneyRunner, SASaleList, SASaleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('swh/test/zbsglobalsales') + '/test/flp.html#app-preview',
        pages: {
			onTheSASaleList: SASaleList,
			onTheSASaleObjectPage: SASaleObjectPage
        },
        async: true
    });

    return runner;
});

