var binarySearch = require('../binary_search.js')
var linearSearch = require('../linear_search.js')
var path = require('path');
var expect = require('chai').expect;
var assert = require('chai').assert;



describe('tests', function(){
  var elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    describe('binarySearch', function(){
        var tests = [
          {searchNumber: 3, sortedList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], expected: 3},
          {searchNumber: 5, sortedList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], expected: 5}
        ];

        tests.forEach(function(test) {
          it('should return ' + test.searchNumber + ' args', function() {

            expect(binarySearch.binarySearch(test.sortedList, test.searchNumber)).to.equal(test.expected);
          });
        });

    })

    describe('linearSearch', function(){
        var tests = [
          {num: 4, mixList: [0,1,7,4,6,2,3,5,9,8], expected: 3}, // this is index of 4
          {num: 6, mixList: [0,1,7,4,6,2,3,5,9,8], expected: 4}, // this is index of 6
          {num: 8, mixList: [0,1,7,4,6,2,3,5,9,8], expected: 9}, // this is index of 9
        ];

        tests.forEach(function(test) {
          it('should return ' + test.num + ' args', function() {

            expect(linearSearch.linearSearch(test.mixList, test.num)).to.equal(test.expected);
          });
        });

    })
})
