(function() {
    'use strict';

    describe('MujQLo', function() {

        it('should exits globally', function() {
            expect(mujqlo).toBeDefined();
        });

        it('should load jQuery files and define versions', function(done) {

            mujqlo.load([
                'bower_components/jquery-1.7.2/jquery.js',
                'bower_components/jquery-1.8.3/jquery.js',
                'bower_components/jquery-1.9.1/jquery.js',
                'bower_components/jquery-1.10.2/jquery.js',
                'bower_components/jquery-1.11.1/dist/jquery.js',
                'bower_components/jquery-2.1.1/dist/jquery.js'
            ], function() {
                expect(jq172).toBeDefined();
                expect(jq183).toBeDefined();
                expect(jq191).toBeDefined();
                expect(jq1102).toBeDefined();
                expect(jq1111).toBeDefined();
                expect(jq211).toBeDefined();
                done();
            });
        });


    });

})();
