const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      let input = '50L';
      assert.equal(convertHandler.getNum(input), 50);
      done();
    }) 


    test('Decimal number input', function(done) {
      let input = '10.2gal';
      assert.equal(convertHandler.getNum(input), 10.2);
      done();
    }) 

    test('Fractional input', function(done) {
      let input = '10/2gal';
      assert.equal(convertHandler.getNum(input), 10/2);
      done();
    }) 

     test('Fractional input with a decimal', function(done) {
      let input = '10.4/2gal';
      assert.equal(convertHandler.getNum(input), 10.4/2);
      done();
    }) 

    test('Invalid Input (double fraction)', function(done) {
      const input = '12/2/4mi';
      assert.equal(convertHandler.getNum(input),undefined)
      done();
    });

    test('No Numerical Input', function(done) {
      const input = 'gal';
      assert.equal(convertHandler.getNum(input), 1)
      done();
    }); 
  });

  suite('Function convertHandler.getUnit(input)', function() {

   test('Each Valid Input Unit', function(done) {
      let input = [ 'gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
     let output = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'gal', 'L', 'mi', 'km', 'lbs', 'kg' ];

      input.forEach((ele, index) => {
        assert.equal(convertHandler.getUnit(ele), output[index]);
      });
      done();
   });

   test('Invalid Input Unit', function(done) {
     const input = '23hg';
      assert.equal(convertHandler.getUnit(input), undefined)
      done();
   });

    test('Invalid Input Unit', function(done) {
     const input = '23hg';
      assert.equal(convertHandler.getUnit(input), undefined)
      done();
   }); 
  });


  suite('Function convertHandler.getReturnUnit(input)', function() {
   
    test('Each Valid Input Unit', function(done) {
      let input = [ 'gal', 'L', 'mi', 'km', 'lbs', 'kg'];
     let output = ['L', 'gal', 'km', 'mi', 'kg', 'lbs' ];

      input.forEach((ele, index) => {
        assert.equal(convertHandler.getReturnUnit(ele), output[index]);
      });
      done();
   });

  });

  suite('Function convertHandler.spellOutUnit(input)', function() {

    test('Each Valid Input Unit', function(done) {
      let input = [ 'gal', 'L', 'mi', 'km', 'lbs', 'kg'];
     let output = [ 'gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms' ];

      input.forEach((ele, index) => {
        assert.equal(convertHandler.spellOutUnit(ele), output[index]);
      });
      done();
   });
  });

   suite('Function convertHandler.convert(input)', function() {

     test('Convert gal to L', function(done) {
      let input = [10, 'gal'];
      let output = 37.8541;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });

     test('Convert L to gal', function(done) {
      let input = [10, 'L'];
      let output = 2.64172;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });

     test('Convert mi to km', function(done) {
      let input = [10, 'mi'];
      let output = 16.0934;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });

     test('Convert km to mi', function(done) {
      let input = [10, 'km'];
      let output = 6.21373;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
     
    test('Convert lbs to kg', function(done) {
      let input = [10, 'lbs'];
      let output = 4.53592;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
     
     test('Convert kg to lbs', function(done) {
      let input = [10, 'kg'];
      let output = 22.04624;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
   })
    
  })
