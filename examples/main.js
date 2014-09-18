/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': 'jquery/jquery',
        'gcollection': 'gcollection'
    }
});

define(['gcollection', 'jquery'], function (GCollection, $) {
    console.log('Loading');
	var gcollection = new GCollection();
	gcollection.init();
});