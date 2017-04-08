var binarySearch = require('../binary_search.js')

var path = require('path');
var expect = require('chai').expect;
var assert = require('chai').assert;

var binaryElementsX = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


describe('tests', function(){
    describe('binarySearch', function(){
        var tests = [
          {searchNumber: 3,       expected: 3},
        ];

        tests.forEach(function(test) {
          it('should return ' + test.searchNumber + ' args', function() {
            expect(binarySearch.binarySearch(binaryElementsX, test.searchNumber)).to.equal(test.expected);
          });
        });

    })
})
