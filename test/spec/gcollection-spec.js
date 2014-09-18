/*global define:true, describe:true , it:true , expect:true, 
beforeEach:true, sinon:true, spyOn:true , expect:true */
/* jshint strict: false */
define(['gcollection', 'jquery'], function(GCollection, $) {

    describe('just checking', function() {

        it('GCollection should be loaded', function() {
            expect(GCollection).toBeTruthy();
            var gcollection = new GCollection();
            expect(gcollection).toBeTruthy();
        });

        it('GCollection should initialize', function() {
            var gcollection = new GCollection();
            var output   = gcollection.init();
            var expected = 'This is just a stub!';
            expect(output).toEqual(expected);
        });
        
    });

});