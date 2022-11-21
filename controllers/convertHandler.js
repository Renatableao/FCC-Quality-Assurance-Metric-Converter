function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/^[.\d\/]+/g) || "1";
    
    let nums = result[0].split('/');
      
    if (nums.length > 2) {
      return undefined;
    }

    let num1 = nums[0];
    let num2 = nums[1] || "1";

    if (isNaN(num1) || isNaN(num2)) {
      return undefined;
    }

    result = parseFloat(num1) / parseFloat(num2);
    
    return result;
  };
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-z]+/ig)

    if (unit == null) {
      return undefined
    }
    
    let result =  unit[0].toLowerCase();

    switch (result) {
      case "kg":
        return "kg";
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi": 
        return "mi";
      case "l":
        return "L";
      default: 
        return undefined;
    }    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = initUnit.toLowerCase();

    switch (result) {
        case "kg":
        return "lbs";
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi": 
        return "km";
      case "l":
        return "gal";
      default: 
        return undefined;
    }    
  };

  this.spellOutUnit = function(unit) {
    let result = unit.toLowerCase();

    switch (result) {
        case "kg":
        return "kilograms";
      case "km":
        return "kilometers";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "mi": 
        return "miles";
      case "l":
        return "liters";
      default: 
        return undefined;
    }    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
        case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi": 
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      default: 
        return undefined;
    }    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
