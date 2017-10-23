define([
    'lodash',
    'app/util'
], function(_, util) {
    describe('Test app/util.js', function() {
        it('should equal to 3 by add 1 with 2', function() {
            expect(util.add(1, 2)).to.equal(3);
        });

        it('should equal to 10 when adding from 1 to 4', function() {
            expect(util.sum([1, 2, 3, 4])).to.equal(10);
        });
    });
});
